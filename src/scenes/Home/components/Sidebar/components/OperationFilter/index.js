import React, { Component } from 'react';
import { connect } from 'react-redux';

class OperationFilter extends Component {
  render() {

      const { dispatch, selectedOperation } = this.props;
      console.log('selectedOperation',selectedOperation);

      return (
        <div id="filtro-propiedad">
          <div className="filter-header">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="title">Tipo de operación</span>
          </div>
          <div className="filter-content">
            <ul className="list-unstyled">
              <li>
                <a href="#Venta" onClick={this.props.handleSelectOperation} id="Venta">Venta</a>
              </li>
              <li>
                <a href="#Renta" onClick={this.props.handleSelectOperation} id="Renta">Renta</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}


function mapStateToProps(state) {
  const { selectedOperation  } = state;

  return {
    selectedOperation
  }
}

export default connect(mapStateToProps)(OperationFilter);

//export default OperationFilter;
