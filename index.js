const hqLocation = 42
function distanceFromHqInBlocks(pickUpLocation){
    if (hqLocation > `${pickUpLocation}`){
        return (hqLocation - `${pickUpLocation}`)
    }   else {
        return (`${pickUpLocation}` - hqLocation)
    }
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


function distanceFromHqInFeet(pickUpLocation){
    distanceFromHqInBlocks(pickUpLocation);
    return (distanceFromHqInBlocks(pickUpLocation) * 264);
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination){
    if(`${start}` > `${destination}`){
        return ((`${start}` - `${destination}`) * 264)
    } else {
        return ((`${destination}` - `${start}`) * 264)
    }
}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    } else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));