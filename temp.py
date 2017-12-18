import requests
import json
from flask import Flask, request
from json import dumps
from flask.ext.jsonpify import jsonify
from flask_cors import CORS

username = "aditya1495"
apiKey = "3fe2254bb42e851aef4b9ac513a84d6b217a77e0"
fxmlUrl = "https://flightxml.flightaware.com/json/FlightXML3/"
app = Flask(__name__)
CORS(app)

@app.route('/getNewDelays', methods=['GET'])
def getLiveFeed():
    payload = {'howMany':'1'}
    response = requests.get(fxmlUrl + "AirportDelays", 
        params=payload, auth=(username, apiKey))
    
    print (response.json());

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'data': ''})

@app.route('/flightFetch', methods=['GET'])
def findFlights():
    origin = request.args.get('origin')
    destination = request.args.get('destination')
    
    payload = {'howMany':'15', 'origin' : origin, 'destination' : destination, 'type' : 'nonstop'}
    response = requests.get(fxmlUrl + "FindFlight", 
        params=payload, auth=(username, apiKey))
    
    print (json.dumps(response.json(), indent=2));

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'data': ''})

@app.route('/getFlightInfoStatus', methods=['GET'])
def getFlightInfoStatus():
    ident = request.args.get('ident')
    payload = {'howMany':'10', 'ident' : ident}
    response = requests.get(fxmlUrl + "FlightInfoStatus", 
        params=payload, auth=(username, apiKey))
    
    print (response.json());

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'data': ''})
    
if __name__ == '__main__':
    app.run(port=7799)
#    findFlights('NYC', 'DEL')