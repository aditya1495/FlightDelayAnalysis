// Animation / interval Vars

var animLoop = false,
		animIndex = 0,
		planePath = false,
		trailPath = false;

// Reference of city lat / long points

var places	=[
{
   "IATA_CODE": "ABE",
   "LATITUDE": 40.65236,
   "LONGITUDE": -75.4404
 },
 {
   "IATA_CODE": "ABI",
   "LATITUDE": 32.41132,
   "LONGITUDE": -99.6819
 },
 {
   "IATA_CODE": "ABQ",
   "LATITUDE": 35.04022,
   "LONGITUDE": -106.60919
 },
 {
   "IATA_CODE": "ABR",
   "LATITUDE": 45.44906,
   "LONGITUDE": -98.42183
 },
 {
   "IATA_CODE": "ABY",
   "LATITUDE": 31.53552,
   "LONGITUDE": -84.19447
 },
 {
   "IATA_CODE": "ACK",
   "LATITUDE": 41.25305,
   "LONGITUDE": -70.06018
 },
 {
   "IATA_CODE": "ACT",
   "LATITUDE": 31.61129,
   "LONGITUDE": -97.23052
 },
 {
   "IATA_CODE": "ACV",
   "LATITUDE": 40.97812,
   "LONGITUDE": -124.10862
 },
 {
   "IATA_CODE": "ACY",
   "LATITUDE": 39.45758,
   "LONGITUDE": -74.57717
 },
 {
   "IATA_CODE": "ADK",
   "LATITUDE": 51.87796,
   "LONGITUDE": -176.64603
 },
 {
   "IATA_CODE": "ADQ",
   "LATITUDE": 57.74997,
   "LONGITUDE": -152.49386
 },
 {
   "IATA_CODE": "AEX",
   "LATITUDE": 31.32737,
   "LONGITUDE": -92.54856
 },
 {
   "IATA_CODE": "AGS",
   "LATITUDE": 33.36996,
   "LONGITUDE": -81.9645
 },
 {
   "IATA_CODE": "AKN",
   "LATITUDE": 58.6768,
   "LONGITUDE": -156.64922
 },
 {
   "IATA_CODE": "ALB",
   "LATITUDE": 42.74812,
   "LONGITUDE": -73.80298
 },
 {
   "IATA_CODE": "ALO",
   "LATITUDE": 42.55708,
   "LONGITUDE": -92.40034
 },
 {
   "IATA_CODE": "AMA",
   "LATITUDE": 35.21937,
   "LONGITUDE": -101.70593
 },
 {
   "IATA_CODE": "ANC",
   "LATITUDE": 61.17432,
   "LONGITUDE": -149.99619
 },
 {
   "IATA_CODE": "APN",
   "LATITUDE": 45.07807,
   "LONGITUDE": -83.56029
 },
 {
   "IATA_CODE": "ASE",
   "LATITUDE": 39.22316,
   "LONGITUDE": -106.86885
 },
 {
   "IATA_CODE": "ATL",
   "LATITUDE": 33.64044,
   "LONGITUDE": -84.42694
 },
 {
   "IATA_CODE": "ATW",
   "LATITUDE": 44.25741,
   "LONGITUDE": -88.51948
 },
 {
   "IATA_CODE": "AUS",
   "LATITUDE": 30.19453,
   "LONGITUDE": -97.66987
 },
 {
   "IATA_CODE": "AVL",
   "LATITUDE": 35.43619,
   "LONGITUDE": -82.54181
 },
 {
   "IATA_CODE": "AVP",
   "LATITUDE": 41.33815,
   "LONGITUDE": -75.72427
 },
 {
   "IATA_CODE": "AZO",
   "LATITUDE": 42.23488,
   "LONGITUDE": -85.55206
 },
 {
   "IATA_CODE": "BDL",
   "LATITUDE": 41.93887,
   "LONGITUDE": -72.68323
 },
 {
   "IATA_CODE": "BET",
   "LATITUDE": 60.77978,
   "LONGITUDE": -161.838
 },
 {
   "IATA_CODE": "BFL",
   "LATITUDE": 35.4336,
   "LONGITUDE": -119.05677
 },
 {
   "IATA_CODE": "BGM",
   "LATITUDE": 42.20848,
   "LONGITUDE": -75.97961
 },
 {
   "IATA_CODE": "BGR",
   "LATITUDE": 44.80744,
   "LONGITUDE": -68.82814
 },
 {
   "IATA_CODE": "BHM",
   "LATITUDE": 33.56294,
   "LONGITUDE": -86.75355
 },
 {
   "IATA_CODE": "BIL",
   "LATITUDE": 45.80766,
   "LONGITUDE": -108.54286
 },
 {
   "IATA_CODE": "BIS",
   "LATITUDE": 46.77411,
   "LONGITUDE": -100.74672
 },
 {
   "IATA_CODE": "BJI",
   "LATITUDE": 47.50942,
   "LONGITUDE": -94.93372
 },
 {
   "IATA_CODE": "BLI",
   "LATITUDE": 48.79275,
   "LONGITUDE": -122.53753
 },
 {
   "IATA_CODE": "BMI",
   "LATITUDE": 40.47799,
   "LONGITUDE": -88.91595
 },
 {
   "IATA_CODE": "BNA",
   "LATITUDE": 36.12448,
   "LONGITUDE": -86.67818
 },
 {
   "IATA_CODE": "BOI",
   "LATITUDE": 43.56444,
   "LONGITUDE": -116.22278
 },
 {
   "IATA_CODE": "BOS",
   "LATITUDE": 42.36435,
   "LONGITUDE": -71.00518
 },
 {
   "IATA_CODE": "BPT",
   "LATITUDE": 29.95083,
   "LONGITUDE": -94.02069
 },
 {
   "IATA_CODE": "BQK",
   "LATITUDE": 31.25903,
   "LONGITUDE": -81.46631
 },
 {
   "IATA_CODE": "BQN",
   "LATITUDE": 18.49486,
   "LONGITUDE": -67.12944
 },
 {
   "IATA_CODE": "BRD",
   "LATITUDE": 46.39786,
   "LONGITUDE": -94.13723
 },
 {
   "IATA_CODE": "BRO",
   "LATITUDE": 25.90683,
   "LONGITUDE": -97.42586
 },
 {
   "IATA_CODE": "BRW",
   "LATITUDE": 71.28545,
   "LONGITUDE": -156.766
 },
 {
   "IATA_CODE": "BTM",
   "LATITUDE": 45.9548,
   "LONGITUDE": -112.49746
 },
 {
   "IATA_CODE": "BTR",
   "LATITUDE": 30.53316,
   "LONGITUDE": -91.14963
 },
 {
   "IATA_CODE": "BTV",
   "LATITUDE": 44.473,
   "LONGITUDE": -73.15031
 },
 {
   "IATA_CODE": "BUF",
   "LATITUDE": 42.94052,
   "LONGITUDE": -78.73217
 },
 {
   "IATA_CODE": "BUR",
   "LATITUDE": 34.20062,
   "LONGITUDE": -118.3585
 },
 {
   "IATA_CODE": "BWI",
   "LATITUDE": 39.1754,
   "LONGITUDE": -76.6682
 },
 {
   "IATA_CODE": "BZN",
   "LATITUDE": 45.7769,
   "LONGITUDE": -111.15301
 },
 {
   "IATA_CODE": "CAE",
   "LATITUDE": 33.93884,
   "LONGITUDE": -81.11954
 },
 {
   "IATA_CODE": "CAK",
   "LATITUDE": 40.91631,
   "LONGITUDE": -81.44247
 },
 {
   "IATA_CODE": "CDC",
   "LATITUDE": 37.70097,
   "LONGITUDE": -113.09858
 },
 {
   "IATA_CODE": "CDV",
   "LATITUDE": 60.49183,
   "LONGITUDE": -145.47765
 },
 {
   "IATA_CODE": "CEC",
   "LATITUDE": 41.78016,
   "LONGITUDE": -124.23653
 },
 {
   "IATA_CODE": "CHA",
   "LATITUDE": 35.03527,
   "LONGITUDE": -85.20379
 },
 {
   "IATA_CODE": "CHO",
   "LATITUDE": 38.13864,
   "LONGITUDE": -78.45286
 },
 {
   "IATA_CODE": "CHS",
   "LATITUDE": 32.89865,
   "LONGITUDE": -80.04051
 },
 {
   "IATA_CODE": "CID",
   "LATITUDE": 41.88459,
   "LONGITUDE": -91.71087
 },
 {
   "IATA_CODE": "CIU",
   "LATITUDE": 46.25075,
   "LONGITUDE": -84.47239
 },
 {
   "IATA_CODE": "CLD",
   "LATITUDE": 33.12723,
   "LONGITUDE": -117.27873
 },
 {
   "IATA_CODE": "CLE",
   "LATITUDE": 41.41089,
   "LONGITUDE": -81.8494
 },
 {
   "IATA_CODE": "CLL",
   "LATITUDE": 30.58859,
   "LONGITUDE": -96.36382
 },
 {
   "IATA_CODE": "CLT",
   "LATITUDE": 35.21401,
   "LONGITUDE": -80.94313
 },
 {
   "IATA_CODE": "CMH",
   "LATITUDE": 39.99799,
   "LONGITUDE": -82.89188
 },
 {
   "IATA_CODE": "CMI",
   "LATITUDE": 40.03925,
   "LONGITUDE": -88.27806
 },
 {
   "IATA_CODE": "CMX",
   "LATITUDE": 47.16842,
   "LONGITUDE": -88.48906
 },
 {
   "IATA_CODE": "CNY",
   "LATITUDE": 38.75496,
   "LONGITUDE": -109.75484
 },
 {
   "IATA_CODE": "COD",
   "LATITUDE": 44.52019,
   "LONGITUDE": -109.0238
 },
 {
   "IATA_CODE": "COS",
   "LATITUDE": 38.80581,
   "LONGITUDE": -104.70025
 },
 {
   "IATA_CODE": "COU",
   "LATITUDE": 38.81809,
   "LONGITUDE": -92.21963
 },
 {
   "IATA_CODE": "CPR",
   "LATITUDE": 42.90836,
   "LONGITUDE": -106.46447
 },
 {
   "IATA_CODE": "CRP",
   "LATITUDE": 27.77036,
   "LONGITUDE": -97.50122
 },
 {
   "IATA_CODE": "CRW",
   "LATITUDE": 38.37315,
   "LONGITUDE": -81.59319
 },
 {
   "IATA_CODE": "CSG",
   "LATITUDE": 32.51633,
   "LONGITUDE": -84.93886
 },
 {
   "IATA_CODE": "CVG",
   "LATITUDE": 39.04614,
   "LONGITUDE": -84.66217
 },
 {
   "IATA_CODE": "CWA",
   "LATITUDE": 44.77762,
   "LONGITUDE": -89.66678
 },
 {
   "IATA_CODE": "DAB",
   "LATITUDE": 29.17992,
   "LONGITUDE": -81.05806
 },
 {
   "IATA_CODE": "DAL",
   "LATITUDE": 32.84711,
   "LONGITUDE": -96.85177
 },
 {
   "IATA_CODE": "DAY",
   "LATITUDE": 39.90238,
   "LONGITUDE": -84.21938
 },
 {
   "IATA_CODE": "DBQ",
   "LATITUDE": 42.40296,
   "LONGITUDE": -90.70917
 },
 {
   "IATA_CODE": "DCA",
   "LATITUDE": 38.85208,
   "LONGITUDE": -77.03772
 },
 {
   "IATA_CODE": "DEN",
   "LATITUDE": 39.85841,
   "LONGITUDE": -104.667
 },
 {
   "IATA_CODE": "DFW",
   "LATITUDE": 32.89595,
   "LONGITUDE": -97.0372
 },
 {
   "IATA_CODE": "DHN",
   "LATITUDE": 31.32134,
   "LONGITUDE": -85.44963
 },
 {
   "IATA_CODE": "DIK",
   "LATITUDE": 46.79739,
   "LONGITUDE": -102.80195
 },
 {
   "IATA_CODE": "DLG",
   "LATITUDE": 59.04541,
   "LONGITUDE": -158.50334
 },
 {
   "IATA_CODE": "DLH",
   "LATITUDE": 46.84209,
   "LONGITUDE": -92.19365
 },
 {
   "IATA_CODE": "DRO",
   "LATITUDE": 37.15152,
   "LONGITUDE": -107.75377
 },
 {
   "IATA_CODE": "DSM",
   "LATITUDE": 41.53493,
   "LONGITUDE": -93.66068
 },
 {
   "IATA_CODE": "DTW",
   "LATITUDE": 42.21206,
   "LONGITUDE": -83.34884
 },
 {
   "IATA_CODE": "DVL",
   "LATITUDE": 48.11425,
   "LONGITUDE": -98.90878
 },
 {
   "IATA_CODE": "EAU",
   "LATITUDE": 44.86526,
   "LONGITUDE": -91.48507
 },
 {
   "IATA_CODE": "EGE",
   "LATITUDE": 39.64257,
   "LONGITUDE": -106.9177
 },
 {
   "IATA_CODE": "EKO",
   "LATITUDE": 40.82493,
   "LONGITUDE": -115.7917
 },
 {
   "IATA_CODE": "ELM",
   "LATITUDE": 42.15991,
   "LONGITUDE": -76.89144
 },
 {
   "IATA_CODE": "ELP",
   "LATITUDE": 31.80667,
   "LONGITUDE": -106.37781
 },
 {
   "IATA_CODE": "ERI",
   "LATITUDE": 42.08202,
   "LONGITUDE": -80.17622
 },
 {
   "IATA_CODE": "ESC",
   "LATITUDE": 45.72267,
   "LONGITUDE": -87.09373
 },
 {
   "IATA_CODE": "EUG",
   "LATITUDE": 44.12326,
   "LONGITUDE": -123.21869
 },
 {
   "IATA_CODE": "EVV",
   "LATITUDE": 38.03799,
   "LONGITUDE": -87.53063
 },
 {
   "IATA_CODE": "EWN",
   "LATITUDE": 35.07297,
   "LONGITUDE": -77.04294
 },
 {
   "IATA_CODE": "EWR",
   "LATITUDE": 40.6925,
   "LONGITUDE": -74.16866
 },
 {
   "IATA_CODE": "EYW",
   "LATITUDE": 24.55611,
   "LONGITUDE": -81.75956
 },
 {
   "IATA_CODE": "FAI",
   "LATITUDE": 64.81368,
   "LONGITUDE": -147.85967
 },
 {
   "IATA_CODE": "FAR",
   "LATITUDE": 46.91935,
   "LONGITUDE": -96.81499
 },
 {
   "IATA_CODE": "FAT",
   "LATITUDE": 36.77619,
   "LONGITUDE": -119.71814
 },
 {
   "IATA_CODE": "FAY",
   "LATITUDE": 34.99147,
   "LONGITUDE": -78.88
 },
 {
   "IATA_CODE": "FCA",
   "LATITUDE": 48.3114,
   "LONGITUDE": -114.25507
 },
 {
   "IATA_CODE": "FLG",
   "LATITUDE": 35.13845,
   "LONGITUDE": -111.67122
 },
 {
   "IATA_CODE": "FLL",
   "LATITUDE": 26.07258,
   "LONGITUDE": -80.15275
 },
 {
   "IATA_CODE": "FNT",
   "LATITUDE": 42.9655,
   "LONGITUDE": -83.74346
 },
 {
   "IATA_CODE": "FSD",
   "LATITUDE": 43.58135,
   "LONGITUDE": -96.7417
 },
 {
   "IATA_CODE": "FSM",
   "LATITUDE": 35.33659,
   "LONGITUDE": -94.36744
 },
 {
   "IATA_CODE": "FWA",
   "LATITUDE": 40.97847,
   "LONGITUDE": -85.19515
 },
 {
   "IATA_CODE": "GCC",
   "LATITUDE": 44.3489,
   "LONGITUDE": -105.53936
 },
 {
   "IATA_CODE": "GCK",
   "LATITUDE": 37.92752,
   "LONGITUDE": -100.72441
 },
 {
   "IATA_CODE": "GEG",
   "LATITUDE": 47.61986,
   "LONGITUDE": -117.53384
 },
 {
   "IATA_CODE": "GFK",
   "LATITUDE": 47.94926,
   "LONGITUDE": -97.17611
 },
 {
   "IATA_CODE": "GGG",
   "LATITUDE": 32.38486,
   "LONGITUDE": -94.71171
 },
 {
   "IATA_CODE": "GJT",
   "LATITUDE": 39.12241,
   "LONGITUDE": -108.52673
 },
 {
   "IATA_CODE": "GNV",
   "LATITUDE": 29.69006,
   "LONGITUDE": -82.27178
 },
 {
   "IATA_CODE": "GPT",
   "LATITUDE": 30.40728,
   "LONGITUDE": -89.07009
 },
 {
   "IATA_CODE": "GRB",
   "LATITUDE": 44.48507,
   "LONGITUDE": -88.12959
 },
 {
   "IATA_CODE": "GRI",
   "LATITUDE": 40.96747,
   "LONGITUDE": -98.30861
 },
 {
   "IATA_CODE": "GRK",
   "LATITUDE": 31.0649,
   "LONGITUDE": -97.8278
 },
 {
   "IATA_CODE": "GRR",
   "LATITUDE": 42.88082,
   "LONGITUDE": -85.52277
 },
 {
   "IATA_CODE": "GSO",
   "LATITUDE": 36.09775,
   "LONGITUDE": -79.9373
 },
 {
   "IATA_CODE": "GSP",
   "LATITUDE": 34.89567,
   "LONGITUDE": -82.21886
 },
 {
   "IATA_CODE": "GST",
   "LATITUDE": 58.42438,
   "LONGITUDE": -135.70738
 },
 {
   "IATA_CODE": "GTF",
   "LATITUDE": 47.482,
   "LONGITUDE": -111.37069
 },
 {
   "IATA_CODE": "GTR",
   "LATITUDE": 33.45033,
   "LONGITUDE": -88.59137
 },
 {
   "IATA_CODE": "GUC",
   "LATITUDE": 38.53396,
   "LONGITUDE": -106.93318
 },
 {
   "IATA_CODE": "GUM",
   "LATITUDE": 13.48345,
   "LONGITUDE": -144.79598
 },
 {
   "IATA_CODE": "HDN",
   "LATITUDE": 40.48118,
   "LONGITUDE": -107.21766
 },
 {
   "IATA_CODE": "HIB",
   "LATITUDE": 47.3866,
   "LONGITUDE": -92.83899
 },
 {
   "IATA_CODE": "HLN",
   "LATITUDE": 46.60682,
   "LONGITUDE": -111.98275
 },
 {
   "IATA_CODE": "HNL",
   "LATITUDE": 21.31869,
   "LONGITUDE": -157.92241
 },
 {
   "IATA_CODE": "HOB",
   "LATITUDE": 32.68753,
   "LONGITUDE": -103.21703
 },
 {
   "IATA_CODE": "HOU",
   "LATITUDE": 29.64542,
   "LONGITUDE": -95.27889
 },
 {
   "IATA_CODE": "HPN",
   "LATITUDE": 41.06696,
   "LONGITUDE": -73.70757
 },
 {
   "IATA_CODE": "HRL",
   "LATITUDE": 26.22851,
   "LONGITUDE": -97.65439
 },
 {
   "IATA_CODE": "HSV",
   "LATITUDE": 34.64045,
   "LONGITUDE": -86.77311
 },
 {
   "IATA_CODE": "HYA",
   "LATITUDE": 41.66934,
   "LONGITUDE": -70.28036
 },
 {
   "IATA_CODE": "HYS",
   "LATITUDE": 38.84494,
   "LONGITUDE": -99.27403
 },
 {
   "IATA_CODE": "IAD",
   "LATITUDE": 38.94453,
   "LONGITUDE": -77.45581
 },
 {
   "IATA_CODE": "IAG",
   "LATITUDE": 43.10726,
   "LONGITUDE": -78.94538
 },
 {
   "IATA_CODE": "IAH",
   "LATITUDE": 29.98047,
   "LONGITUDE": -95.33972
 },
 {
   "IATA_CODE": "ICT",
   "LATITUDE": 37.64996,
   "LONGITUDE": -97.43305
 },
 {
   "IATA_CODE": "IDA",
   "LATITUDE": 43.51456,
   "LONGITUDE": -112.07017
 },
 {
   "IATA_CODE": "ILG",
   "LATITUDE": 39.67872,
   "LONGITUDE": -75.60653
 },
 {
   "IATA_CODE": "ILM",
   "LATITUDE": 34.27061,
   "LONGITUDE": -77.90256
 },
 {
   "IATA_CODE": "IMT",
   "LATITUDE": 45.81835,
   "LONGITUDE": -88.11454
 },
 {
   "IATA_CODE": "IND",
   "LATITUDE": 39.71733,
   "LONGITUDE": -86.29438
 },
 {
   "IATA_CODE": "INL",
   "LATITUDE": 48.56619,
   "LONGITUDE": -93.40307
 },
 {
   "IATA_CODE": "ISN",
   "LATITUDE": 48.17794,
   "LONGITUDE": -103.64235
 },
 {
   "IATA_CODE": "ISP",
   "LATITUDE": 40.79524,
   "LONGITUDE": -73.10021
 },
 {
   "IATA_CODE": "ITH",
   "LATITUDE": 42.49103,
   "LONGITUDE": -76.45844
 },
 {
   "IATA_CODE": "ITO",
   "LATITUDE": 19.72026,
   "LONGITUDE": -155.04847
 },
 {
   "IATA_CODE": "JAC",
   "LATITUDE": 43.60732,
   "LONGITUDE": -110.73774
 },
 {
   "IATA_CODE": "JAN",
   "LATITUDE": 32.31117,
   "LONGITUDE": -90.07589
 },
 {
   "IATA_CODE": "JAX",
   "LATITUDE": 30.49406,
   "LONGITUDE": -81.68786
 },
 {
   "IATA_CODE": "JFK",
   "LATITUDE": 40.63975,
   "LONGITUDE": -73.77893
 },
 {
   "IATA_CODE": "JLN",
   "LATITUDE": 37.15181,
   "LONGITUDE": -94.49827
 },
 {
   "IATA_CODE": "JMS",
   "LATITUDE": 46.92972,
   "LONGITUDE": -98.6782
 },
 {
   "IATA_CODE": "JNU",
   "LATITUDE": 58.35496,
   "LONGITUDE": -134.57628
 },
 {
   "IATA_CODE": "KOA",
   "LATITUDE": 19.73877,
   "LONGITUDE": -156.04563
 },
 {
   "IATA_CODE": "KTN",
   "LATITUDE": 55.35557,
   "LONGITUDE": -131.71374
 },
 {
   "IATA_CODE": "LAN",
   "LATITUDE": 42.7787,
   "LONGITUDE": -84.58736
 },
 {
   "IATA_CODE": "LAR",
   "LATITUDE": 41.31205,
   "LONGITUDE": -105.67499
 },
 {
   "IATA_CODE": "LAS",
   "LATITUDE": 36.08036,
   "LONGITUDE": -115.15233
 },
 {
   "IATA_CODE": "LAW",
   "LATITUDE": 34.56771,
   "LONGITUDE": -98.41664
 },
 {
   "IATA_CODE": "LAX",
   "LATITUDE": 33.94254,
   "LONGITUDE": -118.40807
 },
 {
   "IATA_CODE": "LBB",
   "LATITUDE": 33.66364,
   "LONGITUDE": -101.82278
 },
 {
   "IATA_CODE": "LBE",
   "LATITUDE": 40.27594,
   "LONGITUDE": -79.4048
 },
 {
   "IATA_CODE": "LCH",
   "LATITUDE": 30.1261,
   "LONGITUDE": -93.2234
 },
 {
   "IATA_CODE": "LEX",
   "LATITUDE": 38.03697,
   "LONGITUDE": -84.60539
 },
 {
   "IATA_CODE": "LFT",
   "LATITUDE": 30.20528,
   "LONGITUDE": -91.98766
 },
 {
   "IATA_CODE": "LGA",
   "LATITUDE": 40.77724,
   "LONGITUDE": -73.87261
 },
 {
   "IATA_CODE": "LGB",
   "LATITUDE": 33.81772,
   "LONGITUDE": -118.15161
 },
 {
   "IATA_CODE": "LIH",
   "LATITUDE": 21.97598,
   "LONGITUDE": -159.33896
 },
 {
   "IATA_CODE": "LIT",
   "LATITUDE": 34.7294,
   "LONGITUDE": -92.22425
 },
 {
   "IATA_CODE": "LNK",
   "LATITUDE": 40.85097,
   "LONGITUDE": -96.75925
 },
 {
   "IATA_CODE": "LRD",
   "LATITUDE": 27.54374,
   "LONGITUDE": -99.46154
 },
 {
   "IATA_CODE": "LSE",
   "LATITUDE": 43.87938,
   "LONGITUDE": -91.25654
 },
 {
   "IATA_CODE": "LWS",
   "LATITUDE": 46.3745,
   "LONGITUDE": -117.01539
 },
 {
   "IATA_CODE": "MAF",
   "LATITUDE": 31.94253,
   "LONGITUDE": -102.20191
 },
 {
   "IATA_CODE": "MBS",
   "LATITUDE": 43.53291,
   "LONGITUDE": -84.07965
 },
 {
   "IATA_CODE": "MCI",
   "LATITUDE": 39.29761,
   "LONGITUDE": -94.71391
 },
 {
   "IATA_CODE": "MCO",
   "LATITUDE": 28.42889,
   "LONGITUDE": -81.31603
 },
 {
   "IATA_CODE": "MDT",
   "LATITUDE": 40.1935,
   "LONGITUDE": -76.7634
 },
 {
   "IATA_CODE": "MDW",
   "LATITUDE": 41.78598,
   "LONGITUDE": -87.75242
 },
 {
   "IATA_CODE": "MEI",
   "LATITUDE": 32.33313,
   "LONGITUDE": -88.75121
 },
 {
   "IATA_CODE": "MEM",
   "LATITUDE": 35.04242,
   "LONGITUDE": -89.97667
 },
 {
   "IATA_CODE": "MFE",
   "LATITUDE": 26.17583,
   "LONGITUDE": -98.23861
 },
 {
   "IATA_CODE": "MFR",
   "LATITUDE": 42.37423,
   "LONGITUDE": -122.8735
 },
 {
   "IATA_CODE": "MGM",
   "LATITUDE": 32.30064,
   "LONGITUDE": -86.39398
 },
 {
   "IATA_CODE": "MHK",
   "LATITUDE": 39.14097,
   "LONGITUDE": -96.67083
 },
 {
   "IATA_CODE": "MHT",
   "LATITUDE": 42.93452,
   "LONGITUDE": -71.43706
 },
 {
   "IATA_CODE": "MIA",
   "LATITUDE": 25.79325,
   "LONGITUDE": -80.29056
 },
 {
   "IATA_CODE": "MKE",
   "LATITUDE": 42.94722,
   "LONGITUDE": -87.89658
 },
 {
   "IATA_CODE": "MKG",
   "LATITUDE": 43.16949,
   "LONGITUDE": -86.23822
 },
 {
   "IATA_CODE": "MLB",
   "LATITUDE": 28.10275,
   "LONGITUDE": -80.64581
 },
 {
   "IATA_CODE": "MLI",
   "LATITUDE": 41.44853,
   "LONGITUDE": -90.50754
 },
 {
   "IATA_CODE": "MLU",
   "LATITUDE": 32.51087,
   "LONGITUDE": -92.03769
 },
 {
   "IATA_CODE": "MMH",
   "LATITUDE": 37.62405,
   "LONGITUDE": -118.83777
 },
 {
   "IATA_CODE": "MOB",
   "LATITUDE": 30.69142,
   "LONGITUDE": -88.24283
 },
 {
   "IATA_CODE": "MOT",
   "LATITUDE": 48.25938,
   "LONGITUDE": -101.28033
 },
 {
   "IATA_CODE": "MQT",
   "LATITUDE": 46.35364,
   "LONGITUDE": -87.39536
 },
 {
   "IATA_CODE": "MRY",
   "LATITUDE": 36.58698,
   "LONGITUDE": -121.84295
 },
 {
   "IATA_CODE": "MSN",
   "LATITUDE": 43.13986,
   "LONGITUDE": -89.33751
 },
 {
   "IATA_CODE": "MSO",
   "LATITUDE": 46.91631,
   "LONGITUDE": -114.09056
 },
 {
   "IATA_CODE": "MSP",
   "LATITUDE": 44.88055,
   "LONGITUDE": -93.21692
 },
 {
   "IATA_CODE": "MSY",
   "LATITUDE": 29.99339,
   "LONGITUDE": -90.25803
 },
 {
   "IATA_CODE": "MTJ",
   "LATITUDE": 38.50887,
   "LONGITUDE": -107.89383
 },
 {
   "IATA_CODE": "MVY",
   "LATITUDE": 41.39303,
   "LONGITUDE": -70.61433
 },
 {
   "IATA_CODE": "MYR",
   "LATITUDE": 33.67975,
   "LONGITUDE": -78.92833
 },
 {
   "IATA_CODE": "OAJ",
   "LATITUDE": 34.82916,
   "LONGITUDE": -77.61214
 },
 {
   "IATA_CODE": "OAK",
   "LATITUDE": 37.72129,
   "LONGITUDE": -122.22072
 },
 {
   "IATA_CODE": "OGG",
   "LATITUDE": 20.89865,
   "LONGITUDE": -156.43046
 },
 {
   "IATA_CODE": "OKC",
   "LATITUDE": 35.39309,
   "LONGITUDE": -97.60073
 },
 {
   "IATA_CODE": "OMA",
   "LATITUDE": 41.30252,
   "LONGITUDE": -95.89417
 },
 {
   "IATA_CODE": "OME",
   "LATITUDE": 64.5122,
   "LONGITUDE": -165.44525
 },
 {
   "IATA_CODE": "ONT",
   "LATITUDE": 34.056,
   "LONGITUDE": -117.60119
 },
 {
   "IATA_CODE": "ORD",
   "LATITUDE": 41.9796,
   "LONGITUDE": -87.90446
 },
 {
   "IATA_CODE": "ORF",
   "LATITUDE": 36.89461,
   "LONGITUDE": -76.20122
 },
 {
   "IATA_CODE": "ORH",
   "LATITUDE": 42.26734,
   "LONGITUDE": -71.87571
 },
 {
   "IATA_CODE": "OTH",
   "LATITUDE": 43.41714,
   "LONGITUDE": -124.24603
 },
 {
   "IATA_CODE": "OTZ",
   "LATITUDE": 66.88468,
   "LONGITUDE": -162.59855
 },
 {
   "IATA_CODE": "PAH",
   "LATITUDE": 37.06083,
   "LONGITUDE": -88.77375
 },
 {
   "IATA_CODE": "PBI",
   "LATITUDE": 26.68316,
   "LONGITUDE": -80.09559
 },
 {
   "IATA_CODE": "PDX",
   "LATITUDE": 45.58872,
   "LONGITUDE": -122.5975
 },
 {
   "IATA_CODE": "PHF",
   "LATITUDE": 37.1319,
   "LONGITUDE": -76.49299
 },
 {
   "IATA_CODE": "PHL",
   "LATITUDE": 39.87195,
   "LONGITUDE": -75.24114
 },
 {
   "IATA_CODE": "PHX",
   "LATITUDE": 33.43417,
   "LONGITUDE": -112.00806
 },
 {
   "IATA_CODE": "PIA",
   "LATITUDE": 40.66424,
   "LONGITUDE": -89.69331
 },
 {
   "IATA_CODE": "PIB",
   "LATITUDE": 31.46715,
   "LONGITUDE": -89.33706
 },
 {
   "IATA_CODE": "PIH",
   "LATITUDE": 42.91131,
   "LONGITUDE": -112.59586
 },
 {
   "IATA_CODE": "PIT",
   "LATITUDE": 40.49147,
   "LONGITUDE": -80.23287
 },
 {
   "IATA_CODE": "PLN",
   "LATITUDE": 45.57093,
   "LONGITUDE": -84.79672
 },
 {
   "IATA_CODE": "PNS",
   "LATITUDE": 30.47331,
   "LONGITUDE": -87.18744
 },
 {
   "IATA_CODE": "PPG",
   "LATITUDE": 14.33102,
   "LONGITUDE": -170.71053
 },
 {
   "IATA_CODE": "PSC",
   "LATITUDE": 46.26468,
   "LONGITUDE": -119.11903
 },
 {
   "IATA_CODE": "PSE",
   "LATITUDE": 18.0083,
   "LONGITUDE": -66.56301
 },
 {
   "IATA_CODE": "PSG",
   "LATITUDE": 56.80165,
   "LONGITUDE": -132.94528
 },
 {
   "IATA_CODE": "PSP",
   "LATITUDE": 33.82922,
   "LONGITUDE": -116.50625
 },
 {
   "IATA_CODE": "PUB",
   "LATITUDE": 38.28909,
   "LONGITUDE": -104.49657
 },
 {
   "IATA_CODE": "PVD",
   "LATITUDE": 41.724,
   "LONGITUDE": -71.42822
 },
 {
   "IATA_CODE": "PWM",
   "LATITUDE": 43.64617,
   "LONGITUDE": -70.30875
 },
 {
   "IATA_CODE": "RAP",
   "LATITUDE": 44.04532,
   "LONGITUDE": -103.05737
 },
 {
   "IATA_CODE": "RDD",
   "LATITUDE": 40.50898,
   "LONGITUDE": -122.2934
 },
 {
   "IATA_CODE": "RDM",
   "LATITUDE": 44.25407,
   "LONGITUDE": -121.14996
 },
 {
   "IATA_CODE": "RDU",
   "LATITUDE": 35.87764,
   "LONGITUDE": -78.78747
 },
 {
   "IATA_CODE": "RHI",
   "LATITUDE": 45.63119,
   "LONGITUDE": -89.46745
 },
 {
   "IATA_CODE": "RIC",
   "LATITUDE": 37.50517,
   "LONGITUDE": -77.31967
 },
 {
   "IATA_CODE": "RKS",
   "LATITUDE": 41.59422,
   "LONGITUDE": -109.06519
 },
 {
   "IATA_CODE": "RNO",
   "LATITUDE": 39.49858,
   "LONGITUDE": -119.76806
 },
 {
   "IATA_CODE": "ROA",
   "LATITUDE": 37.32547,
   "LONGITUDE": -79.97543
 },
 {
   "IATA_CODE": "ROC",
   "LATITUDE": 43.11887,
   "LONGITUDE": -77.67238
 },
 {
   "IATA_CODE": "ROW",
   "LATITUDE": 33.30156,
   "LONGITUDE": -104.53056
 },
 {
   "IATA_CODE": "RST",
   "LATITUDE": 43.90883,
   "LONGITUDE": -92.49799
 },
 {
   "IATA_CODE": "RSW",
   "LATITUDE": 26.53617,
   "LONGITUDE": -81.75517
 },
 {
   "IATA_CODE": "SAF",
   "LATITUDE": 35.61678,
   "LONGITUDE": -106.08814
 },
 {
   "IATA_CODE": "SAN",
   "LATITUDE": 32.73356,
   "LONGITUDE": -117.18966
 },
 {
   "IATA_CODE": "SAT",
   "LATITUDE": 29.53369,
   "LONGITUDE": -98.46978
 },
 {
   "IATA_CODE": "SAV",
   "LATITUDE": 32.12758,
   "LONGITUDE": -81.20214
 },
 {
   "IATA_CODE": "SBA",
   "LATITUDE": 34.42621,
   "LONGITUDE": -119.84037
 },
 {
   "IATA_CODE": "SBN",
   "LATITUDE": 41.70895,
   "LONGITUDE": -86.31847
 },
 {
   "IATA_CODE": "SBP",
   "LATITUDE": 35.23706,
   "LONGITUDE": -120.64239
 },
 {
   "IATA_CODE": "SCC",
   "LATITUDE": 70.19476,
   "LONGITUDE": -148.46516
 },
 {
   "IATA_CODE": "SCE",
   "LATITUDE": 40.85121,
   "LONGITUDE": -77.8463
 },
 {
   "IATA_CODE": "SDF",
   "LATITUDE": 38.17439,
   "LONGITUDE": -85.736
 },
 {
   "IATA_CODE": "SEA",
   "LATITUDE": 47.44898,
   "LONGITUDE": -122.30931
 },
 {
   "IATA_CODE": "SFO",
   "LATITUDE": 37.619,
   "LONGITUDE": -122.37484
 },
 {
   "IATA_CODE": "SGF",
   "LATITUDE": 37.24433,
   "LONGITUDE": -93.38686
 },
 {
   "IATA_CODE": "SGU",
   "LATITUDE": 37.09058,
   "LONGITUDE": -113.59306
 },
 {
   "IATA_CODE": "SHV",
   "LATITUDE": 32.44663,
   "LONGITUDE": -93.8256
 },
 {
   "IATA_CODE": "SIT",
   "LATITUDE": 57.04714,
   "LONGITUDE": -135.3616
 },
 {
   "IATA_CODE": "SJC",
   "LATITUDE": 37.36186,
   "LONGITUDE": -121.92901
 },
 {
   "IATA_CODE": "SJT",
   "LATITUDE": 31.35775,
   "LONGITUDE": -100.49631
 },
 {
   "IATA_CODE": "SJU",
   "LATITUDE": 18.43942,
   "LONGITUDE": -66.00183
 },
 {
   "IATA_CODE": "SLC",
   "LATITUDE": 40.78839,
   "LONGITUDE": -111.97777
 },
 {
   "IATA_CODE": "SMF",
   "LATITUDE": 38.69542,
   "LONGITUDE": -121.59077
 },
 {
   "IATA_CODE": "SMX",
   "LATITUDE": 34.89925,
   "LONGITUDE": -120.45758
 },
 {
   "IATA_CODE": "SNA",
   "LATITUDE": 33.67566,
   "LONGITUDE": -117.86822
 },
 {
   "IATA_CODE": "SPI",
   "LATITUDE": 39.84395,
   "LONGITUDE": -89.67762
 },
 {
   "IATA_CODE": "SPS",
   "LATITUDE": 33.9888,
   "LONGITUDE": -98.49189
 },
 {
   "IATA_CODE": "SRQ",
   "LATITUDE": 27.39533,
   "LONGITUDE": -82.55411
 },
 {
   "IATA_CODE": "STC",
   "LATITUDE": 45.54532,
   "LONGITUDE": -94.05834
 },
 {
   "IATA_CODE": "STL",
   "LATITUDE": 38.74769,
   "LONGITUDE": -90.35999
 },
 {
   "IATA_CODE": "STT",
   "LATITUDE": 18.33731,
   "LONGITUDE": -64.97336
 },
 {
   "IATA_CODE": "STX",
   "LATITUDE": 17.70189,
   "LONGITUDE": -64.79856
 },
 {
   "IATA_CODE": "SUN",
   "LATITUDE": 43.50484,
   "LONGITUDE": -114.29659
 },
 {
   "IATA_CODE": "SUX",
   "LATITUDE": 42.4026,
   "LONGITUDE": -96.38437
 },
 {
   "IATA_CODE": "SWF",
   "LATITUDE": 41.50409,
   "LONGITUDE": -74.10484
 },
 {
   "IATA_CODE": "SYR",
   "LATITUDE": 43.11119,
   "LONGITUDE": -76.10631
 },
 {
   "IATA_CODE": "TLH",
   "LATITUDE": 30.39653,
   "LONGITUDE": -84.35033
 },
 {
   "IATA_CODE": "TOL",
   "LATITUDE": 41.58681,
   "LONGITUDE": -83.80783
 },
 {
   "IATA_CODE": "TPA",
   "LATITUDE": 27.97547,
   "LONGITUDE": -82.53325
 },
 {
   "IATA_CODE": "TRI",
   "LATITUDE": 36.47521,
   "LONGITUDE": -82.40742
 },
 {
   "IATA_CODE": "TTN",
   "LATITUDE": 40.27669,
   "LONGITUDE": -74.81347
 },
 {
   "IATA_CODE": "TUL",
   "LATITUDE": 36.19837,
   "LONGITUDE": -95.88824
 },
 {
   "IATA_CODE": "TUS",
   "LATITUDE": 32.11608,
   "LONGITUDE": -110.94103
 },
 {
   "IATA_CODE": "TVC",
   "LATITUDE": 44.74144,
   "LONGITUDE": -85.58224
 },
 {
   "IATA_CODE": "TWF",
   "LATITUDE": 42.4818,
   "LONGITUDE": -114.48774
 },
 {
   "IATA_CODE": "TXK",
   "LATITUDE": 33.45371,
   "LONGITUDE": -93.99102
 },
 {
   "IATA_CODE": "TYR",
   "LATITUDE": 32.35414,
   "LONGITUDE": -95.40239
 },
 {
   "IATA_CODE": "TYS",
   "LATITUDE": 35.81249,
   "LONGITUDE": -83.99286
 },
 {
   "IATA_CODE": "VEL",
   "LATITUDE": 40.4409,
   "LONGITUDE": -109.50992
 },
 {
   "IATA_CODE": "VLD",
   "LATITUDE": 30.7825,
   "LONGITUDE": -83.27672
 },
 {
   "IATA_CODE": "VPS",
   "LATITUDE": 30.48325,
   "LONGITUDE": -86.5254
 },
 {
   "IATA_CODE": "WRG",
   "LATITUDE": 56.48433,
   "LONGITUDE": -132.36982
 },
 {
   "IATA_CODE": "WYS",
   "LATITUDE": 44.6884,
   "LONGITUDE": -111.11764
 },
 {
   "IATA_CODE": "XNA",
   "LATITUDE": 36.28187,
   "LONGITUDE": -94.30681
 },
 {
   "IATA_CODE": "YAK",
   "LATITUDE": 59.50336,
   "LONGITUDE": -139.66023
 },
 {
   "IATA_CODE": "YUM",
   "LATITUDE": 32.65658,
   "LONGITUDE": -114.60597
 }];

