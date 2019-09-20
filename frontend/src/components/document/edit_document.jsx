import React from 'react';
import CreateTag from '../tags/create_tag_container';
import ParseHTML from '../tags/parse_html'
import './document.css'
const download = require("downloadjs")

class EditDocument extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Help",
      tags: this.props.tags,
    }
    this.addTag = this.addTag.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
  }

  componentDidMount(){
    const documentId = this.props.match.params.id
    if(documentId){
      this.props.fetchDocument(documentId).then(doc => {
        this.props.fetchDocumentTags(documentId).then(payload => {
          this.setState({tags: Object.values(payload.tags)})
        })
      })
    }
  }

  addTag(tag){
    const tags = this.state.tags.slice()
    tags.push(tag);
    this.setState({tags});
  }


  saveProgress(){
    if(this.props.isAuthenticated === true){
      if(this.props.document === undefined){
        this.props.createDocument({title: this.state.title})
          .then(payload => {
            const docId = payload.document._id
            const tags = this.state.tags.map((tag) => {
              tag.documentId = docId
              return tag
            })
             this.props.saveTagCollection(tags).then(() => {
              this.props.history.push(`/edit/${docId}`)
              })
          })
      } else {
        this.props.editDocument({id: this.props.document._id, title: this.state.title })
      }
    } else {
      this.props.addTags(this.state.tags)
      this.props.addNewDocument({title: this.state.title})
      this.props.openModal("login")
    }
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
          <div id='download-button' onClick={this.htmlDownload}></div>
          {/* <h1>Hello From Edit</h1>
          <p>this is a little subtitle</p> */}
      </div>
    )
  }

}
export default EditDocument;