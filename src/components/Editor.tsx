import React from 'react';

type EditorProps = {
  value?: string,
  onChange: (...args:any) => any, 
};

const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="editor">
      <textarea id="editor" spellCheck='false' onChange={(e) => onChange(e.target.value)} value={ value }></textarea>
    </div>
  );
}

export default Editor;
