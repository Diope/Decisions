import React from 'react';

import Option from './Option'

const Options = (props) => (
  <div>
    <div className="Widget-header">
      <h3 className="Widget-header__title">Your Options</h3>
      <button 
        onClick={props.handleDeleteOption}
        className="Button--link"
      >
        Remove All
      </button>
    </div>
      {
        props.optList.length === 0 && <p class="Widget__message">Please add an option to get started!</p>
      }
    {
      props.optList.map((option, index) => (
        <Option 
            count={index + 1}
            key={option} 
            optionText={option} 
            deleteSingleOption={props.deleteSingleOption}/> 
        )
      )
    }   
  </div> 
);

export default Options;