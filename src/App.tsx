import React, { useState } from 'react';
import Editor from './components/Editor';

function App() {

  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header"></header>
      <Editor onChange={setMarkdown}/>
      <textarea disabled value={ markdown }></textarea>
    </div>
  );
}

export default App;
