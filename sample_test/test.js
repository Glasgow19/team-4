<html>

<script>
document.write(2);   
var GlasgowTower = {tag:"Glasgow Tower",adjacnet:{ToiletL1},x:631, y:206};
var ToiletL1 = {tag:"Toilet0a",x:677, y:188}; 

document.write(3);
function getDistance(objA,objB){
    return Math.sqrt(Math.pow(objA.x - objB.x,2) + Math.pow(objA.y - objB.y));
}
document.write(GlasgowTower.tag);

var json = '[{"name":"Glasgow Tower"},{"name":"The Egg"},{"name":"Workshop area\"},{\"name\":\"Live Lab\"},{\"name\":\"Ticket Desk\"}]";

</script>
</html>