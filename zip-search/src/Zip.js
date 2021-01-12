import React from "react"

class Zip extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  
    componentDidMount() {
        fetch("http://ctp-zip-api.herokuapp.com/zip/10016").then(response => {
            console.log("response", response)
            if (response.status !== 200) {
                throw new Error("MY ERROR MESSAGE");
            }
            return response.json()
        })
            .then(data => {
                console.log("data", data);
            })
            .catch(error => {
                console.log("error", error)
            })
        
        const getData = async () => {
            try {
                let response = await fetch("http://ctp-zip-api.herokuapp.com/zip/10016");
                console.log("response", response);
                if (!response.ok) {
                    throw new Error("MY ERROR MESSAGE");
                }
                let data = await response.json();
                console.log("data", data);
            } catch (error) {
                console.log("My error", error);
            }
        }
        getData()
    }


  
    render() {
      return(
          <div>
              <h1>Zip Search</h1>
              <label>Enter a zip: </label>
              <input></input>
              <button type='submit' onClick={this.componentDidMount}>Search</button>
          </div>
      )

    }
  }

export default Zip