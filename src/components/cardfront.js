import React from 'react';
import './cardfront.css';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

const defaultProps = {
  cardname: 'JANE APPLESEED',
  cardnumber: '0000 0000 0000 0000',
  expdate: '00/00',
};

/**
 *
 */
const cardfront = (props) => {
  return (
    <div className="frontcard">
      <div className="data">
              <p id="cardnumber">{props.number}</p>
              
        <div className="lowerdata">
          <p id="cardname">{props.name}</p>
          <p id="expdate">
            {props.expMonth}/
            {props.expYear}
          </p>
        </div>
      </div>
    </div>
  );
};

//cardfront.propTypes = propTypes;
cardfront.defaultProps = defaultProps;
// #endregion

export default cardfront;
