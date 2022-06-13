import React from 'react'

class Organ extends React.Component {

    constructor( ){
        super()
        this.state = {name: 'pupu'}
        console.log('==================',this)

        // this.flicker.bind(this)
    }
    componentDidMount() {
        console.log('mount mount')
    }

    componentDidUpdate() {
        console.log("update update")
    }

    componentWillUnmount() {
        console.log('unmount unmount')
    }

    flicker() {
        throw Error('error hai bhaiya')
    }
    
    componentDidCatch(error) {
        console.log('eeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrroooooooooooooorrrrrrrrrrrrrr')
    };

    render() {
        
        return <> <h1> this is a class based componentn : {this.state.name}</h1>
            <button onClick={this.flicker.bind(this)}></button>
        </>
    }
}

export default Organ