import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Actions
import {
  selectProperty,
  selectOperation,
  selectKeyword,
  selectPriceRange,
  activatePriceFilter
 } from 'actions';

var MINPRICE = 0;
var MAXPRICE = 5000;

class SelectedFilters extends Component {

  constructor () {
    super();
    this.handleUnselectFilter = this.handleUnselectFilter.bind(this);
  }

  /*Helpers*/
  renderSelectedFilter () {
    let activeFilters = [];

    if(this.props.selectedProperty){
      activeFilters.push({ label: this.props.selectedProperty, type:'houseProperty'});
    }

    if(this.props.selectedOperation){
      activeFilters.push({ label: this.props.selectedOperation, type:'houseOperation'});
    }

    if(this.props.selectedKeyword){
      activeFilters.push({ label: this.props.selectedKeyword, type:'houseKeyword'});
    }

    if(this.props.isActivePriceFilter && (this.props.selectedPriceRange.min || this.props.selectedPriceRange.max)){
      let rangeLabel = `Mayor ${this.props.selectedPriceRange.min} y menor a ${this.props.selectedPriceRange.max}`;
      activeFilters.push({ label:rangeLabel, type:'priceValue'});
    }

    return (
      <ul className="list-inline">
        {
          activeFilters.map( filter => (
            <li className="list-inline-item" key={filter.type}>
              <a href="#casa" onClick={this.handleUnselectFilter} id={filter.type}>{filter.label}</a>
            </li>
          ))
        }
      </ul>
    );
  }

	handleUnselectFilter (e) {
    e.preventDefault();
    const { dispatch } = this.props;

		switch(e.target.id){
			case 'houseProperty':
          dispatch(selectProperty(''));
  				break;
			case 'houseOperation':
					dispatch(selectOperation(''));
					break;
			case 'houseKeyword':
					dispatch(selectKeyword(''));
					break;
			case 'priceValue':
					var rangePrice = {
		        min: MINPRICE,
		        max: MAXPRICE,
		      };
					dispatch(selectPriceRange(rangePrice));
          dispatch(activatePriceFilter(false));
					break;
      default:
        console.log('Error this is a invalid option');
        break;
		}
  }

  render() {
      return (
        <div>
          <span>Filtros seleccionados:</span>
          { this.renderSelectedFilter()  }
        </div>
      );
    }
}

function mapStateToProps(state) {
  const {
		selectedOperation,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange,
    isActivePriceFilter
	} = state;

  return {
    selectedOperation,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange,
    isActivePriceFilter
  }
}

export default connect(mapStateToProps)(SelectedFilters);
