/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

// var circle = svg.append("circle")
// 	.attr("cx", 100)
// 	.attr("cy", 250)
// 	.attr("r", 70)
// 	.attr("fill", "grey");

var rectangle = svg.append("rect")
	.attr("x", 10)
	.attr("y", 10)
	.attr("width", 200)
	.attr("height", 100)
	.append("fill", "grey");