import React, { Component } from 'react'
import warshipInfo from './Warship_stuff/warship_info.json'
import './warshipFacts.css'

const kurfurst = Object.values(warshipInfo.data[3340711728].name)
const cali = Object.values(warshipInfo.data[3553572848].name)











function Facts() {
    return (
        <div>
            <h1>Warship Facts</h1>
            <h3>With 105800 hitpoints, {kurfurst} is the largest ship in the game!</h3>

            <h3>With a speed of 20.5 knots, {cali} is the slowest ship in the game.</h3>

           
            
        </div>
    )
}

export default Facts