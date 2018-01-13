import React, {Component} from 'react';

class AddOptions extends React.Component {
  constructor(props) {
     super(props);
     this.handleAddOption = this.handleAddOption.bind(this);
     this.state = {
        error: undefined
     }
  }

  handleAddOption(e) {
     e.preventDefault();

     const option = e.target.elements.option.value.trim();
     const err = this.props.handleAddOption(option);

     this.setState(() => ({error:err}));

     if (!err) {
        e.target.elements.option.value = '';
     }
  }

  render () {
     return(
        <div>
           {this.state.error && <p className="Add-option--error">{this.state.error}</p>}
           <form className="Add-option--form" onSubmit={this.handleAddOption}>
              <input className="Add-option__input" type="text" name="option" />
              <button className="Button">Add Option</button>
           </form>
        </div>
     )
  }
}

export default AddOptions;