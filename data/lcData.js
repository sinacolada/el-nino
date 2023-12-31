// intialize datasets for line charts
var precipLCData = [
    {date: new Date(2018, 0, 1), var: 45.74703662},
    {date: new Date(2018, 1, 1), var: 51.86463004},
    {date: new Date(2018, 2, 1), var: 45.1302997},
    {date: new Date(2018, 3, 1), var: 54.35063827},
    {date: new Date(2018, 4, 1), var: 97.54473318},
    {date: new Date(2018, 5, 1), var: 139.0597713},
    {date: new Date(2018, 6, 1), var: 97.20889163},
    {date: new Date(2018, 7, 1), var: 92.75448281},
    {date: new Date(2018, 8, 1), var: 73.8255142},
    {date: new Date(2018, 9, 1), var: 56.79256801},
    {date: new Date(2018, 10, 1), var: 56.95650747},
    {date: new Date(2018, 11, 1), var: 78.70178849},
    {date: new Date(2019, 0, 1), var: 63.81006577},
    {date: new Date(2019, 1, 1), var: 65.79292526},
    {date: new Date(2019, 2, 1), var: 50.44316667},
    {date: new Date(2019, 3, 1), var: 83.75091629},
    {date: new Date(2019, 4, 1), var: 137.1261226},
    {date: new Date(2019, 5, 1), var: 135.4092586},
    {date: new Date(2019, 6, 1), var: 106.8106652},
    {date: new Date(2019, 7, 1), var: 119.1445785},
    {date: new Date(2019, 8, 1), var: 85.6900157},
    {date: new Date(2019, 9, 1), var: 57.7923281},
    {date: new Date(2019, 10, 1), var: 43.76827055},
    {date: new Date(2019, 11, 1), var: 60.73918386}
 ];

 var soilmLCData = [
    {date: new Date(2018, 0, 1), var: 0.182805671},
    {date: new Date(2018, 1, 1), var: 0.177961298},
    {date: new Date(2018, 2, 1), var: 0.180416957},
    {date: new Date(2018, 3, 1), var: 0.175108656},
    {date: new Date(2018, 4, 1), var: 0.173362801},
    {date: new Date(2018, 5, 1), var: 0.187102395},
    {date: new Date(2018, 6, 1), var: 0.20945276},
    {date: new Date(2018, 7, 1), var: 0.214903449},
    {date: new Date(2018, 8, 1), var: 0.210054672},
    {date: new Date(2018, 9, 1), var: 0.188208293},
    {date: new Date(2018, 10, 1), var: 0.189102755},
    {date: new Date(2018, 11, 1), var: 0.196872674},
    {date: new Date(2019, 0, 1), var: 0.199580089},
    {date: new Date(2019, 1, 1), var: 0.190189803},
    {date: new Date(2019, 2, 1), var: 0.18375339},
    {date: new Date(2019, 3, 1), var: 0.18334588},
    {date: new Date(2019, 4, 1), var: 0.176490891},
    {date: new Date(2019, 5, 1), var: 0.188492363},
    {date: new Date(2019, 6, 1), var: 0.203502795},
    {date: new Date(2019, 7, 1), var: 0.204020102},
    {date: new Date(2019, 8, 1), var: 0.204581851},
    {date: new Date(2019, 9, 1), var: 0.197603152},
    {date: new Date(2019, 10, 1), var: 0.201174629},
    {date: new Date(2019, 11, 1), var: 0.217468986}
 ];

 var dischargeLCData = [
    {date: new Date(2018, 0, 1), var: 477300},
    {date: new Date(2018, 1, 1), var: 791900},
    {date: new Date(2018, 2, 1), var: 1603000},
    {date: new Date(2018, 3, 1), var: 1225000},
    {date: new Date(2018, 4, 1), var: 936800},
    {date: new Date(2018, 5, 1), var: 657600},
    {date: new Date(2018, 6, 1), var: 621500},
    {date: new Date(2018, 7, 1), var: 415800},
    {date: new Date(2018, 8, 1), var: 638000},
    {date: new Date(2018, 9, 1), var: 889700},
    {date: new Date(2018, 10, 1), var: 969400},
    {date: new Date(2018, 11, 1), var: 991200},
    {date: new Date(2019, 0, 1), var: 1263000},
    {date: new Date(2019, 1, 1), var: 1375000},
    {date: new Date(2019, 2, 1), var: 1840000},
    {date: new Date(2019, 3, 1), var: 1488000},
    {date: new Date(2019, 4, 1), var: 1545000},
    {date: new Date(2019, 5, 1), var: 1526000},
    {date: new Date(2019, 6, 1), var: 1383000},
    {date: new Date(2019, 7, 1), var: 749400},
    {date: new Date(2019, 8, 1), var: 520300},
    {date: new Date(2019, 9, 1), var: 701300},
    {date: new Date(2019, 10, 1), var: 822900},
    {date: new Date(2019, 11, 1), var: 911800}
 ];