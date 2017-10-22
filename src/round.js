const DIRECTIONS = {
  HALF_UP: -1,
  HALF_DOWN: 0,
  UP: 1,
  DOWN: 2
};

function round({number=0, direction=DIRECTIONS.HALF_UP, precision=2}) {
  const sign = Math.sign(number);
  const power = 10**precision;
  switch (direction){
    default:
    case DIRECTIONS.HALF_UP: {
      return sign * Math.round(Math.abs(number) * power) / power;
    }
    case DIRECTIONS.UP: {
      return sign * Math.ceil(Math.abs(number) * power) / power;
    }
    case DIRECTIONS.HALF_DOWN: {
      return sign * Math.floor(Math.abs(number) * power) / power;
    }
  }
}


export { round, DIRECTIONS };
