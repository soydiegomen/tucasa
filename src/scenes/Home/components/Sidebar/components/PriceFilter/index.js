import React, { Component } from 'react';
import InputRange from 'react-input-range';
//Redux
import { connect } from 'react-redux';
import {
  selectPriceRange,
  activatePriceFilter,
  DEFAULT_MIN_PRICE,
  DEFAULT_MAX_PRICE
 } from '../../../../../../actions';

class PriceFilter extends Component {

  constructor () {
    super();
    this.state = {
      filters : null,
      rangePrice: {
        min: DEFAULT_MIN_PRICE,
        max: DEFAULT_MAX_PRICE,
      }
    };

    this.handleSelectPrice = this.handleSelectPrice.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangePriceComplate = this.handleChangePriceComplate.bind(this);
  }

  handleChangePrice (value) {
		this.setState({ rangePrice: value });
	}

	handleChangePriceComplate (value) {}

  handleSelectPrice () {
		const rangePrice = this.state.rangePrice;

    const { dispatch } = this.props;
    dispatch(selectPriceRange(rangePrice));
    //isActivePriceFilter flag is used for turn on the link of the price filter
    dispatch(activatePriceFilter(true));
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
  return {}
}

export default connect(mapStateToProps)(PriceFilter);
