import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import {
  fetchPublishedHouses,
  increaseActivePage,
  decreaseActivePage,
  GRID_PAGE_SIZE
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
    const items = publishedHouses.items;

    if(items.length > 0){
      let lastItem = items[(items.length-1)];
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
    const items = publishedHouses.items;

    if(items.length > 0){
      let firstItem = items[0];
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

      const beforeBtnIsDisabled = activePage === 0;

      let lastPage = 0;
      if(publishedHouses.totalItems > 0){
        //The last page depends of the total of items between page size.
        //Must substract one becouse the first active page is zero
        lastPage = Math.ceil(publishedHouses.totalItems / GRID_PAGE_SIZE) - 1;
      }

      const nextBtnIsDisabled = activePage === lastPage;

      return (
        <div className="pagination-section text-center">
          {
            (lastPage > 0) &&
              <div>
                  <button className={ "btn btn-secondary " + (beforeBtnIsDisabled ? "disabled" : "" )}
                    href="#page" onClick={this.handleClickBefore}
                    disabled={beforeBtnIsDisabled}>Anterior</button>
                  <button href="#page" onClick={this.handleClickNext}
                    disabled={nextBtnIsDisabled}
                    className={"btn btn-primary " + (nextBtnIsDisabled ? "disabled" : "" )}>
                    Siguiente</button>
             </div>
          }
        </div>
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
