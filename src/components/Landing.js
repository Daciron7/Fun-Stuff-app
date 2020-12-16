import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#556B2F'
    }
}))

const Landing = () => {
    const classes = useStyles()

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Box className={classes.root}>
            { 
                isAuthenticated ?
            <h1>Welcome to Fun Stuff!</h1>
                    :
            <h1>You need to register or login to see the all of the data for Fun Stuff.</h1>
            }
        </Box>
        
    )
}

export default Landing