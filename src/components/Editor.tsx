import React from 'react';
import './Editor.css';

type EditorProps = {
  value?: string,
  onChange: (...args:any) => any, 
};

const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="editor">
      <textarea id="editor" spellCheck='false' onChange={(e) => onChange(e.target.value)} defaultValue={ value } />
    </div>
  );
}

export default Editor;
