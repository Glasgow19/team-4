// declare object for each node in the ground floor
var glasgowTower = {tag:"Glasgow Tower"};
var theShop = {};
var toiletF0L = {tag:"Toilet0a"}; 
var towerbase = {tag:"Glasgow Tower Base"};
var tasteCafe = {tag:"Taste Cafe"};
var towerEntrance = {tag:"Tower Entrance"};
var cineWorld = {tag:"Cineworld IMAX"};
var theEgg = {tag:"The Egg"};
var clydeSlite = {tag:"Clyde Suite"};
var auditorium = {tag:"Auditorium"};
var cloakRoom = {tag:"Clockroom"};
var ticketDesk = {tag:"Ticket Desk"};
var artium = {tag:"The Atrium"};

// declaration of the list of place at the groud floor
var groudFloor = {artium,theShop,cineWorld,ticketDesk,cloakRoom,auditorium,clydeSlite,theEgg,towerEntrance,towerbase,glasgowTower,tasteCafe};

// delearation of the variable at the first floor
var workshop = {tag:"Workshop area"};
var theatre = {tag:"Science Show Theater"};
var planetarium = {tag:"The Planetarium"};

// decleartion of the list of places at 1st floor
var firstFloor = {workshop,theatre,planetarium};

// decleartion of the variables at the second floor
var wowLiveStudio = {tag:"My WOW LIVE! Studio"};
var lab = {tag:"The Lab"};
var areaX = {tag:"Area X"};

// declaration of the list of place at the second floor
var secondFloor = {lab,areaX,wowLiveStudio};

// decleration of the variables at the third floor
var liveLab = {tag:"Live Lab"};

// declaration of the list of places at the third floor
var thirdFloor = {liveLab};

// retrieve the Json object and then provide recommend list
function recommand(text){
    // get the test string in json form
    // then transfer into js object
    recommendArray = JSON.parse(text);

    //initialise array for the sorted recommend list
    sortedArray  = {};
    for(x in groudFloor){
        if ( x.tag === recommendArray.name) {
            sortedArray.push(x);
        }
    }
    for(y in firstFloor){
        if ( y.tag === recommendArray.name) {
            sortedArray.push(y);
        }
    }
    for(z in secondFloor){
        if (z.tag === recommendArray.name) {
            sortedArray.push(z);
        }
    }

    // then transfer the sorted json object into json string
    return JSON.stringify(sortedArray);
}