import React from 'react';
import parse from 'html-react-parser';

type PreviewerProps = {
    content?: any
};

const Previewer = ({ content }: PreviewerProps) => {

  let parsed = parse(content);

  return (
    <div id="preview" className="preview">
      { parsed }
    </div>
  )

}

export default Previewer;
