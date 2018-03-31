import React, { Component } from 'react';

class PropertyFilter extends Component {

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
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Casa" >Casas</a>
              </li>
              <li>
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Departamento">Departamentos</a>
              </li>
              <li>
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Local">Locales</a>
              </li>
              <li>
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Terreno">Terrenos</a>
              </li>
              <li>
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Salon">Salones</a>
              </li>
              <li>
                <a href="#casa" onClick={this.props.handleSelectProperty} id="Otro">Otros</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

export default PropertyFilter;
