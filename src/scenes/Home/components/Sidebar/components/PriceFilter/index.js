import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
//Redux
import { connect } from 'react-redux';
import { selectPriceRange } from '../../../../../../actions';

var MINPRICE = 0;
var MAXPRICE = 5000;

class PriceFilter extends Component {

  constructor () {
    super();
    this.state = {
      filters : null,
      rangePrice: {
        min: MINPRICE,
        max: MAXPRICE,
      }
    };
    this.handleSelectPrice = this.handleSelectPrice.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangePriceComplate = this.handleChangePriceComplate.bind(this);
  }

  handleChangePrice (value) {
		this.setState({ rangePrice: value });
	}

	handleChangePriceComplate (value) {
		console.log('handleChangePriceComplate', value);
	}

  handleSelectPrice () {
		var rangePrice = this.state.rangePrice;

    const { dispatch } = this.props;
    console.log('rangePrice', rangePrice);
    dispatch(selectPriceRange(rangePrice));
		//Update filter state
		//this.setState({ filters : filters });
		//Call service using the new filter
		//this.getListOfHouses(filters);
	}

  showSelectedRange () {
    if(this.props.minSelectedPrice || this.props.maxSelectedPrice){
      return (
        <div>
          <span>
            ${this.props.minSelectedPrice}
          </span>
          a
          <span>${this.props.maxSelectedPrice}</span>
        </div>
      );
    }
  }

  render() {

      console.log('selectedPriceRange', this.props.selectedPriceRange );
      return (
        <div id="filtro-precios">
          <div className="filter-header">
            <i className="fa fa-usd" aria-hidden="true"></i>
            <span className="title">Rango de precios</span>
          </div>
          <div className="filter-content text-center price-filter">
            <div className="price-filter">
              {this.showSelectedRange()}
            </div>
            <div>
              <br/><br/>
              <InputRange
                maxValue={10000}
                minValue={0}
                step={100}
                formatLabel={value => `${value}`}
                value={ this.state.rangePrice }
                onChange={ this.handleChangePrice }
                onChangeComplete={this.handleChangePriceComplate} />
            </div>
            <br/>
            <button className="btn btn-primary" onClick= {this.handleSelectPrice}>
              Aplicar
            </button>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
  const { selectedPriceRange  } = state;

  return {
    selectedPriceRange,
  }
}

export default connect(mapStateToProps)(PriceFilter);
