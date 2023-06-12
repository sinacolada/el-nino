# El Niño

Visualization of the relationship between the El Niño Southern Oscillation (ENSO) and Mississippi River Basin (MRB) weather conditions.

The visualization contains four views, one in each quadrant with a slider bar in between. The top left features the line graph, the bottom left is the ONI chart, the top right is the MRB map, while the bottom left is the SST. In the ONI chart, red represents El Niño (warm waters while blue represents La Niña (cooler waters). In general, low-saturated colors were chosen to
be easier on the eyes. The main method to interact with this visualization, other than details on demand for points in all four views, is through the time-series slider bar. Each
discrete tick on the slider bar represents a month between 2018 and 2019. Moving and releasing the slider bar updates the monthly averages for points on the map views. Above the line chart, radio buttons make it easy for users to switch between soil moisture, precipitation, and discharge data, which updates both the line chart and the Mississippi River Basin map views to display data for the selected measure.

## Setup

1. Clone this repository to your local machine.

2. `CD` into the cloned folder.

3. Start a simple python webserver. E.g., `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. If you are using python 2 you will need to use `python -m SimpleHTTPServer` instead.

4. Wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.

5. Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000