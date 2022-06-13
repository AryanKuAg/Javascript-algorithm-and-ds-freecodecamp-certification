import React, { forwardRef } from 'react'


// THIS IS A RIGHT WAY TO PASS ref WITH THE HELP OF forwardRef
const ForWard = forwardRef((props, ref) => {
    return <input ref={ref} type='text'/>
});


// THIS IS A WRONG WAY , COMPLETELY WRONG WAY OKAY//        
// const ForWard = (props, ref) => {
//     return <input ref={ref} type='text'/>
// }


export default React.memo(ForWard);


