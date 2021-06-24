import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
const marked = require('marked');

function App() {

  const [markdown, setMarkdown] = useState<string>('');
  const [html, setHTML] = useState('');

  useEffect(() => {
    let transformed = marked(markdown); 
    setHTML(transformed);   
  }, [markdown]);

  console.log(markdown);
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <Editor onChange={setMarkdown}/>
      <Previewer content={ html } />
    </div>
  );
}

export default App;
