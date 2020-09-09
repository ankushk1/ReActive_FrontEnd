import React from 'react';
import Menu from './Menu';
 
const Base = ({
  title = 'My Title',
  description = 'My desription',
  className = 'bg-dark text-pink p-4',
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-light text-black text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  </div>

  
);

export default Base;
