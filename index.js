const drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`];
function returnFirstTwoDrivers(){
    const newArray = [];
    for (let i = 0; i < 2; i++){
        newArray.push(drivers[i]);
    }
    return newArray;
}

function returnLastTwoDrivers(){
    const newArray = [];
    for (let e = drivers.length - 2; e < drivers.length; e++){
        newArray.push(drivers[e]);
    }
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(times){
    const fare =2;
    return function(){
        return Math.pow(times,fare)
    }
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
}
