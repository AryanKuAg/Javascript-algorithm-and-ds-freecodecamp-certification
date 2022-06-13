import React, {useState, useEffect, useRef} from 'react'

function MyForm(props) {
    const [value, setValue] = useState({name:'', age:''})
    const focus = useRef();
    const focus2 = useRef();


    useEffect(() => {
        let timer = setTimeout(() => {
          console.log('timer time rtime r');
        }, 3000)
        focus.current.focus();
        focus2.current.focus();

        return () => {
          clearTimeout(timer)
        }
    }, [value])

    const nameChangeHandler = (event) => {
        setValue((pre) => {
         
            return {...pre, name: event.target.value}
        })
    }
    const ageChangeHandler = (event) => {
      setValue((pre) => {
       
          return {...pre, age: event.target.value}
      })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log('name',value.name, 'age', value.age);
    props.fx(value.name)
  }
  // console.log('form form form')
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' ref={focus2} onChange={nameChangeHandler} value={value.name}/>
        <label htmlFor='age'>Age:</label>
        <input id='age' type='number' ref={focus} onChange={ageChangeHandler} value={value.age}/>
        <input type='submit'/>
    </form>
  )
}

export default MyForm