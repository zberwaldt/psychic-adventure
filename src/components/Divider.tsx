import React from 'react';
import './Editor.css';

type EditorProps = {
  value?: string,
  onChange: (...args:any) => any, 
};

const Divider = () => {
  return (
    <div className="divider"></div>
  );
}

export default Divider;
