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
  const initialValues = { n: '', cn: '', em: '', ey: '', cv: '' };
  let [initialState, setInitial] = useState({ initialValues });
  let [formErrors, setErrors] = useState({});
  let [isValid, setisValid] = useState({});

  function dataHandle(e) {
    e.preventDefault();

    setName(initialState.n);
    setCardNumber(initialState.cn);
    setExpMonth(initialState.em);
    setExpYear(initialState.ey);
    setCvc(initialState.cv);
  }

  function validation() {
    if (!initialState.n) {
      setErrors({ ...formErrors, name: 'Please fill this field' });
      isValid.name = false;
    } else {
      isValid.name = true;
      setErrors({ ...formErrors, name: '' });
    }
    if (!initialState.cn) {
      setErrors({ ...formErrors, nu: 'Please fill this field' });
      isValid.nu = false;
    } else {
      isValid.nu = true;
      setErrors({ ...formErrors, nu: '' });
    }
    //  if (!initialState.em) {
    //   setErrors({ ...formErrors, month: "Please fill this field" });
    //   isValid.month = false;
    // }
    // else {
    //   isValid.month = true;
    //   setErrors({ ...formErrors, month: "" });
    // }
    //  if (!initialState.ey) {
    //   setErrors({ ...formErrors, year: "Please fill this field" });
    //   isValid.year = false;
    // }
    // else {
    //   isValid.year = true;
    //   setErrors({ ...formErrors, year: "" });
    // }
    //  if (!initialState.cv) {
    //   setErrors({ ...formErrors, cvc: "Please fill this field" });
    //   isValid.year = false;
    // }
    // else {
    //   isValid.year = true;
    //   setErrors({ ...formErrors, cvc: "" });
    // }

    // console.log(isValid.name,formErrors.name)
    // //return  formErrors;
  }
  return (
    <main>
      <div className="home">
        <div className="leftsection"></div>
        <div className="rightsection">
          <form>
            <label className="labelin">CARDHOLDER NAME</label>
            <br />
            <br />
            <input
              className="colinput"
              type="text"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) =>
                setInitial({ ...initialState, n: e.target.value })
              }
              onBlur={validation}
            />
            <p className="redalert"> {formErrors.name}</p>

            <br />
            <label className="labelin">CARD NUMBER</label>
            <br />
            <br />
            <input
              className="colinput"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) =>
                setInitial({ ...initialState, cn: e.target.value })
              }
            />

            <br />
            <label className="labelin" id="explabel">
              EXP.DATE (MM/YY)
            </label>
            <label className="labelin" id="cvclabel">
              CVC
            </label>
            <br />
            <br />
            <div className="rowin">
              <input
                id="exmonthinput"
                className="rowinput"
                type="text"
                placeholder="MM"
                onChange={(e) =>
                  setInitial({ ...initialState, em: e.target.value })
                }
              />
              <input
                id="exyearinput"
                className="rowinput"
                type="text"
                placeholder="YY"
                onChange={(e) =>
                  setInitial({ ...initialState, ey: e.target.value })
                }
              />
              <input
                id="cvcinput"
                className="rowinput"
                type="text"
                placeholder="e.g. 123"
                onChange={(e) =>
                  setInitial({ ...initialState, cv: e.target.value })
                }
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
