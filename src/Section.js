import React from 'react';

const Section = ({children,backgroundUrl}) =>{
  return <div className='section' style={{backgroundImage: `url(${backgroundUrl})`}}>{children}</div>;
}

export default Section;
