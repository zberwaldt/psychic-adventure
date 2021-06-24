import React from 'react';
import parse from 'html-react-parser';
const DOMPurify = require('dompurify');


type PreviewerProps = {
    content?: string
};

const Previewer = ({ content }: PreviewerProps) => {

    let sanitizedHTML = DOMPurify.sanitize(content);

  return (
    <div className="preview">
        {parse(sanitizedHTML)}
    </div>
  );
}

export default Previewer;
