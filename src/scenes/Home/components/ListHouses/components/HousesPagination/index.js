import React, { Component } from 'react';

class HousesPagination extends Component {
  render() {
      return (
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#page">Anterior</a></li>
            <li className="page-item active"><a className="page-link" href="#page">Siguiente</a></li>
          </ul>
        </nav>
      );
    }
}

export default HousesPagination;
