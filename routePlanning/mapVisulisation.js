/*
    This is a JSON data of all coordinates regarding to the map https://www.glasgowsciencecentre.org/sites/default/files/2018-02/1850_640_map.png;
    Due to time reason this JSON data is put here as a constant, in reality a database can be used to store more accurate data;
*/ 
const MAPNODES = [
    {
        "name": "Glasgow Tower",
        "floor": 0,
        "coor": { "x": 631, "y": 206 }
    },
    {
        "name": "Glasgow Tower Base",
        "floor": 0,
        "coor": { "x": 677, "y": 213 }
    },
    {
        "name": "Toilet0a",
        "floor": 0,
        "coor": { "x": 677, "y": 188 }
    },
    {
        "name": "Taste Cafe",
        "floor": 0,
        "coor": { "x": 785, "y": 280 }
    },
    {
        "name": "Tower Entrance",
        "floor": 0,
        "coor": { "x": 819, "y": 324 }
    },
    {
        "name": "The Egg",
        "floor": 0,
        "coor": { "x": 866, "y": 321 }
    },
    {
        "name": "Lift0a",
        "floor": 0,
        "coor": { "x": 904, "y": 339 },
        "link": ["Lift1a", "Lift2a", "Lift3a"]
    },
    {
        "name": "Toilet0b",
        "floor": 0,
        "coor": { "x": 933, "y": 338 }
    },
    {
        "name": "Stair0a",
        "floor": 0,
        "coor": { "x": 940, "y": 354 },
        "link": ["Stair1a"]
    },
    {
        "name": "Clyde Suite",
        "floor": 0,
        "coor": { "x": 984, "y": 340 }
    },
    {
        "name": "Coffee Pod",
        "floor": 0,
        "coor": { "x": 981, "y": 368 }
    },
    {
        "name": "Auditorium",
        "floor": 0,
        "coor": { "x": 1024, "y": 368 }
    },
    {
        "name": "Clockroom",
        "floor": 0,
        "coor": { "x": 1042, "y": 351 }
    },
    {
        "name": "Lift0b",
        "floor": 0,
        "coor": { "x": 1077, "y": 386 },
        "link": ["Lift1b", "Lift2b", "Lift3b"]
    },
    {
        "name": "Ticket Desk",
        "floor": 0,
        "coor": { "x": 1106, "y": 372 }
    },
    {
        "name": "The Atrium",
        "floor": 0,
        "coor": { "x": 1154, "y": 400 }
    },
    {
        "name": "The Shop",
        "floor": 0,
        "coor": { "x": 1160, "y": 453 }
    },
    {
        "name": "Starbucks",
        "floor": 0,
        "coor": { "x": 1098, "y": 515 }
    },
    {
        "name": "Cineworld IMAX",
        "floor": 0,
        "coor": { "x": 1098, "y": 538 }
    },
    {
        "name": "Toilet0c",
        "floor": 0,
        "coor": { "x": 1138, "y": 535 }
    },
    {
        "name": "Entrance",
        "floor": 0,
        "coor": { "x": 1282, "y": 434 }
    },

    {
        "name": "Stair1b",
        "floor": 1,
        "coor": { "x": 781, "y": 170 },
        "link": ["Stair2b"]
    },
    {
        "name": "Workshop area",
        "floor": 1,
        "coor": { "x": 844, "y": 220 }
    },
    {
        "name": "Lift1a",
        "floor": 1,
        "coor": { "x": 906, "y": 236 },
        "link": ["Lift0a", "Lift2a", "Lift3a"]
    },
    {
        "name": "Stair1a",
        "floor": 1,
        "coor": { "x": 963, "y": 231 },
        "link": ["Stair0a"]
    },
    {
        "name": "Science Show Theater",
        "floor": 1,
        "coor": { "x": 1025, "y": 265 }
    },
    {
        "name": "Lift1b",
        "floor": 1,
        "coor": { "x": 1102, "y": 270 },
        "link": ["Lift0b", "Lift2b", "Lift3b"]
    },
    {
        "name": "The Planetarium",
        "floor": 1,
        "coor": { "x": 1141, "y": 292 }
    },

    {
        "name": "Stair2b",
        "floor": 2,
        "coor": { "x": 825, "y": 101 },
        "link": ["Stair1b"]
    },
    {
        "name": "Stair2c",
        "floor": 2,
        "coor": { "x": 840, "y": 110 },
        "link": ["Stair3c"]
    },
    {
        "name": "My WOW LIVE! Studio",
        "floor": 2,
        "coor": { "x": 859, "y": 137 }
    },
    {
        "name": "Lift2a",
        "floor": 2,
        "coor": { "x": 909, "y": 155 },
        "link": ["Lift0a", "Lift1a", "Lift3a"]
    },
    {
        "name": "Toilet2",
        "floor": 2,
        "coor": { "x": 936, "y": 153 }
    },
    {
        "name": "The Lab",
        "floor": 2,
        "coor": { "x": 1051, "y": 175 }
    },
    {
        "name": "Area X",
        "floor": 2,
        "coor": { "x": 1032, "y": 198 }
    },
    {
        "name": "Lift2b",
        "floor": 2,
        "coor": { "x": 1108, "y": 187 },
        "link": ["Lift0b", "Lift1b", "Lift3b"]
    },
    {
        "name": "Stair3c",
        "floor": 3,
        "coor": { "x": 902, "y": 42 },
        "link": ["Stair2c"]
    },
    {
        "name": "Lift3a",
        "floor": 3,
        "coor": { "x": 912, "y": 68 },
        "link": ["Lift0a", "Lift1a", "Lift2a"]
    },
    {
        "name": "Live Lab",
        "floor": 3,
        "coor": { "x": 1018, "y": 96 }
    },
    {
        "name": "Toilet3",
        "floor": 3,
        "coor": { "x": 1115, "y": 99 }
    }
];

// Map image width & height
var imgWidth;
var imgHeight;

var stage;
var layers;

function visualInit() {
    imgWidth = $('#mapimg').width();
    imgHeight = $('#mapimg').height();

    stage = new Konva.Stage({
        container: 'mapimg',
        width: imgWidth,
        height: imgHeight
    });
}

function visualiseNode({name, floor, coor, link}) {
    // console.log(link);
}