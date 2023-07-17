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
  return (
    <main>
      <div className="home">
        <div className="leftsection"></div>
        <div className="rightsection">
          <form>
            <label>
            CARDHOLDER NAME
            </label>
            <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /><br />
            <label>
            CARD NUMBER
            </label>
            <br />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              /><br />
            <label>
            EXP.DATE (MM/YY)
            </label>
            <label>
            CVC
            </label>
            <br />
              <input
                type="text"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              />
              <input
                type="text"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
              />
            
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
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
