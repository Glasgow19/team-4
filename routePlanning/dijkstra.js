// declare object for each node
var GlasgowTower = {tag:"Glasgow Tower",adjacent:{ToiletL1,Towerbase}};
var ToiletL1 = {tag:"",adjacent:{GlasgowTower,Towerbase}}; 
var Towerbase = {tag:"Tower Base",adjacent:{ToiletL1,GlasgowTower}};
var TasteCafe





// funtion to calculate the distance from coordinate
// by putting into two objects
function getDistance(objA,objB){
    return Math.sqrt(Math.pow(objA.x - objB.x,2) + Math.pow(objA.y - objB.y));
}


function getlist(list){

}