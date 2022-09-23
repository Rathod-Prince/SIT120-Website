google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Field", "Percent", { role: "style" } ],
    ["Views", 50, "#e5e4e2"],
    ["Clicks", 45, "#e5e4e2"],
    ["Reactions", 19, "#e5e4e2"],
    ["Downloads", 30, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "This is the analysis of your publications",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}