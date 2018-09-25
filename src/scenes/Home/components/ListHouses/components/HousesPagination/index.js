import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchPublishedHouses } from '../../../../../../actions';


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

      var activePage =
      {
        itemLastDate: dateNextPage,
        pagDirection: 'rigth'
      };

      console.log('Home Pager');
      this.updatePublishedHousesList(activePage);
    }

    //TODO: se utilizara para la navegación a la izquierda
    //let firstItem = json[0];
    //datePreviousPage = new Date(firstItem.lastModification);
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
    publishedHouses,
    selectedOperation,
    selectedProperty,
    selectedKeyword,
    selectedPriceRange
	} = state;

  return {
    publishedHouses,
    selectedOperation,
    selectedProperty,
    selectedKeyword,
    selectedPriceRange
  }
}

export default connect(mapStateToProps)(HousesPagination);
