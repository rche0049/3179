var vg_1 = "total_grandmaster_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1,{"actions":false}).then(function (result) {
    // Access the Vega view instance
   // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "rating_age_heat_map.vg.json";
vegaEmbed("#heat_map", vg_2,{"actions":false}).then(function (result) {
    // Access the Vega view instance
   // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_3 = "titles_stacked_bar_chart.vg.json";
vegaEmbed("#stacked_bar_chart", vg_3,{"actions":false}).then(function (result) {
    // Access the Vega view instance
   // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// JavaScript code for Vega-Lite
const countryDropdown = document.getElementById("country-dropdown");
countryDropdown.addEventListener("change", function () {
  const selectedCountry = countryDropdown.value;
  loadGenderData(selectedCountry);
});

function loadGenderData(selectedCountry) {
  // Fetch and process data for the selected country
  // Create a Vega-Lite specification for the pie chart
  // Embed the pie chart in the "gender-pie-chart" container
  // Update the chart with the selected country's data
}


