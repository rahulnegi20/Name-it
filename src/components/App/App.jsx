import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/Search';
import Results from '../Results/Results';


const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
   
    state = {
        headerText: 'Name It',
        headerExpanded : true,
        suggestedNames: [],  
}

handleInputChange = (inputText) => {
  // console.log(inputText);
    this.setState({ 
        headerExpanded: !inputText ? true : false,
        suggestedNames: inputText ? name(inputText) : [],
     });
}
   
   
    render () {
        //console.log(name('new'))
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.suggestedNames} />
            </div>
        );

    }
}

export default App;

