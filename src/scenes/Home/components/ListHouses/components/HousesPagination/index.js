import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';


class HousesPagination extends Component {

  constructor () {
    super();
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickNext (e) {
    e.preventDefault();

    const { dispatch, paginationParameters } = this.props;

    var newActivePage =
    {
      itemLastDate: paginationParameters.dateNextPage,
      pagDirection: 'rigth'
    };

    console.log('newActivePage', newActivePage);
  }

  render() {
      return (
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#page">Anterior</a></li>
            <li className="page-item active">
              <a className="page-link" href="#page" onClick={this.handleClickNext}>Siguiente</a>
            </li>
          </ul>
        </nav>
      );
    }
}

function mapStateToProps(state) {
  const {
		activePage,
    paginationParameters
	} = state;

  return {
    activePage,
    paginationParameters
  }
}

export default connect(mapStateToProps)(HousesPagination);
