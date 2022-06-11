import React from 'react'

const theList = ['aryan', 'agrawal', 'is', 'the','super','hero','man','wait','what?']

function DynamicList() {
  return (
    <div>
        
        {
        theList.map((e) => {
            if(e.length < 4) return ;
            return <button key={e}>{e}</button>
        })}
        <p>======================================</p>
        
        </div>
  )
}

export default DynamicList