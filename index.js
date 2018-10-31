function produceDrivingRange(blockRange) {
  return function(start, end) {
    let blockStart = parseInt(start);
    let blockEnd = parseInt(end);
    let distanceToTravel = Math.abs(blockStart - blockEnd);
    let rangeDifference = blockRange - distanceToTravel

    if(rangeDifference > 0) {
      return `within range by ${rangeDifference}`
    } else {
      return `${Math.abs(rangeDifference)} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentageTip) {
  return function(fare) {
    return fare * percentageTip
  };
}

function createDriver() {
  let driverId = 0;
  return class Driver {
      constructor(name) {
      this.id = driverId++;
      this.name = name;
    }
  }
}
