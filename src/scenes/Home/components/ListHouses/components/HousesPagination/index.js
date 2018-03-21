import React, { Component } from 'react';

class HousesPagination extends Component {
  render() {
      return (
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item active"><a className="page-link" href="#page">1</a></li>
            <li className="page-item"><a className="page-link" href="#page">2</a></li>
            <li className="page-item"><a className="page-link" href="#page">3</a></li>
            <li className="page-item"><a className="page-link" href="#page">3</a></li>
          </ul>
        </nav>
      );
    }
}

export default HousesPagination;
