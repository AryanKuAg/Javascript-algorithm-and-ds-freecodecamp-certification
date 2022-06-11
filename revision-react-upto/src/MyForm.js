import React, {useState} from 'react'

function MyForm() {
    const [value, setValue] = useState({name:'', age:''})

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

    console.log('name',value.name, 'age', value.age);
  }
  // console.log('form form form')
  return (
    <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type='text' onChange={nameChangeHandler} value={value.name}/>
        <label>Age:</label>
        <input type='number' onChange={ageChangeHandler} value={value.age}/>
        <input type='submit'/>
    </form>
  )
}

export default MyForm