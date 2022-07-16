import React from "react"

const InfoContext = React.createContext({
    name: 'aryan',
    age: 18,
    nameChange: (name) => {
        this.name = name
    },
    ageChange: (age) => {
        this.age = age
    }
})

export const InfoContextProvider = (props) => {
    const [data, setData] = React.useState({name: 'initial', age: 'initialage'})


    const nameChange =(name) => {
        setData(pre =>{ return {...pre, name}});
    }

    const ageChange = (age) => {
        setData(pre =>{ return {...pre, age}});
    }

    const valueContext = {
        name: data?.name,
        age: data?.age,
        nameChange: nameChange,
        ageChange: ageChange

    }


    return <InfoContext.Provider value={valueContext}>{props.children}</InfoContext.Provider>
}



export default InfoContext;