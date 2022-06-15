// we gonna make a generic hook that will check all kind of input validation
import { useState } from "react";

const useInput = (validationFunction)  => {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid  = validationFunction(inputValue)
    const isError = !isValid && isTouched;

    const inputChangeHandler = event => {
        setInputValue(event.target.value)
    }

    const inputBlurHandler = _ => {
        setIsTouched(true)
    }

    const reset = _ => {
        setInputValue('')
        setIsTouched(false)
    }

    return {
        value: inputValue, isError,isValid,  inputChangeHandler, inputBlurHandler, reset 
    }
}

export default useInput