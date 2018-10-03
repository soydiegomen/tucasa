import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProperty } from '../../../../../../actions';

class PropertyFilter extends Component {

  constructor () {
    super();
    this.state = {};
    this.handleSelectProperty = this.handleSelectProperty.bind(this);
  }

  handleSelectProperty (e) {
    e.preventDefault();
    var houseProperty = e.target.id;

    const { dispatch } = this.props;
    dispatch(selectProperty(houseProperty));
  }

  render() {
      return (
        <div id="filtro-propiedad">
          <div className="filter-header">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="title">Tipo de propiedad</span>
          </div>
          <div className="filter-content">
            <ul className="list-unstyled">
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Casa" >Casas</a>
              </li>
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Departamento">Departamentos</a>
              </li>
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Local">Locales</a>
              </li>
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Terreno">Terrenos</a>
              </li>
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Salon">Salones</a>
              </li>
              <li>
                <a href="#casa" onClick={this.handleSelectProperty} id="Otro">Otros</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(PropertyFilter);
