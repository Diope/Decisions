import React from 'react';

const Action = (props) => (
     <div>
        <button 
            className="Big-button"
              onClick={props.pickOption} 
              disabled={!props.hasOptions}>
              What Should I do?
        </button>
     </div>
  );

export default Action;