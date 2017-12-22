import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import pandas as pd
import pickle as pkl


from sklearn.linear_model import LogisticRegression
from sklearn. metrics import roc_auc_score, confusion_matrix

from flio import load_data

airlines_df, airports_df, flights_df = load_data()

airlines_df = airlines_df.reset_index()

print(list(airlines_df['IATA_CODE']))


# Filter data to keys of interest
keys = ['MONTH', 'DAY', 'DAY_OF_WEEK', 'AIRLINE', 'FLIGHT_NUMBER', 'TAIL_NUMBER', 'ORIGIN_AIRPORT',
       'DESTINATION_AIRPORT', 'SCHEDULED_DEPARTURE', 'DEPARTURE_TIME']

flights_df = flights_df[keys]



all_airports, airport_inverse, airport_count = np.unique(flights_df['ORIGIN_AIRPORT'],return_counts=True,return_inverse=True)

Nflights_orig = np.zeros(len(airport_inverse))
for i in range(len(all_airports)):
    Nflights_orig[np.where(airport_inverse==i)] = airport_count[i]

flights_df = flights_df.loc[flights_df.index[Nflights_orig>=7300]]

flights_df = flights_df.dropna()
flights_df.head()


# Shuffle data
delay_cutoff = 15

flights_df = flights_df.reset_index(drop=True)
labels_preshuffle = flights_df['DEPARTURE_DELAY'].values > delay_cutoff

flights_df = flights_df.reset_index(drop=True)

# General functions for computing features
def make_onehot_feat_dict_from_vals(df, feat_key, feat_name, feat_cutoffs):
    
    # Create keys
    N = len(feat_cutoffs) - 1
    keys = [0]*N
    for i in range(N):
        keys[i] = 'f_'+feat_name+'_'+ str(feat_cutoffs[i])
    # Find the indices for each class
    feat_dict = {}
    for i in range(N):
        feat_dict[keys[i]] = np.transpose(
                    np.logical_and(df[feat_key].values>= feat_cutoffs[i],
                                df[feat_key].values<feat_cutoffs[i+1]))
    return feat_dict


def make_onehot_feat_dict(df, feat_key, feat_name):
    # Create features for each day of the week
    feat_vals = df[feat_key].values
    all_vals = np.sort(np.unique(feat_vals))
    N_vals = len(all_vals)
    N_feat = N_vals - 1

    # Create keys
    keys = [0]*N_feat
    for i in range(N_feat):
        keys[i] = 'f_'+feat_name+'_'+ str(all_vals[i])

    # Create value for each training example in dict
    feat_dict = {}
    for i, k in enumerate(keys):
        this_day = all_vals[i]
        feat_dict[k] = feat_vals == this_day
    return feat_dict


def gen_feats(df):
    #### 1a. Duration

	cutoffs = np.arange(60,780,60)
	original_feat = make_onehot_feat_dict_from_vals(df,
						'SCHEDULED_TIME', 'dur', cutoffs)


	flights_df['SCHEDULED_DEPARTURE']


    #### 1b. Day of week

	days_dict = make_onehot_feat_dict(df, 'DAY_OF_WEEK', 'day')


    #### 1c. Month

	months_dict = make_onehot_feat_dict(df, 'MONTH', 'month') 


	flights_df['MONTH']

    #### 1d. Departing airport

	dap_dict = make_onehot_feat_dict(df, 'ORIGIN_AIRPORT', 'dap') 


	flights_df['ORIGIN_AIRPORT']


    #### 1e. Airline

	al_dict = make_onehot_feat_dict(df, 'AIRLINE', 'al') 


	flights_df['AIRLINE']


    #### 1f. Departure hour

# Add departure hour as a feature

	return original_feat, days_dict, dap_dict, months_dict, al_dict


def eval_predictor(test_ps, y_test, train_ps, y_train):

# # 3. Evaluate predictor performance
# The area under the ROC curve (AUC) is used as the measure of accuracy.

# ### 3a. Training and validation accuracy

	all_ps = np.hstack(list(test_ps.values()))
	all_ys = np.hstack(list(y_test.values()))

	all_ps_train = np.hstack(list(train_ps.values()))
	all_ys_train = np.hstack(list(y_train.values()))

original_feat, daysfeat_dict, dapfeat_dict, monthsfeat_dict, alfeat_dict = gen_feats(flights_df)

flights_df['HOUR_DEPARTURE'] = np.ceil(flights_df['SCHEDULED_DEPARTURE'].values/100).astype(int)
hrfeat_dict = make_onehot_feat_dict(flights_df, 'HOUR_DEPARTURE', 'hr')

all_dicts = [original_feat, daysfeat_dict, monthsfeat_dict, alfeat_dict, hrfeat_dict]
feat_dict = all_dicts[0].copy()
for d in all_dicts[1:]:
    feat_dict.update(d)


df_feat = pd.DataFrame.from_dict(feat_dict)
df_feat.head()

# ### 1f. Split features into training and validation sets for each airport

airport_keys = np.array(list(dapfeat_dict.keys()))
X_train = {}
X_test = {}
y_train = {}
y_test = {}
for apk in airport_keys:
    # Isolate X and y for each airport
    ap_idx = np.transpose(np.argwhere(dapfeat_dict[apk]))[0]
    X_all = df_feat.loc[ap_idx].values
    y_all = labels_shuffle[ap_idx]
    
    # Calculate train and test set size
    N_flights = len(y_all)
    N_train = int(N_flights*.7)
    N_test = N_flights - N_train
    
    # Make train and test sets
    X_train[apk[-3:]] = X_all[:N_train]
    X_test[apk[-3:]] = X_all[N_train:]
    y_train[apk[-3:]] = y_all[:N_train]
    y_test[apk[-3:]] = y_all[N_train:]


# # 2. Train model for each airport

train_accs = {}
test_accs = {}
train_ps = {}
test_ps = {}
for k in X_train.keys():
    models = LogisticRegression(C=10)
    models.fit(X_train[k], y_train[k])
    pkl.dump(models, open('LRdep_'+k+'.pkl', 'wb'))
    
    # Get probabilities
    train_ps[k] = models.predict_proba(X_train[k])[:,1]
    test_ps[k] = models.predict_proba(X_test[k])[:,1]

    # Evaluate model
    train_accs[k] = roc_auc_score(y_train[k], train_ps[k])
    test_accs[k] = roc_auc_score(y_test[k], test_ps[k])


# ### 3b. Plot distribution of accuracy across airports

# Plot accuracy
plt.figure(figsize=(8,5))
accs = plt.hist(list(test_accs.values()),bins=np.arange(0.4,0.9,0.04),color='k')
plt.xlabel('accuracy (AUC)',size=20)
plt.ylabel('count',size=20)
plt.xticks(np.arange(0.4,0.9,0.04), size=15)
plt.yticks(size=15)
plt.title('Prediction accuracy across airports',size=20)
