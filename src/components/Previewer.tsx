import React from 'react';
import './Previewer.css';

type PreviewerProps = {
    content?: any
};

const Previewer = ({ content }: PreviewerProps) => {

  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: content }} />
  );

}

export default Previewer;
