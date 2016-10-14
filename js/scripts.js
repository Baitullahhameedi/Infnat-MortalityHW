//I will creat an emoty dataArray for our coverted json data.

// And I will creat a header for data array.

var dataArray = [];
//I will push the header to data array

var headers = ['Year', 'Total', 'Boys', 'Girls'];

// Now loop through the json, converting each object into an appropriate array.

dataArray.push(headers);
json.forEach(function(d){
  dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea: {
      top: 20,
      bottom: 50,
      left: 50,
      right: 100
    },
    colors: ['#636363','#dd1c77','#3182bd'],
    curveType: 'function',
    focusTarget: "category",
    hAxis : {
      title: "Year"
    },
    vAxis : {
      title: "Infant mortality rate"
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
