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
                <a href="#casa" onClick={this.props.selectedPropertyHandle} id="Casa" >Casas</a>
              </li>
              <li>
                <a href="#casa" >Departamentos</a>
              </li>
              <li>
                <a href="#casa" >Locales</a>
              </li>
              <li>
                <a href="#casa" >Terrenos</a>
              </li>
              <li>
                <a href="#casa" >Salones</a>
              </li>
              <li>
                <a href="#casa" >Otros</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

export default PropertyFilter;
