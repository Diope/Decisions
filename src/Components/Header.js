import React from 'react';

const Header = (props) => (
     <div className="Header">
      <div className="Container">
        <h1 className="Header__title">{props.title}</h1>
        {props.subtitle && <h2 className="Header__subtitle">{props.subtitle}</h2>}
      </div> 
     </div>
  );

export default Header;