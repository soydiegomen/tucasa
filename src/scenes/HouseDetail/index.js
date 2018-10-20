import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import Header from 'components/Header';
import Footer from 'components/Footer';

class HouseDetail extends Component {
	render() {
    	return (
    		  <div className="Home">
            <Header />
	      		<div>
              <h1>Detail {this.props.match.params.houseId}!</h1>
            </div>
            <Footer />
	      	</div>
	    );
  	}
}

function mapStateToProps(state) {

  return {
  }
}

export default connect(mapStateToProps)(HouseDetail);
