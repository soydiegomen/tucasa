import React, { Component } from 'react';

class KeywordFilter extends Component {
  render() {
      return (
          <div id="filtro-habitaciones">
            <div className="filter-header">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span className="title">Palabras clave</span>
            </div>
            <div className="filter-content text-center">
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <a href="#filtrar" className="btn btn-primary coco-color">
                  Buscar
                </a>
              </div>
            </div>
          </div>
      );
    }
}

export default KeywordFilter;
