import {
  RECEIVE_HOUSE_METRICS,
  ADD_HOUSE_METRIC
} from 'actions/HouseDetail/houseMetrics';

const defaultState =
{
    views: 0,
    likes: 0,
    lastModification: '',
    houseId: 0,
    _id: 0
};
const houseMetrics = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_HOUSE_METRICS:
      return action.metrics;
    //Add metric service return a JSON with all the metrics data (like get metrics service)
    case ADD_HOUSE_METRIC:
        return action.metrics;
    default:
      return state
  }
}
export default houseMetrics;
