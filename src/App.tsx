import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import dedent from 'dedent-js';
const marked = require('marked');
const DOMPurify = require('dompurify');

marked.setOptions({
  gfm: true,
  xhtml: true,
  breaks: true
});

function App() {

  let initialMarkdown = dedent`# Psychic Adeventure
## A React Markdown Editor

<div align="center">
![test](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhardboilednews.com%2Fwp-content%2Fuploads%2F2017%2F10%2FPsychic.jpg&f=1&nofb=1)
</div>

Reasons to try:
* It's **cool**!
* It's made in react.

To learn more check out the [repo](https://github.com/zberwaldt/psychic-adventure)

Behind the scenes Psychic Adventure uses the \`marked\` node library
\`\`\`
  const test = "Here is a test code block"
\`\`\`

> Psychic Adventure is awesome

- Some Guy, 2021
`;

  const [markdown, setMarkdown] = useState<string>(initialMarkdown);
  const [html, setHTML] = useState(DOMPurify.sanitize(marked(initialMarkdown)));

  useEffect(() => {
    let transformed = marked(markdown); 
    setHTML(transformed);   
  }, [markdown]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Psychic Adventure</h1>
      </header>
      <div id="psychic-adventure">
        <Editor value={ markdown } onChange={setMarkdown}/>
        <Previewer content={ html }/>
      </div>
    </div>
  );
}

export default App;
