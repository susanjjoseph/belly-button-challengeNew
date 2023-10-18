
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(url) 
.then(function(data){
    console.log(data);
})
.catch(error => console.error("Error loading data:", error));




fetch(url)
.then(response => response.json())
.then(data => {

    const names_array = data.names;
    var dropdown = document.getElementById('namesdropdown');

    names_array.forEach(data => {
        var option = document.createElement('option');
        option.value = data;
        dropdown.appendChild(option);
});
})
  


function optionChanged(selectElement){
    var selectedValue = selectElement.value;
    console.log("Selected value:", selectedValue);
}
