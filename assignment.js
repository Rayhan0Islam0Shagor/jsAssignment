// feetToMile
function feetToMile(feet) {
    if (feet <= 0) {
        console.log("Warning! Don't do this. Distance cannot be negative or zero.");
    }
    else {
        var mile = feet / 5280;
        return mile;
    }
}
// var result = feetToMile(5000)
// console.log(result)


// mileToFeet(For Bonus Marks)
function mileToFeet(mile) {
    if (mile <= 0) {
        console.log("Warning! Don't do this. Distance cannot be negative or zero.")
    }
    else {
        var feet = mile * 5280;
        return feet
    }
}
// var result2 = mileToFeet(2);
// console.log(result2)


// woodCalculator
function woodCalculator(chair, table, bed) {
    var forChair = chair * 1;
    var forTable = table * 3;
    var forBed = bed * 5;
    var totalWood = forChair + forTable + forBed;
    return totalWood;
}
// var woodAmount = woodCalculator(10, 30, 20);
// console.log(woodAmount)


// brickCalculator
function brickCalculator(floorNumber) {
    if (floorNumber <= 10) {
        var brickAmount = floorNumber * 15000;
        return brickAmount;
    }
    else if (floorNumber >= 11 && floorNumber <= 20) {
        floorNumber = floorNumber - 10;
        var brickAmount = (floorNumber * 12000) + 150000;
        return brickAmount;
    }
    else if (floorNumber >= 21) {
        floorNumber = floorNumber - 20;
        var brickAmount = (floorNumber * 10000) + 270000;
        return brickAmount;
    }
    else {
        return "something is wrong!"
    }
}
// var result = brickCalculator(15)
// console.log(result)


// tinyFriend
function tinyFriend(names) {
    var tinyName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    return tinyName;
}
var shortName = tinyFriend(['tanjil', 'fahmi', 'Rayhan', 'riad', 'pritom']);
console.log(shortName)