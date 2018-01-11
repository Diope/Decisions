import React from 'react';

import Header from './Header';
import AddOptions from './AddOptions';
import Option from './Option';
import Options from './Options';
import Action from './Action';

class DecisionApp extends React.Component {
  constructor(props) {
     super(props);
     this.deleteOptionHandler = this.deleteOptionHandler.bind(this);
     this.pickOptionHandler = this.pickOptionHandler.bind(this);
     this.addOptionHandler = this.addOptionHandler.bind(this);
     this.deleteSingleOptionHandler = this.deleteSingleOptionHandler.bind(this);

     this.state = {
        options: props.options
     }
  }

  componentDidMount() {
     try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
     } catch (e) {
        if (options) {
           this.setState(() => ({ options}));
        }
     }
     console.log("fetching");
  }

  componentDidUpdate(prevProp, prevState) {
     if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
     } 
  }

  componentWillUnmount() {
     console.log('will unmountu!');
  }

  deleteSingleOptionHandler(optionToRemove) {
     this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
           return optionToRemove !== option;
        })
     }))
  }

  deleteOptionHandler () {
     this.setState (() => ({options: []}));
  }

  pickOptionHandler () {
     const randNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randNum];
     alert(option);
     console.log(option);
  }

  addOptionHandler(option) {
     if (!option) {
        return 'Enter valid value';
     } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
     }

     this.setState((prevState) => {
        return {
           options: prevState.options.concat([option])
        }
     })
  }

  render () {
     const title = "Decisions, Decisions";
     const subtitle = "Take the guesswork out of making life decisions!";

     return (
        <div>
           <Header title={title} subtitle={subtitle}/>
           <Action 
              hasOptions={this.state.options.length > 0}
              pickOption={this.pickOptionHandler}
           />
           <Options 
              optList={this.state.options}
              handleDeleteOption={this.deleteOptionHandler}
              deleteSingleOption={this.deleteSingleOptionHandler} />
           <AddOptions 
              handleAddOption={this.addOptionHandler}/>
        </div>
     )
  }
}

DecisionApp.defaultProps = {
  options: []
}

export default DecisionApp;