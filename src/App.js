import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Cardfront from './components/cardfront';
import Cardback from './components/cardback';
function App() {
  const [name, setName] = useState('JANE APPLESEED');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [expMonth, setExpMonth] = useState('00');
  const [expYear, setExpYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  let n = '';
  let cn = '';
  let em = '';
  let ey = '';
  let cv = '';
  function dataHandle(e) {
    e.preventDefault();
    setName(n);
    setCvc(cv);
    setExpMonth(em);
    setExpYear(ey);
    setCardNumber(cn);
  }

  return (
    <main>
      <div className="home">
        <div className="leftsection"></div>
        <div className="rightsection">
          <form>
            <label className='labelin'>CARDHOLDER NAME</label>
            <br />
            <br />
            <input
              className="colinput"
              type="text"
              placeholder='e.g. Jane Appleseed'
              onChange={(e) => (n = e.target.value)}
            />
            
            <br />
            <label className='labelin'>CARD NUMBER</label>
            <br />
            <br />
            <input
              className="colinput"
              type="text"
              placeholder='e.g. 1234 5678 9123 0000'
              onChange={(e) => (cn = e.target.value)}
            />
            
            <br />
              <label className='labelin' id='explabel'>EXP.DATE (MM/YY)</label>
              <label className='labelin' id='cvclabel'>CVC</label>
              <br />
              <br />
            <div className='rowin'>
              <input
                id='exmonthinput'
                className="rowinput"
                type="text"
                placeholder='MM'
                onChange={(e) => (em = e.target.value)}
              />
              <input
                id='exyearinput'
                className="rowinput"
                type="text"
                placeholder='YY'
                onChange={(e) => (ey = e.target.value)}
              />
              <input
                id='cvcinput'
                className="rowinput"
                type="text"
                placeholder='e.g. 123'
                onChange={(e) => (cv = e.target.value)}
              />
            </div>
            <button onClick={dataHandle}>Confirm</button>
          </form>
        </div>
        <div className="cardfront">
          <Cardfront
            name={name}
            number={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
          />
        </div>
        <div className="cardback">
          <Cardback cvc={cvc} />
        </div>
      </div>
    </main>
  );
}

export default App;
