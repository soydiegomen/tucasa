import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

import { selectKeyword } from '../../../../../../actions';

class KeywordFilter extends Component {

  constructor () {
    super();
    this.state = {
      keywordSelected: null,
    };

    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
  }

  /*Handlers*/
  handleChangeKeyword(event) {
	  const value = event.target.value;
	  this.setState({
	    keywordSelected : value
	  });
	}

  handleSelectKeyword (e) {
    e.preventDefault();
    const houseKeyword = this.state.keywordSelected;
    const { dispatch } = this.props;
    
    dispatch(selectKeyword(houseKeyword));
  }

  render() {
      const selectedKeyword = this.props.selectedKeyword;
      return (
          <form id="filtro-habitaciones" onSubmit={this.handleSelectKeyword}>
            <div className="filter-header">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span className="title">Palabras clave</span>
            </div>
            <div className="filter-content text-center">
              <div className="form-group">
                <input type="text" className="form-control" onChange={this.handleChangeKeyword}/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary coco-color" value="Buscar"/>
              </div>
            </div>
          </form>
      );
    }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(KeywordFilter);
