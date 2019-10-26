// declare object for each node in the ground floor
var glasgowTower = {tag:"Glasgow Tower",adjacent:{Towerbase},x:631, y:206};
var toiletF0L = {tag:"Toilet0a",adjacent:{Towerbase},x:677, y:188}; 
var towerbase = {tag:"Glasgow Tower Base",adjacent:{ToiletL1,GlasgowTower},x:677, y:213};
var TasteCafe = {tag:"Taste Cafe",adjacent:{Towerbase,TowerEntrance},x:758,y:280};
var towerEntrance = {tag:"Tower Entrance",adjacent:{TasteCafe},x:819,y:324};
var theEgg = {tag:"",adjacent:{}}
var elevator0L = {};
var stairF0F1 = {};
var clydeSlite = {};
var auditorium = {};
var cloakRoom = {};
var ticketDesk = {};
var artium = {};
var toiletF0R = {};
var elevatorF0R = {};

// delearation of the variable at the first floor
var stairF1F2 = {};
var elevatorF1L = {};
var stairF1F0 = {};
var theatre = {};
var elevatorF1R = {};
var planetarium = {};

// decleartion of the variables at the second floor
var wowLiveStudio = {};
var elevatorF2L = {};
var toiletF2 = {};
var lab = {};
var areaX = {};
var elevatorF2R = {};
var stairF2F1 = {};
var stairF2F3 = {};

// decleration of the variables at the third floor
var stairF3F2 = {};
var elevatorF3L = {};
var elevatorF3R = {};
var liveLab = {};
var toiletF3 = {};




// funtion to calculate the distance from coordinate
// by putting into two objects
function getDistance(objA,objB){
    return Math.sqrt(Math.pow(objA.x - objB.x,2) + Math.pow(objA.y - objB.y));
}
