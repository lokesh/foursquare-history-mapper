/**
 * Lattitude
 * - Lines run horizontally
 * - Positive values up top and negative values on bottom
 * 
 * Longitude
 * - Lines run vertically
 * - Negative values to left and positive vals to right
**/
 
/**
 * @param  {[Object]} places 
 * @param  {[Object]} box [{ lat: -10, lng: 45 }, { lat: -5, lng: 40 }],
 * @return {[Object]} filtered places
 */
export function filterPlacesByBoundingBox(places, box) {
  
  return places.filter(item => {
    return (
      places.lat <= topLeft.lat
      && places.lat >= bottomRight.lat
      && places.lng >= topLeft.lng
      && places.lng <= bottomRight.lng
      ); 
  });
}

/**
 * @param  {[Object]} places 
 * @return {[Object]} box [{ lat: -10, lng: 45 }, { lat: -5, lng: 40 }],
 */
export function getBoundingBox(places) {
  let box;
  places.forEach((place, i) => {
    if (i === 0) {
      box = [
        {
          lat: place.lat,
          lng: place.lng,
        },
        {
          lat: place.lat,
          lng: place.lng,
        },        
      ]
    } else {
      // Lat
      if (place.lat > box[0].lat) {
        box[0].lat = place.lat;
      }

      if (place.lat < box[1].lat) {
        box[1].lat = place.lat;
      }

      // Lng
      if (place.lng < box[0].lng) {
        box[0].lng = place.lng;
      }

      if (place.lng > box[1].lng) {
        box[1].lng = place.lng;
      }
    }
  })
  return box;
}
