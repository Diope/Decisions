import React from 'react';

const Option = (props) => (
  <div> 
    {props.optionText}
    <button
      className="Button--link"
      onClick={(e) => {
        props.deleteSingleOption(props.optionText)}}>Remove
    </button>
  </div>
);

export default Option;