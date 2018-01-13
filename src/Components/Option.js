import React from 'react';

const Option = (props) => (
  <div className="Option"> 
    <p className="Option__text">{props.count}.  {props.optionText}</p>
    <button
      className="Button--link"
      onClick={(e) => {
        props.deleteSingleOption(props.optionText)}}><p class="Button--link__remove">Remove</p>
    </button>
  </div>
);

export default Option;