import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
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
\`\`\``,
      expanded: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
    this.toggleEditor = this.toggleEditor.bind(this)
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
  togglePreview() {
    if (this.state.expanded === "editor" || this.state.expanded === "") {
      this.setState ({
        expanded: "preview"
      })
    } else {
      this.setState ({
        expanded: ""
      })
    } 
  }
  toggleEditor() {
    if (this.state.expanded === "preview" || this.state.expanded === "") {
      this.setState ({
        expanded: "editor"
      })
    } else {
      this.setState ({
        expanded: ""
      })
    } 
  }
  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <Editor expanded={this.state.expanded} toggleEditor={this.toggleEditor} markdown={this.state.markdown} handleChange={this.handleChange}  />
            <Preview expanded={this.state.expanded} togglePreview={this.togglePreview} getMarkup={this.getMarkup()} />
          </div>
        </div>
      </section>
    )
  }
}

const Editor = (props) => {

    var classes = (props.expanded === "editor") ? "editor-wrapper column" : (props.expanded === "preview") ? "editor-wrapper hide" : "editor-wrapper column" 

    return (
      <div className={classes}>
        <div className="title">
          <h3>Editor</h3>
          <EditorToggle expanded={props.expanded} toggleExpand={props.toggleEditor}/>
        </div>
        <textarea id="editor" onChange={props.handleChange} value={props.markdown}></textarea>
      </div>
    )
}

const Preview = (props) => {

  var classes = (props.expanded === "preview") ? "preview-wrapper column" : (props.expanded === "editor") ? "preview-wrapper hide" : "preview-wrapper column" 

  return (
    <div className={classes}>
      <div className="title">
        <h3>Preview</h3>
        <PreviewToggle expanded={props.expanded} toggleExpand={props.togglePreview}/>
      </div>
      <div id="preview" dangerouslySetInnerHTML={props.getMarkup}>
      </div>
    </div>
  )
}

// Stateless functional component
const EditorToggle = (props) => {
  if (props.expanded === "editor") {
    return (
      <span className="icon" onClick={props.toggleExpand}>
        <FontAwesomeIcon icon={faCompress} />
      </span>
    )
  } else {
    return (
      <span className="icon" onClick={props.toggleExpand}>
        <FontAwesomeIcon icon={faExpand} />
      </span>
    )
  }
}

// Stateless functional component
const PreviewToggle = (props) => {
  if (props.expanded === "preview") {
    return (
      <span className="icon" onClick={props.toggleExpand}>
        <FontAwesomeIcon icon={faCompress} />
      </span>
    )
  } else {
    return (
      <span className="icon" onClick={props.toggleExpand}>
        <FontAwesomeIcon icon={faExpand} />
      </span>
    )
  }
}

// Using state to toggle an element
class ToggleButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this)

  }

  toggleVisibility() {
    if (this.state.visibility) {
      this.setState({
        visibility: false
      })
    } else {
      this.setState({
        visibility: true
      })
    }
  }

  render() {
    if (this.state.visibility) {
      return (
        <span className="icon"  onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={faCompress} />
        </span>
      );
    } else {
      return (
        <span className="icon"  onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={faExpand} />
        </span>
      );
    }
  }
};

// Using state to toggle an element
class ToggleButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this)

  }

  toggleVisibility() {
    if (this.state.visibility) {
      this.setState({
        visibility: false
      })
    } else {
      this.setState({
        visibility: true
      })
    }
  }

  render() {
    if (this.state.visibility) {
      return (
        <span className="icon"  onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={faCompress} />
        </span>
      );
    } else {
      return (
        <span className="icon"  onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={faExpand} />
        </span>
      );
    }
  }
};



function App() {
  return (
      <MarkdownPreview />
  );
}

export default App;
