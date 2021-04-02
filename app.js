// from data.js
var tableData = data;
console.log(tableData)

// step 1: reference table body
var tbody = d3.select("tbody");

// step 2: sight values for each column, append 1 table row for each sight object
tableData.forEach(function(sighting) {
    var row = tbody.append("tr");

// step 3: use object.entries to give out each sight value, append a cell to row for each value
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//step 4: select button, filter
var button = d3.select("#filter-btn");
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

var newData = tableData.filter(sighting => sighting.datetime === inputValue);

newData.forEach(function(selections) {
    var row = tbody.append("tr");

    Object.entries(selections).forEach(function([key, value]) {
        console.log (key, value)
        var cell = row.append ("td");
        cell.text(value);
    })
    })
})