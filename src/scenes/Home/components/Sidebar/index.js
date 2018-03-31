import React, { Component } from 'react';
import KeywordFilter from './components/KeywordFilter';
import PropertyFilter from './components/PropertyFilter';
import OperationFilter from './components/OperationFilter';
import PriceFilter from './components/PriceFilter';

class Sidebar extends Component {

  render() {
      return (
        <div>
          <div className="filter-header">
            Filtros
          </div>
          <KeywordFilter handleSearchKeyword={this.props.handleSearchKeyword}
            handleChangeKeyword={this.props.handleChangeKeyword} />
          <PropertyFilter handleSelectProperty={this.props.handleSelectProperty} />
          <OperationFilter handleSelectOperation={this.props.handleSelectOperation}  />
          <PriceFilter priceValue={this.props.priceValue}
            changePriceHandle={this.props.changePriceHandle}
            handleChangePriceComplate={this.props.handleChangePriceComplate}
            handleSelectPrice = {this.props.handleSelectPrice}
            maxSelectedPrice= {this.props.appliedFilters.priceValue.max}
            minSelectedPrice= {this.props.appliedFilters.priceValue.min}/>
        </div>
      );
    }
}

export default Sidebar;
