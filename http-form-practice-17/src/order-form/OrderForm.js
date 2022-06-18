import React from 'react'
import "./OrderForm.css"
import useCheckInput from '../use-check-input'
import axiosInstance from '../axios.js'

function OrderForm() {
  const {value: firstName , valueChangeHandler: firstNameChangeHandler, blurHandler: firstNameBlurHandler, reset: firstNameReset, isValid: firstNameIsValid, isError: firstNameIsError } = useCheckInput((v) => v.trim().length > 0)

  const {value: address , valueChangeHandler: addressChangeHandler, blurHandler: addressBlurHandler, reset: addressReset, isValid: addressIsValid, isError: addressIsError } = useCheckInput((v) => v.trim().length > 10)

  const {value: lastName , valueChangeHandler: lastNameChangeHandler, blurHandler: lastNameBlurHandler, reset: lastNameReset, isValid: lastNameIsValid, isError: lastNameIsError } = useCheckInput((v) => v.trim().length > 0)

  const {value: phone , valueChangeHandler: phoneChangeHandler, blurHandler: phoneBlurHandler, reset: phoneReset, isValid: phoneIsValid, isError: phoneIsError } = useCheckInput((v) => v.trim().length > 5 && v.trim().length < 12)

  // console.log(firstNameIsError, 'is it so')


  function onSubmitHandler (event) {
    event.preventDefault();
    // console.log('the thing')

    // if(!firstNameIsValid || !lastNameIsValid || !phoneIsValid || !addressIsValid){
    //   return ;
    // }

    axiosInstance.get('/something').then((data) => {
      console.log(data)
    }).catch(console.log)

    // firstNameReset();
    // lastNameReset();
    // phoneReset();
    // addressReset();
  }
  let isFormValid = false;
   isFormValid = !firstNameIsError && !lastNameIsError && !phoneIsError && !addressIsError

  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
        {firstNameIsError && <p className="orderForm__error_para">First Name is not Valid!</p>}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
        {lastNameIsError && <p className="orderForm__error_para">Last Name is not Valid!</p>}
        <label htmlFor='phone'>Phone Number</label>
        <input type='number' value={phone} onChange={phoneChangeHandler} onBlur={phoneBlurHandler}/>
        {phoneIsError && <p className="orderForm__error_para">Phone Number Must Be Greater than 5 Digits and less than 12 Digits!</p>}
        <label htmlFor='address'>Address</label>
        <input type='text' value={address} onChange={addressChangeHandler} onBlur={addressBlurHandler}/> 
        {addressIsError && <p className="orderForm__error_para">Address is not Valid!</p>}
        <button  type='submit' className='orderForm__submit'>Place Order</button>
    </form> 
  )
}
// disabled={!isFormValid}
export default OrderForm

// first name 
// last name
// address
// phone no.