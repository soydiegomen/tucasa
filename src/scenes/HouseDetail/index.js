import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import HouseCarousel from './components/HouseCarousel';
import Metrics from './components/Metrics';
import HouseServices from './components/HouseServices';
import HouseMap from './components/HouseMap';
import DetailSideBar from './components/DetailSideBar';

class HouseDetail extends Component {
	render() {
			//Get houseId
			//this.props.match.params.houseId
    	return (
    		  <div className="Home">
            <Header />
	      		<div>
              <div className="container">
								<div className="row">
									<div className="col-md-9 detail-main-content">
										<div className="house-content">
											<div className="house-summary">
												<h2>Casa a 5 min del centro de Jilotepec</h2>
												<h5>LL Calle Alcatraz, Col Javier Barrios</h5>
											</div>
											<HouseCarousel />
											<Metrics />
											<div className="house-details">
				                <div className="house-section">
				                    <h4>Descripción</h4>
				                    <p>
				                      Departamento renovado recientemente, ubicado dentro de una casa de los años 1930s, totalmente amueblado, cocina equipada, horno de microondas.
				                      Localizado en Av. Vallarta, la avenida principal de la ciudad, pero el departamento no es ruidoso. Cerca de la Universidad de Guadalajara, el Consulado Americano, la Alianza Francesa. A 15 minutos caminando del centro de la ciudad.
				                    </p>
				                </div>
											</div>
											<HouseServices />
											<HouseMap />
										</div>
									</div>
									<div className="col-md-3">
										<DetailSideBar />
									</div>
								</div>
							</div>
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
