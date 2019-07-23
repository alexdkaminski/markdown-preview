import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './App.css';

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 
      `# React Markdown Previewer
## Free Code Camp Front End Library Project
[FreeCodeCamp.com](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n
Inline \`code\`
\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
\`\`\`
`
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }
  getMarkup() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      breaks: true
    });
    var rawMarkup = marked(this.state.markdown);
    return { __html: rawMarkup };
  }
  render() {
    return(
      <div className="markdown-preview-wrapper">
        <div className="editor-wrapper">
          <textarea id="editor" onChange={this.handleChange} value={this.state.markdown}></textarea>
        </div>
        <div className="preview-wrapper">
          <div id="preview" dangerouslySetInnerHTML={this.getMarkup()}>
          </div>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <MarkdownPreview />
    </div>
  );
}

export default App;
