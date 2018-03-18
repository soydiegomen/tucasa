import React, { Component } from 'react';
import KeywordFilter from './components/KeywordFilter';
import PropertyFilter from './components/PropertyFilter';

class Sidebar extends Component {
  render() {
      return (
        <div>
          <div className="filter-header">
            Filtros
          </div>
          <KeywordFilter />
          <PropertyFilter />
        </div>
      );
    }
}

export default Sidebar;
