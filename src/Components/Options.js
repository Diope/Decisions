import React from 'react';

import Option from './Option'

const Options = (props) => (
  <div>
    <button 
      onClick={props.handleDeleteOption}
      className="Button--link">Remove All</button>
    {
        props.optList.map((option) => (
          <Option 
              key={option} 
              optionText={option} 
              deleteSingleOption={props.deleteSingleOption}/> 
          )
        )
    }   
  </div> 
);

export default Options;