import React from 'react';
import marked from 'marked';
import './App.css';

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: this.getMarkdownText("")
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      markdown: this.getMarkdownText(e.target.value)
    })
  }
  getMarkdownText(markdown) {
    var rawMarkup = marked(markdown,{sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return(
      <div className="markdown-preview-wrapper">
        <div className="editor-wrapper">
          <textarea id="editor" onChange={this.handleChange}></textarea>
        </div>
        <div className="preview-wrapper">
          <div id="preview" dangerouslySetInnerHTML={this.state.markdown}>
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