// Set up a google maps object with disabled user interaction (no zoom, no pan etc.)

function loadMap() {
	var options = {
		draggable: false,
		panControl: false,
		streetViewControl: false,
		scrollwheel: false,
		scaleControl: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		zoom: 4,
		center: new google.maps.LatLng(39.8283,-98.5795),
		 mapTypeId: google.maps.MapTypeId.SATELLITE ,
		styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}]
	};
	mapObject	=	new google.maps.Map(document.getElementById('mapCanvas'), options);
}

// Plane Symbol - uses an SVG path

var planeSymbol	= {
	path: 'M22.1,15.1c0,0-1.4-1.3-3-3l0-1.9c0-0.2-0.2-0.4-0.4-0.4l-0.5,0c-0.2,0-0.4,0.2-0.4,0.4l0,0.7c-0.5-0.5-1.1-1.1-1.6-1.6l0-1.5c0-0.2-0.2-0.4-0.4-0.4l-0.4,0c-0.2,0-0.4,0.2-0.4,0.4l0,0.3c-1-0.9-1.8-1.7-2-1.9c-0.3-0.2-0.5-0.3-0.6-0.4l-0.3-3.8c0-0.2-0.3-0.9-1.1-0.9c-0.8,0-1.1,0.8-1.1,0.9L9.7,6.1C9.5,6.2,9.4,6.3,9.2,6.4c-0.3,0.2-1,0.9-2,1.9l0-0.3c0-0.2-0.2-0.4-0.4-0.4l-0.4,0C6.2,7.5,6,7.7,6,7.9l0,1.5c-0.5,0.5-1.1,1-1.6,1.6l0-0.7c0-0.2-0.2-0.4-0.4-0.4l-0.5,0c-0.2,0-0.4,0.2-0.4,0.4l0,1.9c-1.7,1.6-3,3-3,3c0,0.1,0,1.2,0,1.2s0.2,0.4,0.5,0.4s4.6-4.4,7.8-4.7c0.7,0,1.1-0.1,1.4,0l0.3,5.8l-2.5,2.2c0,0-0.2,1.1,0,1.1c0.2,0.1,0.6,0,0.7-0.2c0.1-0.2,0.6-0.2,1.4-0.4c0.2,0,0.4-0.1,0.5-0.2c0.1,0.2,0.2,0.4,0.7,0.4c0.5,0,0.6-0.2,0.7-0.4c0.1,0.1,0.3,0.1,0.5,0.2c0.8,0.2,1.3,0.2,1.4,0.4c0.1,0.2,0.6,0.3,0.7,0.2c0.2-0.1,0-1.1,0-1.1l-2.5-2.2l0.3-5.7c0.3-0.3,0.7-0.1,1.6-0.1c3.3,0.3,7.6,4.7,7.8,4.7c0.3,0,0.5-0.4,0.5-0.4S22,15.3,22.1,15.1z',
	fillColor: '#ffffff',
	fillOpacity: 3,
	scale: 2,
	anchor: new google.maps.Point(11, 11),
	strokeWeight: 0
};

