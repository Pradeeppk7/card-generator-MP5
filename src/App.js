import React, { useState } from 'react';
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
    if (isValid.name && isValid.nu && isValid.month && isValid.year) {
      setName(initialState.n);
      setCardNumber(initialState.cn);
      setExpMonth(initialState.em);
      setExpYear(initialState.ey);
      setCvc(initialState.cv);
    } else {
      alert('Invalid data');
    }
  }

  function validation1() {
    if (!initialState.n) {
      setErrors({ ...formErrors, name: 'Please fill this field' });
      setisValid({ ...isValid, name: false });
    } else if (initialState.n) {
      isValid.name = true;
      setErrors({ ...formErrors, name: '' });
    }
  }
  function validation2() {
    if (
      !initialState.cn ||
      !(initialState.cn.length === 16) ||
      !/^\d+$/.test(initialState.cn)
    ) {
      setErrors({ ...formErrors, nu: 'Please fill the valid numbers' });
      isValid.nu = false;
    } else {
      isValid.nu = true;
      setErrors({ ...formErrors, nu: '' });
    }
  }
  function validation3() {
    if (
      !initialState.em ||
      !/^\d+$/.test(initialState.em) ||
      !(initialState.em.length === 2) ||
      !(initialState.em <= 12)
    ) {
      setErrors({
        ...formErrors,
        expdate: 'Please fill the valid Expire date',
      });
      isValid.month = false;
    } else {
      isValid.month = true;
      setErrors({ ...formErrors, expdate: '' });
    }
  }
  function validation4() {
    if (
      !initialState.ey ||
      !/^\d+$/.test(initialState.ey) ||
      !(initialState.ey.length === 2)
    ) {
      setErrors({
        ...formErrors,
        expdate: 'Please fill the valid Expire date',
      });
      isValid.year = false;
    } else {
      isValid.year = true;
      setErrors({ ...formErrors, expdate: '' });
    }
  }
  function validation5() {
    if (
      !initialState.cv ||
      !/^\d+$/.test(initialState.ey) ||
      !(initialState.cv.length === 3)
    ) {
      setErrors({ ...formErrors, cvc: 'Please fill this field' });
      isValid.year = false;
    } else {
      isValid.year = true;
      setErrors({ ...formErrors, cvc: '' });
    }
  }

  // console.log(isValid.name,formErrors.name)
  // //return  formErrors;

  return (
    <main>
      <div className="home">
        <div className="leftsection"></div>
        <div className="rightsection">
          <form id="forms">
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
              onBlur={validation1}
            />
            <p className="redalert"> {formErrors.name}</p>

            <br />
            <label className="labelin">CARD NUMBER</label>
            <br />
            <br />
            <input
              maxLength={16}
              className="colinput"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) =>
                setInitial({ ...initialState, cn: e.target.value })
              }
              onBlur={validation2}
            />
            <p className="redalert"> {formErrors.nu}</p>

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
                maxLength={2}
                minLength={2}
                onChange={(e) =>
                  setInitial({ ...initialState, em: e.target.value })
                }
                onBlur={validation3}
              />
              <input
                id="exyearinput"
                className="rowinput"
                type="text"
                placeholder="YY"
                maxLength={2}
                minLength={2}
                onChange={(e) =>
                  setInitial({ ...initialState, ey: e.target.value })
                }
                onBlur={validation4}
              />
              <input
                id="cvcinput"
                className="rowinput"
                type="text"
                maxLength={3}
                minLength={3}
                placeholder="e.g. 123"
                onChange={(e) =>
                  setInitial({ ...initialState, cv: e.target.value })
                }
                onBlur={validation5}
              />
            </div>
            <div className="rowin">
              <p className="redalert"> {formErrors.expdate}</p>
              <p className="redalert" id="cvcalert">
                {' '}
                {formErrors.cvc}
              </p>
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
