import React from 'react';

import PropTypes from 'prop-types';
import "./cardback.css"

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const cardback = (props) => {
    return <div className='card'>
        <p id="cardcvc">{props.cvc}</p>
    </div>;
}

cardback.propTypes = propTypes;
cardback.defaultProps = defaultProps;
// #endregion

export default cardback;