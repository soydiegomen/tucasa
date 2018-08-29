import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectOperation, fetchPublishedHouses } from '../../../../../../actions';

class OperationFilter extends Component {

  constructor () {
    super();
    this.state = {};
    this.handleSelectOperation = this.handleSelectOperation.bind(this);
  }

  /*Handlers*/
  handleSelectOperation (e) {
    e.preventDefault();
    var houseOperation = e.target.id;

    const { dispatch } = this.props;
    dispatch(selectOperation(houseOperation));
    dispatch(fetchPublishedHouses());
  }

  render() {

      const {  publishedHouses } = this.props;
      console.log('publishedHouses', publishedHouses);

      return (
        <div id="filtro-propiedad">
          <div className="filter-header">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="title">Tipo de operación</span>
          </div>
          <div className="filter-content">
            <ul className="list-unstyled">
              <li>
                <a href="#Venta" onClick={this.handleSelectOperation} id="Venta">Venta</a>
              </li>
              <li>
                <a href="#Renta" onClick={this.handleSelectOperation} id="Renta">Renta</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }

}


function mapStateToProps(state) {
  const { selectedOperation, publishedHouses  } = state;

  return {
    selectedOperation,
    publishedHouses
  }
}

export default connect(mapStateToProps)(OperationFilter);
