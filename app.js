var name = 'Philip';/*string*/
console.log(name);

var myLocation = 'San Francisco Bay Area';
console.log(myLocation);

var favouriteNumber = 38; /*number*/
console.log(favouriteNumber);

var teams = ['Rockets', 'Lakers', 'Warriors', 'Clippers', 'Blazers' ]
/*arrays*/
console.log(teams);

//while loops

var number = 10;
var otherNumber = 1;
while ( otherNumber < number ) {
    console.log(otherNumber);
    otherNumber += 1; //otherNumber = otherNumber + 1 and stop at 10
}

var numberTwo = 20;
var myotherNumber = 10;

while (myotherNumber < numberTwo){
    console.log(myotherNumber); // print 10, 11, 12
    myotherNumber += 1; // print 11, 12, 13
}

var numberThree = 30;
var myotherNumberThree = 20;

while (myotherNumberThree < numberThree){
    console.log(myotherNumberThree);
    myotherNumberThree += 1;
}

// for loops

for (var i = 0; i< 10; i++) {
    console.log(i); //print 0, 1, 2, 3.. 9
}
 
// print teams
for (var i = 0; i < teams.length; i++) // teams arrays
{
    //console.log(teams[i]); // first way to do it / add element 0 
    var eachTeam = teams[i]; //second way // print Rockets, Lakers ... 
    console.log(eachTeam);
}

var fruits = ['bananas', 'apples', 'oranges', 'grapes', 'strawberries']

for (var i = 0; i < fruits.length; i++) {
    var eachFruits = fruits[i];
    console.log(eachFruits);
}

const cars = ['Tesla', 'Honda', 'Toyota'];
console.log(cars);

for (let i = 0; i < cars.length; i++){
    let eachCar = cars[i];
    console.log(eachCar);
}

//objects use key: value pairs

const philip = {
    fullName: 'Philip Yap', // key = value;
    age: 18, //key: value
    myLocation: 'San Francisco Bay Area', // key = value
    placeTraveled: ['Kentucky', 'Ohio', 'New York']
}
console.log(philip);
console.log(philip.myLocation); // print philip's location
console.log(philip.placeTraveled[2]); //print New York 

const myReallyCoolPost = {
    username: '@generalassembly',
    likes: 1200,
    comments: ['realy cool', ' nice post', 'woah'],
    caption: 'Day 3 of SEI',
    pics: 'https://instagram.com/generalassembly/..',
    shares: 12

} // IG : likes, captions, shares, comments, username, pics
console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = 'San Francisco'
console.log(myReallyCoolPost); //change myLocation

const myReallyCoolPostOne = {
    username: '@feilipyap',
    likes: 10000,
    comments: ['realy cool', ' nice post', 'woah'],
    caption: 'So cute',
    pics: 'https://instagram.com/feilipyap/..',
    shares: 1000
}
console.log(myReallyCoolPostOne);