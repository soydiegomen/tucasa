import React, { Component } from 'react';

class PriceFilter extends Component {
  render() {
      return (
        <div id="filtro-precios">
          <div className="filter-header">
            <i className="fa fa-usd" aria-hidden="true"></i>
            Rango de precios
          </div>
          <div className="filter-content text-center price-filter">
            <div>
              $1,500 a $50,000
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
