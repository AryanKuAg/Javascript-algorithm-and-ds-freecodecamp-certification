import {useState} from "react"

const useCheckInput = (validityChecker) => {
    const [inputValue, setInputValue] = useState('')
    const [isTouched, setIsTouched]  = useState(false)

    let isValid = validityChecker(inputValue)
    let isError = !isValid && isTouched

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value)
    } 

    const blurHandler = () => {
        setIsTouched(true)
    }
    const reset = () =>{
        setInputValue('')
        setIsTouched(false)
    }

    return {value: inputValue, valueChangeHandler, blurHandler, reset, isValid, isError}
}

export default useCheckInput