import React from 'react';
import CreateTag from '../tags/create_tag_container';
import ParseHTML from '../tags/parse_html'
import './document.css'
const download = require("downloadjs")

class EditDocument extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      tags: [],

    }
    this.addTag = this.addTag.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
  }

  addTag(tag){
    const tags = this.state.tags
    tags.push(tag);
    this.setState({tags});
  }

  componentDidUpdate(){
    if(this.props.isAuthenticated === true){
      console.log("you can save")
    }
  }

  saveProgress(){
    this.props.saveTagCollection(this.state.tags)
      .then(res => {
        return( 
        this.props.createDocument({title: "title", tags: res.tags})
      )
    })
  }

  htmlDownload() {
    let doc = document.getElementById('hello-there')
    download(doc.innerHTML, "YourElephant.html", "text/html" )
  }

  render(){
    return(
      <div id='edit-test'>
        <CreateTag addTag={this.addTag}/>
          <div id='hello-there'> 
          <button onClick={this.saveProgress}>createDocument Duhh</button>
            {this.state.tags.map((ele,i) => (
              <ParseHTML 
              tagObj={ele}
              key={i}
              index={i}
              editingTag={this.props.editingTag}
              editing={this.props.editing}
              />
            ))}
          </div>
          <button id='download-button' onClick={this.htmlDownload}>Download Your HTML File</button>
          {/* <h1>Hello From Edit</h1>
          <p>this is a little subtitle</p> */}
      </div>
    )
  }

}
export default EditDocument;