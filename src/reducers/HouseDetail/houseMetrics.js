import {
  RECEIVE_HOUSE_METRICS
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
    default:
      return state
  }
}
export default houseMetrics;
