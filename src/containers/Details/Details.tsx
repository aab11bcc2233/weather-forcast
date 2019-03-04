import * as React from 'react'

class Details extends React.Component {
    public render() {
      return (
        <div className="Details">
          <div className="time">01:00</div>
          <div className="weather">阴</div>
          <div className="temperature">-1°</div>
        </div>
      );
    }
}

export default Details;