import useInput from "../use-input";

const BasicForm = (props) => {
  const {value: firstName, isValid : enteredFirstNameIsValid, isError: isFirstNameError, inputChangeHandler : firstNameInputHandler, inputBlurHandler: firstNameBlurHandler, reset: resetFirstName } = useInput((d) => d.length > 0)

  const {value: lastName, isValid: enteredLastNameIsValid, isError: isLastNameError, inputChangeHandler: lastNameInputHandler, inputBlurHandler: lastNameBlurHandler, reset: resetLastName} = useInput((d) => d.length > 0)


  const submitFormHandler = () =>  {
    if(isFirstNameError || isLastNameError){
      return;
    }

    if(enteredFirstNameIsValid && enteredLastNameIsValid){}



    resetFirstName()
    resetLastName()
  }

  return (
    <form>
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
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;