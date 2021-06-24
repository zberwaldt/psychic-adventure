import React from 'react';

type EditorProps = {
  onChange: (...args:any) => any, 
};

const Editor = ({ onChange }: EditorProps) => {
  return (
    <div className="editor">
      <textarea id="editor" spellCheck='false' onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
  );
}

export default Editor;
