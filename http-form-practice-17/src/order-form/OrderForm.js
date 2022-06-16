import React from 'react'

function OrderForm() {
  return (
    <form>
        <label htmlFor='firstName'>First Name</label>
        <input type='text'/>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' />
        <label htmlFor='phone'>Phone Number</label>
        <input type='number' />
        <label htmlFor='address'>Address</label>
        <input type='text' /> 
    </form> 
  )
}

export default OrderForm

// first name 
// last name
// address
// phone no.