import React from 'react';

import Option from './Option'

const Options = (props) => {
  return (
     <div>
        <button onClick={props.handleDeleteOption}>Remove All</button>
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
  )
}

export default Options;