import { getHouseMetrics } from 'services/api/Metrics';

export const RECEIVE_HOUSE_METRICS = 'RECEIVE_HOUSE_METRICS';

/*Get House*/
function receiveHouseMetrics(json) {
  return {
    type: RECEIVE_HOUSE_METRICS,
    //TODO: validar que pasa si el servicio no recibe al menos un elemento
    metrics: json[0]
  }
}

export const fetchHouseMetrics = function (id) {
  return dispatch => {
    return getHouseMetrics(id).then(json => {
        dispatch(receiveHouseMetrics(json));
      });
  }
}
