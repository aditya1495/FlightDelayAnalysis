import requests
import json
from flask import Flask, request
from json import dumps
#from flask.ext.jsonpify import jsonify
from flask_cors import CORS
from datetime import datetime
import pandas as pd
import difflib
import numpy as np
import pickle as pkl
import sys

username = "aditya1495"
apiKey = "3fe2254bb42e851aef4b9ac513a84d6b217a77e0"
fxmlUrl = "https://flightxml.flightaware.com/json/FlightXML3/"
app = Flask(__name__)
CORS(app)

pkl_folder = 'saved_models/'

@app.route('/getNewDelays', methods=['GET'])
def getLiveFeed():
    payload = {'howMany':'1'}
    response = requests.get(fxmlUrl + "AirportDelays", 
        params=payload, auth=(username, apiKey))
    
    print (response.json());

    if response.status_code == 200:
        return json.dumps(response.json())
    else:
        return json.dumps({'data': ''})

@app.route('/flightFetch', methods=['GET'])
def findFlights():
    origin = request.args.get('origin')
    destination = request.args.get('destination')
    payload = {'howMany':'5', 'origin' : origin, 'destination' : destination, 'type' : 'nonstop'}
    response = requests.get(fxmlUrl + "FindFlight", 
        params=payload, auth=(username, apiKey))
    df_al = pd.DataFrame.from_csv('airlines.csv')    
    df_al = df_al.reset_index()
    airline_list = np.sort(np.array(list(df_al['IATA_CODE'])))
    flightinfo = response.json()['FindFlightResult']['flights']
    day_dict = {'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6, 'Sunday':7}
    res = response.json()
    for i,fl in enumerate(flightinfo):
        dep_time = fl['segments'][0]['filed_departure_time']['time']
        arr_time = fl['segments'][0]['estimated_arrival_time']['time']
        dur = float(fl['segments'][0]['estimated_arrival_time']['epoch']) - float(fl['segments'][0]['filed_departure_time']['epoch'])
        dur = dur/60.0
        airline = fl['segments'][0]['airline']
        dep_date = fl['segments'][0]['filed_departure_time']['date']
        dep_day = fl['segments'][0]['filed_departure_time']['dow']
        dep_time = datetime.strptime(dep_time,'%I:%M%p')
        arr_time = datetime.strptime(arr_time,'%I:%M%p')
        dep_date = datetime.strptime(dep_date, '%m/%d/%Y')
        al = difflib.get_close_matches(airline, airline_list)
        if len(al)==0:
            al = airline_list[0]
        else:
            al = al[0]
        vec = np.zeros((64))
        vec[int(dur/60.0)] = 1
        last = len(np.arange(60,780,60))
        vec[last + day_dict[dep_day] - 1] = 1.0
        last += 7
        vec[last + int(dep_date.month) - 1] = 1.0
        vec[last + np.where(airline_list==al)[0][0]] = 1.0
        last +=len(airline_list)
        vec[last + int(dep_time.hour)] = 1.0
        pkl_str = pkl_folder+"LRdep_SFO" + ".pkl"
        model = pkl.load(open(pkl_str, "rb"))
        pred = model.predict(vec.reshape(1,-1))[0]
        res['FindFlightResult']['flights'][i]['segments'][0]['departure_delay'] = int(pred)
    
	#print (json.dumps(response.json(), indent=2));
    if response.status_code == 200:
        return json.dumps(res)
    else:
        return json.dumps({'data': ''})

@app.route('/getFlightInfoStatus', methods=['GET'])
def getFlightInfoStatus():
    ident = request.args.get('ident')
    payload = {'howMany':'10', 'ident' : ident}
    response = requests.get(fxmlUrl + "FlightInfoStatus", 
        params=payload, auth=(username, apiKey))
    
    print (response.json());

    if response.status_code == 200:
        return json.dumps(response.json())
    else:
        return json.dumps({'data': ''})
    
if __name__ == '__main__':

    app.run(port=7799)
#    findFlights('NYC', 'DEL')
