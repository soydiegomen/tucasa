import React, { Component } from 'react';

import HouseItem from './components/HouseItem';
import HousesPagination from './components/HousesPagination';

class ListHouses extends Component {
  render() {
      return (
        <div id="main-container">
          <div className="row">
            <div className="col-md-12">
              <div className="filter-header house-content-header">
                  <div id="list-houses-header">
                    <i className="fa fa-th-list" aria-hidden="true"></i>
                    <span className="title">Resultado de la búsqueda: <strong>15 propiedades</strong></span>
                  </div>
                </div>
              </div>
          </div>
            { this.renderHouses() }
            <div className="row">
              <div className="col-md-12">
                <HousesPagination />
              </div>
            </div>
        </div>
      );
    }

    renderHouses(){
      var houses = [];
      for(var i=0; i<10; i++){
        houses.push(<HouseItem key={i}/>);
      }

      return (<div className="row">{houses}</div>)
    }
}

export default ListHouses;
