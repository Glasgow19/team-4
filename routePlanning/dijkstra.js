// declare object for each node
var GlasgowTower = {tag:"Glasgow Tower",adjacent:{ToiletL1,Towerbase},x = 631, y = 206};
var ToiletL1 = {tag:"Toilet0a",adjacent:{GlasgowTower,Towerbase},x = 677, y = 188}; 
var Towerbase = {tag:"Glasgow Tower Base",adjacent:{ToiletL1,GlasgowTower},x = 677, y = 213};
var TasteCafe = {tag:"Taste Cafe",adjacent:{Towerbase,Restaurant}};
var Restaurant = {tag:"Restaurant",adjacent:{TasteCafe}};





// funtion to calculate the distance from coordinate
// by putting into two objects
function getDistance(objA,objB){
    return Math.sqrt(Math.pow(objA.x - objB.x,2) + Math.pow(objA.y - objB.y));
}
