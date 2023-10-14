var vg_1 = "total_grandmaster_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function (result) {
    // Access the Vega view instance
   // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "rating_age_heat_map.vg.json";
vegaEmbed("#heat_map", vg_2).then(function (result) {
    // Access the Vega view instance
   // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


