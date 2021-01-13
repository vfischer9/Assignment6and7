import React, { Component } from 'react'
import FetchInput from './fetchInput'

class FetchInputResult extends Component {
    
    constructor(){
        super();
        this.state={
            place: [],
            zipCode: "",
            error: false,
            zips: []
        }
    }

    async componentDidMount(){
        document.getElementById('nonValid').innerHTML = 'You will be displayed the cities within that ZipCode'
        document.getElementById('nonValidCity').innerHTML = 'You will be displayed the ZipCodes within that City'
    }

    findZips = async (zipCode) => {
        try{
            const url = 'http://ctp-zip-api.herokuapp.com/zip/' + zipCode;
            const response = await fetch(url);
            console.log(response)
            if(response.status !== 200){
                throw new Error('Invalid ZipCode Entry')
            }
            const data = await response.json();
            this.setState({
                place: data,
                error: false
            })
            document.getElementById('nonValid').innerHTML = 'Valid ZipCode!'
            console.log(data);
        } catch(error){
            console.log(error)
            this.setState({
                error: true
            })
            document.getElementById('nonValid').innerHTML = 'Not a valid ZipCode entry.'
        }
    }

    handleZipChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        this.findZips(value)
    }


    findCities = async (city) => {
        try{
            const url = 'http://ctp-zip-api.herokuapp.com/city/' + city;
            const response = await fetch(url);
            console.log(response)
            if(response.status !== 200){
                throw new Error('Invalid City Entry')
            }
            const data = await response.json();
            this.setState({
                zips: data,
                error: false
            })
            document.getElementById('nonValidCity').innerHTML = 'Valid City!'
            console.log(data);
        } catch(error){
            console.log(error)
            this.setState({
                error: true
            })
            document.getElementById('nonValidCity').innerHTML = 'Not a valid City entry.'
        }
    }

    ConvertCommas(number){
        number.toLocaleString();
    }

    ConvertTextToUpperCase=(A)=>{
        let B = A.toUpperCase() ;
        return B
    }

    handleCityChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        value = this.ConvertTextToUpperCase(value)
        this.findCities(value)
    }


render(){
    return(
        <div>
            <FetchInput handleZipChange = {this.handleZipChange} handleCityChange = {this.handleCityChange}/>
        {
            (<div className='ml'>
                <b>Cities within your ZipCode:</b>
                {this.state.place.map((item, index) =>
                    <div key={index}>
                        City: {item.City} <br></br>
                        State: {item.State}<br></br>
                        Estimated Population: {item.EstimatedPopulation}<br></br>
                        Total Wages: ${item.TotalWages}<br></br>
                        Country: {item.Country}<br></br> <br></br>
                    </div>
                )}
                <br></br>
                <br></br>
                <b>ZipCodes within your City:</b>
                <br></br>
                {this.state.zips.map((item, index) =>
                    <div class='list' key={index}>{item }</div>
                )}
            </div>)
        }
        </div>
        
        
    )
}

   
}

export default FetchInputResult
