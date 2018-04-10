import React, { Component } from 'react';

import HouseItem from './components/HouseItem';
import HousesPagination from './components/HousesPagination';


class ListHouses extends Component {

  /*Helpers*/
  renderSelectedFilter () {
    let activeFilters = [];
    let selectedFilters = this.props.selectedFilters;

    if(selectedFilters.houseProperty){
      activeFilters.push({ label:selectedFilters.houseProperty, type:'houseProperty'});
    }
    if(selectedFilters.houseOperation){
      activeFilters.push({ label:selectedFilters.houseOperation, type:'houseOperation'});
    }
    if(selectedFilters.houseKeyword){
      activeFilters.push({ label:selectedFilters.houseKeyword, type:'houseKeyword'});
    }
    if(selectedFilters.priceValue.min || selectedFilters.priceValue.max){
      let rangeLabel = `Mayor ${selectedFilters.priceValue.min} y menor a ${selectedFilters.priceValue.max}`;
      activeFilters.push({ label:rangeLabel, type:'priceValue'});
    }
    return (
      <ul className="list-inline">
        {
          activeFilters.map( house => (
            <li className="list-inline-item" key={house.type}>
              <a href="#casa">{house.label}</a>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {

      return (
        <div id="main-container">
          <div className="row">
            <div className="col-md-12">
              <div className="filter-header house-content-header">
                  <div id="list-houses-header">
                    <div>
                      <i className="fa fa-th-list" aria-hidden="true"></i>
                      <span className="title">Resultado de la búsqueda:
                      </span>
                      <strong>{this.props.houses.length} propiedades</strong>
                    </div>
                    <div>
                      <span>Filtros seleccionados:</span>
                      { this.renderSelectedFilter()  }
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <div className="row">
            {
              this.props.houses.map( house => (
                <HouseItem house={house} key={house._id}/>
              ))
            }
            </div>
            <div className="row">
              <div className="col-md-12">
                <HousesPagination />
              </div>
            </div>
        </div>
      );
    }
}

export default ListHouses;
