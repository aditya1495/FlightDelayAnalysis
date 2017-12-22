import pandas as pd
import numpy as np

def load_data(data_folder = '/home/hrishi/Sem1/BigData/Project/data/', N_flights = None):
    df_al = pd.DataFrame.from_csv(data_folder+'airlines.csv')
    df_ap = pd.DataFrame.from_csv(data_folder+'airports.csv')

    if N_flights is None:
        df_fl = pd.io.parsers.read_csv(data_folder+'flights.csv')
    else:
        df_fl = pd.io.parsers.read_csv(data_folder+'flights.csv', nrows = N_flights)

    return df_al, df_ap, df_fl
