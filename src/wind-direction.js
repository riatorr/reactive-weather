const directions = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];

function getDirection(heading) {
   let index = Math.floor((heading / 22.5) + 0.5);
   return directions[index % 16];
}

export default getDirection;