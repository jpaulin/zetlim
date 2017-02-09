
var gdist = require('geo-distance');
var finmun = require('geo-muni-finland');

// Sampling count - how many pairs of cities are drawn
var sN = 10;

var costLbe = 1.45;
var costLdi = 1.32;
var avgCarSpeed_ms = 75/3.6;

// Basic commuting costs configuration
var comCost = {
	calcUnit:     'eur',
	engineType:   'di',
	aggCostPerKm: (8*costLdi)/100,
        aggTimeMinPerKm: 0
};

// The finmun tells us coordinates in WGS84 system for the 107
// municipalities at the beginning of 2017.



console.log('Distance between two municipalities in Finland:')

// We'll do a random sampling of pairs of cities


