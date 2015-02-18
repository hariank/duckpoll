function drawPie(data) {
	var formatted = [];
	var WIDTH = 400, HEIGHT = 400;

	// var colors = d3.scale.category20c().domain(d3.range(0, data.length));
	var colors = d3.scale.category10();

	data.forEach(function (el, index) {
		var next = {};
		next['label'] = el.content;
		next['value'] = el.votes;
		next['color'] = colors(el.index);
		formatted.push(next);
	});

	// console.log(formatted);

	var pie = new d3pie("pie", {
		"size": {
			"canvasHeight": WIDTH,
			"canvasWidth": HEIGHT
		},
		"data": {
			"content": formatted
		},
		"labels": {
			"outer": {
				"hideWhenLessThanPercentage": 2,
				"pieDistance": 32
			},
			"inner": {
				"hideWhenLessThanPercentage": 2,
				"format": "percentage"
			},
			"mainLabel": {
				"font": "verdana"
			},
			"percentage": {
				"color": "#e1e1e1",
				"font": "verdana",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#e1e1e1",
				"font": "verdana"
			},
			"lines": {
				"enabled": true,
				"color": "#cccccc"
			}
		},
		"tooltips": {
			"enabled": true,
			"type": "placeholder",
			"string": "{label}: {value}, {percentage}%",
			"styles": {
				"fontSize": 15
			}
		},
		"effects": {
			"load": {
				"effect": "none"
			},
			"pullOutSegmentOnClick": {
				"effect": "none"
			}
		},
		"callbacks": {}
	});
}