class DecisionApp extends React.Component {
   render () {
      const title = "Decisions, Decisions";
      const subtitle = "Take the guesswork out of making life decisions!";
      const options = ["Tory Lanez", "Drake", "Jazz Cartier"];

      return (
         <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options optList={options}/>
            <AddOptions />
         </div>
      )
   }
}

class Header extends React.Component {
   render () {
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
         </div>
      )
   }
}

class Action extends React.Component {

   alertHandler() {
      alert('Test');
   }

   render() {
      return (
         <div>
            <button onClick={this.alertHandler}>What Should I do?</button>
         </div>
      )
   }
}


class Options extends React.Component {

   removeAllHandler () {
      alert('removed');
   }

   render () {

      return(
         <div>
         <button onClick={this.removeAllHandler}>Remove All</button>
            {
               this.props.optList.map((option) => <Option key={option} optionText={option} /> )
            }
            
         </div>
         
      )
   }
}

class Option extends React.Component {
   render () {
      return(
         <div>
            {this.props.optionText}
         </div>
      )
   }
}

class AddOptions extends React.Component {
   addOptionHandler(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();

      if (option) {
         alert(option);
      }
   }

   render () {
      return(
         <div>
            <form onSubmit={this.addOptionHandler}>
               <input type="text" name="option" />
               <button>Add Option</button>
            </form>
         </div>
      )
   }
}


ReactDOM.render(<DecisionApp />, document.getElementById('app'));