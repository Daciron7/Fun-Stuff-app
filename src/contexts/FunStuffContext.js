import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'

const FunStuffContext = createContext({
    esports: [],
    
})

export const FunStuffContextProvider = (props) => {
    const [esports, setEsports] = useState([])


    useEffect(() => {
        // fetch the data and set up state for it
        const fetchTeams = async (side) => {
            try {
                const response = await axios.get(
                    'https://api.pandascore.co/lol/teams',
                    {
                        headers: { 'x-api-key': process.env.REACT_APP_ESPORTS_API_KEY },
                    },
                )
                const teams = await response.data.results[0].teams
                if (side === 'teams') setEsports(teams)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTeams('teams')
    }, [])

    return (
        <FunStuffContext.Provider value={
            {esports}
        }>
            {props.children}
        </FunStuffContext.Provider>
    )
}

export const useFunStuffContext = () => useContext(FunStuffContext)