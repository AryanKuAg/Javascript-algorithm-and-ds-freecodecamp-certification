import useInput from "../use-input";

const BasicForm = (props) => {
  const {value: firstName, isValid : enteredFirstNameIsValid, isError: isFirstNameError, inputChangeHandler : firstNameInputHandler, inputBlurHandler: firstNameBlurHandler, reset: resetFirstName } = useInput((d) => d.length > 0)

  const {value: lastName, isValid: enteredLastNameIsValid, isError: isLastNameError, inputChangeHandler: lastNameInputHandler, inputBlurHandler: lastNameBlurHandler, reset: resetLastName} = useInput((d) => d.length > 0)

  const {value: email, isValid: enteredEmailIsValid, isError: isEmailError, inputChangeHandler: emailInputHandler, inputBlurHandler: emailBlurHandler, reset: resetEmail} = useInput((e) => e.includes('@'))


  const submitFormHandler = () =>  {
    if(isFirstNameError || isLastNameError || isEmailError){
      return;
    }

    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
      console.log(firstName, lastName, email, 'is OKAY')
    }

    // resetFirstName()
    // resetLastName()
    // resetEmail()
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={isFirstNameError ?"form-control invalid":'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameInputHandler} onBlur={firstNameBlurHandler}/>
        </div>
        <div className={isLastNameError ? "form-control invalid":'form-control'}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameInputHandler} onBlur={lastNameBlurHandler}/>
        </div>
      </div>
      <div className={isEmailError ? "form-control invalid":'form-control'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailInputHandler} onBlur={emailBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled={isLastNameError || isFirstNameError || isEmailError}type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;