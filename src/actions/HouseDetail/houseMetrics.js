import { getHouseMetrics, addMetric } from 'services/api/Metrics';

export const RECEIVE_HOUSE_METRICS = 'RECEIVE_HOUSE_METRICS';
export const ADD_HOUSE_METRIC = 'ADD_HOUSE_METRIC';
export const SET_LIKE = 'SET_LIKE';

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

/*Add house metric*/
export const addHouseMetrics = function (id, type) {
  return dispatch => {
    return addMetric(id, type).then(json => {
        dispatch(receiveUpdatedMetrics(json));
      });
  }
}

function receiveUpdatedMetrics(json) {
  return {
    type: ADD_HOUSE_METRIC,
    //TODO: validar que pasa si el servicio no recibe al menos un elemento
    metrics: json
  }
}

export const setLike = function (like) {
  return {
    type: SET_LIKE,
    like
  };
}
