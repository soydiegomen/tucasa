import fetch from 'cross-fetch';
import apiConfig from '../../config';

export const PAGE_SIZE = 4;

export const getPublishedHousesV2 = (filters) => {
  let propertyFilter = filters.selectedProperty ? encodeURIComponent(filters.selectedProperty) : '';
  let operationFilter = filters.selectedOperation ? encodeURIComponent(filters.selectedOperation) : '';
  let keywordFiler = filters.selectedKeyword ? encodeURIComponent(filters.selectedKeyword) : '';
  let minPrice = filters.selectedPriceRange.min;
  let maxPrice = filters.selectedPriceRange.max;
  //Must format de date to ISO and encode for url
  let itemLastDate = filters.activePage ? encodeURIComponent(filters.activePage.itemLastDate.toISOString())
    :  encodeURIComponent((new Date()).toISOString());
  //let itemLastDate = filters.itemLastDate ? encodeURIComponent(filters.itemLastDate) : (new Date()).toISOString();
  let pagDirection = filters.activePage ? filters.activePage.pagDirection : 'rigth';

  return fetch(`${apiConfig.apiurl}/published-houses?min=${minPrice}&max=${maxPrice}&operation=${operationFilter}&property=${propertyFilter}&search=${keywordFiler}&itemLastDate=${itemLastDate}&pagDirection=${pagDirection}&pageSize=${PAGE_SIZE}`)
    .then(response => response.json());
};
