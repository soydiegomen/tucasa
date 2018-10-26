import {
  RECEIVE_HOUSE
 } from 'actions';

const house = (state = {
    services: [],
    address: {
        address: '',
        state: '',
        town: '',
        longitude: 0,
        latitude: 0
    },
    contact: {
        name: '',
        phone: '',
        mail: '',
        facebook: ''
    },
    creationDate: new Date(),
    lastModification: new Date(),
    files: [],
    _id: '',
    userId: '',
    title: '',
    price: 0,
    priceType: '',
    propertyType: '',
    operationType: '',
    status: '',
    noBedrooms: 0,
    noBathrooms: 0,
    noParking: 0,
    __v: 0
}, action) => {
  switch (action.type) {
    case RECEIVE_HOUSE:
      return action.house;
    default:
      return state
  }
}
export default house;
