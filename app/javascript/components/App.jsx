import React, { useEffect, useState } from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import Markdoc from '@markdoc/markdoc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from './custom-style';

import 'prismjs';
import 'prismjs/themes/prism.css';

import Prism from 'react-prism';
import First from './elements/FirstLink';
import Second from './elements/SecondLink';

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
    console.log("DEBUG - Navigate called in parent.")
    navigate(`#${path}`)
  }

  return (
    <div className='docs-split'>
      <div className='sidebar'>
        <div className='logo-container'><img src='images/PureChartWhite.png'/></div>

        <div className='links padding-top'>
          <First title="Getting Started" path="getting-started" navigateToPath={navigateToPath} activeIndex={activeIndex}></First>
          
          <First title="Types of Charts" path="types-of-charts" navigateToPath={navigateToPath} activeIndex={activeIndex}></First>
            <Second title="Lollipop" path="types-of-charts/lollipop" navigateToPath={navigateToPath} activeIndex={activeIndex}></Second>
        </div>
      </div>

      <div className='content'>
        { parsedMarkdown }
      </div>
    </div>
  );
};

export default App;