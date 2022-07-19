// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)

const returnLastTwoDrivers = drivers => drivers.slice(2, 4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return fare => fare * integer
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2

const fareTripler =  createFareMultiplier => createFareMultiplier * 3

const selectDifferentDrivers = (drivers, funct) => funct(drivers)