import React from 'react'
import './style.css'

function FetchInput(props) {


    return (
        <div>
            <h1 className='ml'>Please enter a ZipCode</h1>
            <p id='nonValid'></p>
            <form>
                <input className='ml' id='zip' name='zipCode' type='text' placeholder='10314' onChange={props.handleZipChange}></input>
            </form>
            <br></br>
            <h4 className='ml'>Cities in entered ZipCode: </h4>
        </div>
    )
}

export default FetchInput