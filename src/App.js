import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import './App.scss';

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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="editor-wrapper column">
              <div className="title">
                <h3>Editor</h3>
                <i>Icon</i>
              </div>
              <textarea id="editor" onChange={this.handleChange} value={this.state.markdown}></textarea>
            </div>
            <div className="preview-wrapper column">
            <div className="title">
              <h3>Preview</h3>
              <i>Icon</i>
            </div>
              <div id="preview" dangerouslySetInnerHTML={this.getMarkup()}>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function App() {
  return (
      <MarkdownPreview />
  );
}

export default App;
