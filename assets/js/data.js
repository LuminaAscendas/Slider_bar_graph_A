var direction_text='<span id="dir_span">Directions:</span> Drag the slider to reveal the global mean temperature changes of the ocean’s surface over time.'
var trueValues = [Math.round(0*scale), Math.round(1*scale), Math.round(2*scale), Math.round(3*scale), Math.round(4*scale), Math.round(5*scale)];
var value =     [0, 20, 40, 62, 83, 93];
var values =     [Math.round(0/scale), Math.round(20/scale), Math.round(40/scale), Math.round(62/scale), Math.round(83/scale), Math.round(93/scale)];


var data = [{
    "titleA": "Figure 1.4c Slider Compare",
    "description": [
				'Between 1920 and 1940 the mean annual temperature changes of the ocean’s surface varied but primarily showed slight decreases.',
				'Between 1940 and 1960 the mean annual temperature changes of the ocean’s surface varied but primarily showed increases, and the increases were much greater than the decreases.',
				'Between 1960 and 1980 the mean annual temperature changes of the ocean’s surface again showed more increases than decreases.',
				'Between 1980 and 2000 the ocean’s surface experienced only temperature increases, some of them much larger than in decades past, as measured by mean annual temperature changes.',
				'Between 2000 and 2014 the ocean’s surface again experienced only temperature increases, with those increases climbing over time, as measured by mean annual temperature changes.'
        ],
	"year":['1920','1940','1960','1980','2000','2014']
    }];