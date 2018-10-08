import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

import HouseItem from './components/HouseItem';
import HousesPagination from './components/HousesPagination';
import SelectedFilters from './components/SelectedFilters';


class ListHouses extends Component {

  render() {

      const publishedHouses = this.props.publishedHouses.items;
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
                      <strong> {this.props.publishedHouses.totalItems} propiedades</strong>
                    </div>
                    <div>
                      <SelectedFilters />
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <div className="row">
            {
              publishedHouses.map( house => (
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

function mapStateToProps(state) {
  const {
		publishedHouses
	} = state;

  return {
		publishedHouses
  }
}

export default connect(mapStateToProps)(ListHouses);
