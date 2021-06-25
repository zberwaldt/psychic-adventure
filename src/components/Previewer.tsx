import React from 'react';
import parse from 'html-react-parser';
import './Previewer.css';
type PreviewerProps = {
    content?: any
};

const Previewer = ({ content }: PreviewerProps) => {

  let parsed = parse(content);

  return (
    <div id="preview">
      { parsed }
    </div>
  )

}

export default Previewer;