//function animate(startPoint, endPoint) {
function animate(startLat, startLon, endLat, endLon) {
	// startPoint	=	places[startPoint],
	// endPoint	=	places[endPoint];
	// console.log(startPoint);
	// console.log(endPoint);
	// Convert the points arrays into Lat / Lng objects
	// var sP			=	new google.maps.LatLng(startPoint[0],startPoint[1]);
	// var eP			=	new google.maps.LatLng(endPoint[0],endPoint[1]);
	var sP			=	new google.maps.LatLng(startLat,startLon);
	var eP			=	new google.maps.LatLng(endLat, endLon);

	// Create a polyline for the planes path

	planePath = new google.maps.Polyline({
		path: [sP, eP],
		strokeColor: '#0f0',
		strokeWeight: 0,
		icons: [{
			icon: planeSymbol,
			offset: '10%'
		}],
		map: mapObject,
		geodesic: true
	});

	trailPath = new google.maps.Polyline({
		path: [sP, sP],
		strokeColor: '#FF0000',
		strokeWeight: 5,
		map: mapObject,
		geodesic: true
	});

	// Start the animation loop
	animLoop = window.requestAnimationFrame(function(){
		tick(sP, eP);
	});
}

/*
	Runs each animation "tick"
*/

function tick(startPoint, endPoint) {
	animIndex+=0.5;

	// Draw trail
	var nextPoint	=	google.maps.geometry.spherical.interpolate(startPoint,endPoint,animIndex/100);
	trailPath.setPath([startPoint, nextPoint]);

	// Move the plane
	planePath.icons[0].offset=Math.min(animIndex,100)+'%';		
	planePath.setPath(planePath.getPath());

	// Ensure the plane is in the center of the screen
	mapObject.panTo(nextPoint);

	// We've reached the end, clear animLoop
	if(animIndex>=100) {
		window.cancelAnimationFrame(animLoop);
		animIndex = 0;
	}else{
		animLoop = window.requestAnimationFrame(function(){
			tick(startPoint, endPoint);
		});
	}
}

// Get values from select boxes, run the animation.

function go() {
	window.cancelAnimationFrame(animLoop);
	animIndex = 0;
	var origin = document.getElementById('from').value;
	var destination = document.getElementById('to').value;
	console.log(origin);
	console.log(destination);
	var startLat;
	var startLon;
	var endLat;
	var endLon;
	var i;
	for (i = 0; i < places.length; i++) {
	    if(places[i].IATA_CODE===origin){
	    	startLat = places[i].LATITUDE;
	    	startLon = places[i].LONGITUDE;
	    }
	    if(places[i].IATA_CODE===destination){
	    	endLat = places[i].LATITUDE;
	    	endLon = places[i].LONGITUDE;	
	    }
	}
	console.log(startLat);
	console.log(startLon);
	console.log(endLat);
	console.log(endLon); 
	animate( startLat, startLon, endLat, endLon);
			// document.getElementById('s_from').options[document.getElementById('s_from').selectedIndex].value,
			// document.getElementById('s_to').options[document.getElementById('s_to').selectedIndex].value
		//);
}