import fetch from 'cross-fetch';
import apiConfig from '../../config';

export const getPublishedHousesV2 = (filters) => {
  let propertyFilter = filters.selectedProperty ? encodeURIComponent(filters.selectedProperty) : '';
  let operationFilter = filters.selectedOperation ? encodeURIComponent(filters.selectedOperation) : '';
  let keywordFiler = filters.selectedKeyword ? encodeURIComponent(filters.selectedKeyword) : '';
  let minPrice = filters.selectedPriceRange.min;
  let maxPrice = filters.selectedPriceRange.max;
  let dateOfLastHouse = new Date(2017,4,1);
  dateOfLastHouse = encodeURIComponent(dateOfLastHouse.toISOString());

  return fetch(`http://localhost:3000/api/published-houses?min=${minPrice}&max=${maxPrice}&operation=${operationFilter}&property=${propertyFilter}&search=${keywordFiler}&itemLastDate=${dateOfLastHouse}&pagDirection=r`)
    .then(response => response.json());
};
