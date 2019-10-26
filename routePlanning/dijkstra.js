// declare object for each node in the ground floor
var glasgowTower = {tag:"Glasgow Tower",adjacent:{towerbase},x:631, y:206};
var toiletF0L = {tag:"Toilet0a",adjacent:{towerbase},x:677, y:188}; 
var towerbase = {tag:"Glasgow Tower Base",adjacent:{toiletL1,glasgowTower},x:677, y:213};
var tasteCafe = {tag:"Taste Cafe",adjacent:{towerbase,towerEntrance},x:758,y:280};
var towerEntrance = {tag:"Tower Entrance",adjacent:{tasteCafe,theEgg},x:819,y:324};
var theEgg = {tag:"",adjacent:{tasteCafe,elevator0L,towerEntrance}}
var elevator0L = {adjacent:{theEgg,toiletF0R}};
var stairF0F1 = {adjacent:{toiletF0R,clydeSlite}};
var clydeSlite = {adjacent:{cloakRoom,auditorium}};
var auditorium = {adjacent:{cloakRoom,clydeSlite}};
var cloakRoom = {adjacent:{auditorium,clydeSlite,elevatorF0R}};
var ticketDesk = {adjacent:{cloakRoom,artium,elevatorF0R}};
var artium = {adjacent:{ticketDesk}};
var toiletF0R = {adjacent:{elevator0L,stairF0F1,clydeSlite}};
var elevatorF0R = {adjacent:{cloakRoom,ticketDesk}};

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
