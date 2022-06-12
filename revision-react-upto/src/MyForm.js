import React, {useState, useEffect} from 'react'

function MyForm(props) {
    const [value, setValue] = useState({name:'', age:''})

    useEffect(() => {
        let timer = setTimeout(() => {
          console.log('timer time rtime r');
        }, 3000)

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
        <input id='name' type='text' onChange={nameChangeHandler} value={value.name}/>
        <label htmlFor='age'>Age:</label>
        <input id='age' type='number' onChange={ageChangeHandler} value={value.age}/>
        <input type='submit'/>
    </form>
  )
}

export default MyForm