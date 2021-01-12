import React, { Component } from 'react'
import FetchInput from './fetchInput'

class FetchInputResult extends Component {
    
    constructor(){
        super();
        this.state={
            place: [],
            zipCode: "",
            error: false
        }
    }

    async componentDidMount(){
        document.getElementById('nonValid').innerHTML = 'Example: Staten Island is in 10314'
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



render(){
    return(
        <div>
            <FetchInput handleZipChange = {this.handleZipChange} />
        {
            (<div className='ml'>
                {this.state.place.map((item, index) =>
                    <div key={index}>{item.City}</div>
                )}
            </div>)
        }
        </div>
        
        
    )
}

   
}

export default FetchInputResult
