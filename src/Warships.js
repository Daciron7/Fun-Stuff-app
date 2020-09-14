import React, { Component } from 'react'
import warshipInfo from './Warship_stuff/warship_info.json'
import './warships.css'



const tirp = Object.values(warshipInfo.data[3667867440].name)
const kurfurst = Object.values(warshipInfo.data[3340711728].name)
const jB = Object.values(warshipInfo.data[3751753552].name)
const mid = Object.values(warshipInfo.data[3335501808].name)
const flint = Object.values(warshipInfo.data[3553540080].name)
const alaska = Object.values(warshipInfo.data[3760109552].name)



class Warships extends Component {
    render() {
        return (
        <div>
            
            <h1>Total number of warships: {total.length}</h1>
            <h3>Personal Favorites</h3>
            <p>{tirp}</p>
            <p>{kurfurst}</p>
            <p>{jB}</p>
            <p>{mid}</p>
            <p>{flint}</p>
            <p>{alaska}</p>
            
        </div>
        )
    }
}

export default Warships