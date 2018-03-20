import React, { Component } from 'react';

class OperationFilter extends Component {
  render() {
      return (
        <div id="filtro-propiedad">
          <div className="filter-header">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="title">Tipo de operación</span>
          </div>
          <div className="filter-content">
            <ul className="list-unstyled">
              <li>
                <a href="#venta">Venta</a>
              </li>
              <li>
                <a href="#renta" >Renta</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

export default OperationFilter;
