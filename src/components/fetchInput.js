import React from 'react'
import './style.css'

function FetchInput(props) {


    return (
        <div>
            
            <form>
                <h1 className='ml'>Please enter a ZipCode</h1>
                <p id='nonValid'></p>
                <input className='ml' id='zip' name='zipCode' type='text' placeholder='10314' onChange={props.handleZipChange}></input>
            </form>
            <br></br>

            <form>
                <h1 className='ml'>Please enter a City</h1>
                <p id='nonValidCity'></p>
                <input className='ml' id='city' name='zipCode' type='text' placeholder='Manhattan' onChange={props.handleCityChange}></input>
            </form>
                <br></br>
        </div>
        
    )
}

export default FetchInput