import React, { Component } from 'react';

class KeywordFilter extends Component {
  render() {
      return (
          <form id="filtro-habitaciones" onSubmit={this.props.handleSearchKeyword}>
            <div className="filter-header">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span className="title">Palabras clave</span>
            </div>
            <div className="filter-content text-center">
              <div className="form-group">
                <input type="text" className="form-control" onChange={this.props.handleChangeKeyword}/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary coco-color" value="Buscar"/>
              </div>
            </div>
          </form>
      );
    }
}

export default KeywordFilter;
