import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';


class PriceFilter extends Component {

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
                value={ this.props.priceValue }
                onChange={ this.props.changePriceHandle }
                onChangeComplete={this.props.handleChangePriceComplate} />
            </div>
            <br/>
            <button className="btn btn-primary" onClick= {this.props.handleSelectPrice}>
              Aplicar
            </button>
          </div>
        </div>
      );
    }
}

export default PriceFilter;
