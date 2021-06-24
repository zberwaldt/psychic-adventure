import React from 'react';

type EditorProps = {
  onChange: (...args:any) => any, 
};

const Editor = ({ onChange }: EditorProps) => {
  return (
    <div className="editor">
      <textarea spellCheck='false' onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
  );
}

export default Editor;
