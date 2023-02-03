import React, { useEffect, useState } from 'react';
import Markdoc from '@markdoc/markdoc';

import 'prismjs';
import 'prismjs/themes/prism.css';

import Prism from 'react-prism';

export function Fence({ children, language }) {
  return (
    <Prism key={language} component="pre" className={`language-${language}`}>
      {children}
    </Prism>
  );
}

const fence = {
  render: 'Fence',
  attributes: {
    language: {
      type: String
    }
  }
};

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [parsedMarkdown, setParsedMarkdown] = useState(<></>);

  useEffect(() => {
    let path = "../markdown/getting-started.md";

    fetch(path).then((response) => response.text()).then((text) => {
      setMarkdown(text)
    })
  }, [])

  useEffect(() => {
    const ast = Markdoc.parse(markdown);
    const content = Markdoc.transform(ast, {
      nodes: {
        fence
      }
    });
    const html = Markdoc.renderers.react(content, React, {
      components: {
        Fence
      }
    });

    setParsedMarkdown(html);
  }, [markdown])

  return (
    <div className='docs-split'>
      <div className='sidebar'>
        <h1 className='padding-left padding-top padding-right centered full-width'>Docs</h1>

        <div className='links'>
          <span className='first active'>Getting Started</span>
          
          <span className='first'>Types of Charts</span>
            <span className='secondary'>Lollipop</span>
            <span className='secondary'>Column</span>
            <span className='secondary'>Bar</span>
        </div>
      </div>

      <div className='content'>
        { parsedMarkdown }
      </div>
    </div>
  );
};

export default App;