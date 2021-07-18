import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/Search';


class App extends React.Component {
   
    state = {
        headerText: 'Name It',
        headerExpanded : true,
}

handleInputChange = (inputText) => {
  // console.log(inputText);
    this.setState({ headerExpanded: !inputText ? true : false });
}
   
   
    render () {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        );

    }
}

export default App;

