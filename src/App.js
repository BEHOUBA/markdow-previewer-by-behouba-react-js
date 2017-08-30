import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown : ""
    }
    this.renderFunction = this.renderFunction.bind(this);
  }

  renderFunction(event){
    this.setState({markdown: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div id="input-field">
          <textarea cols="55" rows="30"  onChange={this.renderFunction} >

          </textarea>
        </div>
        <div id="result-field">
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown) }} />
        </div>
      </div>
    );
  }
}

export default App;
