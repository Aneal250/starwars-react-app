import React from 'react';
import User from './User'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            characters: []
        }
    }

    componentWillMount(){
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => {
            this.setState({
                characters: response.results
            })
        })
    }

   
    render() {
        return (
            <div id="App">
                <div className="container">
                    <div className="row mt-5">
                        {this.state.characters.map((character, i) => (
                            <div className="col-sm-6 col-md-4 col-lg-3"  key={i}>
                                <User character={character} />
                            </div>
                        ))}
                    </div>

                    <div className="row">

                    </div>
                </div>
                
            </div>
        ); 
    }
}

export default App;

