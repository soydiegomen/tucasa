import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import {
  fetchPublishedHouses,
  increaseActivePage,
  decreaseActivePage
} from '../../../../../../actions';


class HousesPagination extends Component {

  constructor () {
    super();
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickBefore = this.handleClickBefore.bind(this);
  }

  handleClickNext (e) {
    e.preventDefault();

    const { dispatch, publishedHouses } = this.props;

    if(publishedHouses.length > 0){
      let lastItem = publishedHouses[(publishedHouses.length-1)];
      const dateNextPage = new Date(lastItem.lastModification);

      var activePage =
      {
        itemLastDate: dateNextPage,
        pagDirection: 'rigth'
      };

      this.updatePublishedHousesList(activePage);
      dispatch(increaseActivePage());
    }
  }

  handleClickBefore (e) {
    e.preventDefault();

    const { dispatch, publishedHouses } = this.props;

    if(publishedHouses.length > 0){
      let firstItem = publishedHouses[0];
      const dateBeforePage = new Date(firstItem.lastModification);

      var activePage =
      {
        itemLastDate: dateBeforePage,
        pagDirection: 'left'
      };

      this.updatePublishedHousesList(activePage);
      dispatch(decreaseActivePage());
    }
  }

  //Call to service for update houses list
	updatePublishedHousesList(activePage){
		const {
			dispatch,
			selectedOperation,
			selectedProperty,
			selectedKeyword,
			selectedPriceRange
		} = this.props;

		//Build JSON with filters information
		var filters = {
				selectedProperty,
				selectedOperation,
				selectedKeyword,
				selectedPriceRange,
				activePage
		};

		dispatch(fetchPublishedHouses(filters));
	}

  render() {
      const {
  			publishedHouses,
        activePage
  		} = this.props;
      
      return (
        <nav>
          <ul className="pagination justify-content-center">
            {(activePage > 0) &&
              <li className="page-item">
                <a className="page-link" href="#page" onClick={this.handleClickBefore}>Anterior</a>
              </li>
            }
            {(publishedHouses.length >= 4) &&
              <li className="page-item active">
                <a className="page-link" href="#page" onClick={this.handleClickNext}>Siguiente</a>
              </li>
            }
          </ul>
        </nav>
      );
    }
}

function mapStateToProps(state) {
  const {
    publishedHouses,
    selectedOperation,
    selectedProperty,
    selectedKeyword,
    selectedPriceRange,
    activePage
	} = state;

  return {
    publishedHouses,
    selectedOperation,
    selectedProperty,
    selectedKeyword,
    selectedPriceRange,
    activePage
  }
}

export default connect(mapStateToProps)(HousesPagination);
