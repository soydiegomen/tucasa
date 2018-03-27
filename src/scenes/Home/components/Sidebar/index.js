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
          <KeywordFilter />
          <PropertyFilter selectedPropertyHandle={this.props.selectedPropertyHandle} />
          <OperationFilter selectedOperationHandle={this.props.selectedOperationHandle} />
          <PriceFilter />
        </div>
      );
    }
}

export default Sidebar;
