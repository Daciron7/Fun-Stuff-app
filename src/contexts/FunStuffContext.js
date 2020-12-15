import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'

const FunStuffContext = createContext({
    randomkitty: [],
    
})

export const FunStuffContextProvider = (props) => {
    const [randomkitty, setRandomKitty] = useState([])


    useEffect(() => {
        // fetch the data and set up state for it
        const fetchCats = async (side) => {
            try {
                const response = await axios.get(
                    'https://api.thecatapi.com/v1/images/search',
                    {
                        headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
                    },
                )
                const cats = await response.data.results[0].leagues
                if (side === 'randomkitty') setRandomKitty(cats)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCats('randomkitty')
    }, [])

    return (
        <FunStuffContext.Provider value={
            {randomkitty}
        }>
            {props.children}
        </FunStuffContext.Provider>
    )
}

export const useFunStuffContext = () => useContext(FunStuffContext)