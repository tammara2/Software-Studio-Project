
# End to End Test Procedures

***

## Protocol 1 (CSV Proccessing/ Graph Reflections)

- Load a sample data set into the dashboard, using a CSV file or other appropriate format.
  
- Observe the initial display of the graph on the frontend of the dashboard, making note of any relevant details such as the range of the axes, the        position of data points, and the overall appearance of the graph.
  
- Modify the underlying data set by adding, removing, or changing one or more data points.
  
- Observe the updated display of the graph on the frontend of the dashboard, comparing it to the initial display to ensure that the changes in the underlying data are properly reflected in the graph.
  
- Repeat steps 4 and 5 several times, using a variety of different data sets and changes, to ensure that the dashboard consistently updates the frontend graph in response to changes in the underlying data.


## Protocol 2 (Data Reflections on the Frontend)

- Prepare a sample data set in CSV format, including a variety of different data types and values to test the dashboard's parsing capabilities.

- Load the sample data set into the dashboard, using the appropriate interface or method (FIle Link).

- Examine the data displayed on the frontend of the dashboard, comparing it to the original data set to ensure that all of the data has been properly read and parsed by the dashboard.

- Repeat steps 3-5 using a variety of different data sets and formats, including CSV files with different values, + other formatting options, to ensure that the dashboard can handle a wide range of input formats within the CSV.

## Protocol 3 (Gaps in Data)

- Prepare a sample data set in CSV format, specifically including gaps or missing data in one or more columns or rows (Applicable when considering a break, an issue with recology, ETC).

- Load the sample data set into the dashboard.

- Observe the initial display of the graph on the frontend of the dashboard, making note of any relevant details such as the range of the axes, the position of data points, and the overall appearance of the graph.

- Examine the data displayed on the frontend of the dashboard, comparing it to the original data set to ensure that the gaps in the data are properly handled by the dashboard. This may include checking that data points are not plotted for missing data, it is important not to assume the void data as 0, and that the axes are adjusted to account for the missing data, and that the overall appearance of the graph is reasonable and appropriate given the missing data (When missing values are present the graph needs to ensure a gap is placed).


  
