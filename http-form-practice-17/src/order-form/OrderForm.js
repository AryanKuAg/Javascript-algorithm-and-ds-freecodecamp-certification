import React from 'react'
import "./OrderForm.css"
import useCheckInput from '../use-check-input'

function OrderForm() {
  const {value: firstName , valueChangeHandler: firstNameChangeHandler, blurHandler: firstNameBlurHandler, reset: firstNameReset, isValid: firstNameIsValid, isError: firstNameIsError } = useCheckInput((v) => v.trim().length > 0)

  const {value: lastName , valueChangeHandler: lastNameChangeHandler, blurHandler: lastNameBlurHandler, reset: lastNameReset, isValid: lastNameIsValid, isError: lastNameIsError } = useCheckInput((v) => v.trim().length > 0)

  console.log(firstNameIsError, 'is it so')


  function onSubmitHandler (event) {
    event.preventDefault();
    console.log('the thing')

    if(!firstNameIsValid){
      return ;
    }



    firstNameReset();
  }

  let isFormValid = !firstNameIsError

  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
        {firstNameIsError && <p className="orderForm__error_para">First Name is not Valid!</p>}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' />
        <label htmlFor='phone'>Phone Number</label>
        <input type='number' />
        <label htmlFor='address'>Address</label>
        <input type='text' /> 
        <button disabled={!isFormValid} type='submit' className='orderForm__submit'>Place Order</button>
    </form> 
  )
}

export default OrderForm

// first name 
// last name
// address
// phone no.