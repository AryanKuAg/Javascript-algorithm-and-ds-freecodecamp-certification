import React, {useEffect, useState} from 'react'

function SideEffect(props) {
    console.log(props.d)

    const [yo, setYo] = useState(false)
    useEffect(() => { // this will only run when this component gets built because it has no dependencies.
        console.log('side effect is running')
    }, [yo]) 


    function sideside () {
        
        setYo(p => !p)
        
        console.log(yo)
    }

  return (
    <div><button onClick= {sideside}> EEEEEfecttto</button></div>
  )
}

export default SideEffect