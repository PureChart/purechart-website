import React, { useEffect, useState } from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import Markdoc from '@markdoc/markdoc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from './custom-style';

import 'prismjs';
import 'prismjs/themes/prism.css';

import Prism from 'react-prism';

export function Fence({ children, language }) {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {children}
    </SyntaxHighlighter>
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

  const [activeIndex, setActiveIndex] = useState("getting-started");

  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash !== "") {
      let pathArray = hash.split('#');

      if (pathArray.length === 2) {
        setActiveIndex(pathArray[1])
      }
    }
  }, [hash])

  useEffect(() => {
    let path = `../markdown/${activeIndex}.md`;

    console.log(path)

    fetch(path).then((response) => response.text()).then((text) => {
      setMarkdown(text)
    })
  }, [activeIndex])

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

  function navigateToPath(path) {
    //window.location.hash = '#' + path;
    navigate(`#${path}`)
  }

  return (
    <div className='docs-split'>
      <div className='sidebar'>
        <h1 className='padding-left padding-top padding-right centered full-width'>Docs</h1>

        <div className='links'>
          <span className={`first ${activeIndex === 'getting-started' ? "active" : ""}`} onClick={() => navigateToPath('getting-started')}>Getting Started</span>
          
          <span className={`first ${activeIndex === 'types-of-charts' ? "active" : ""}`} onClick={() => navigateToPath('types-of-charts')}>Types of Charts</span>
            <span className='secondary'>| Lollipop</span>
            <span className='secondary'>| Column</span>
            <span className='secondary'>| Bar</span>
        </div>
      </div>

      <div className='content'>
        { parsedMarkdown }
      </div>
    </div>
  );
};

export default App;