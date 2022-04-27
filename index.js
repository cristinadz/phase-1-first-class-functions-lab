const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return (fare) => integer * fare;
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(arrayOfDrivers);
};
