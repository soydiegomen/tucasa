import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { changeActivePage } from '../../../../../../actions';


class HousesPagination extends Component {

  constructor () {
    super();
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickNext (e) {
    e.preventDefault();

    const { dispatch, publishedHouses } = this.props;

    if(publishedHouses.length > 0){
      let lastItem = publishedHouses[(publishedHouses.length-1)];
      const dateNextPage = new Date(lastItem.lastModification);

      var newActivePage =
      {
        itemLastDate: dateNextPage,
        pagDirection: 'rigth'
      };

      dispatch(changeActivePage(newActivePage));
    }

    //TODO: se utilizara para la navegación a la izquierda
    //let firstItem = json[0];
    //datePreviousPage = new Date(firstItem.lastModification);
  }

  render() {

      const publishedHouses = this.props.publishedHouses;
      return (
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#page">Anterior</a></li>
            <li className="page-item active">
            {(publishedHouses.length >= 4) &&
              <a className="page-link" href="#page" onClick={this.handleClickNext}>Siguiente</a>
            }
            </li>
          </ul>
        </nav>
      );
    }
}

function mapStateToProps(state) {
  const {
		activePage,
    publishedHouses
	} = state;

  return {
    activePage,
    publishedHouses
  }
}

export default connect(mapStateToProps)(HousesPagination);
