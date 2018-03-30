import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';


class PriceFilter extends Component {
  constructor () {
    super();
    this.state = {
      priceValue: {
        min: 0,
        max: 500,
      }
    };
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  handleChangePrice(value){
    console.log(value);
  }

  render() {
      return (
        <div id="filtro-precios">
          <div className="filter-header">
            <i className="fa fa-usd" aria-hidden="true"></i>
            <span className="title">Rango de precios</span>
          </div>
          <div className="filter-content text-center price-filter">
            <div>
              $1,500 a $50,000
            </div>
            <div>
              <br/><br/>
              <InputRange
                maxValue={1000}
                minValue={0}
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
