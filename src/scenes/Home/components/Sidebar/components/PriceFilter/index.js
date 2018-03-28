import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';


class PriceFilter extends Component {
  constructor () {
    super();
    this.state = { value : 0 };
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  handleChangePrice(event){
    console.log('value has change', event.target.value);
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
            <InputRange
      maxValue={20}
      minValue={0}
      value={this.state.value}
      onChange={value => this.setState({ value })} />
            </div>
            <br/>
            <a href="#apply" className="btn btn-primary" >
              Aplicar
            </a>
          </div>
        </div>
      );
    }
}

export default PriceFilter;
