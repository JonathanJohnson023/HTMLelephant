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
    this.updateTagBody = this.updateTagBody.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
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
    tag.fakeId = Math.floor(Math.random()*10001)
    tags.push(tag);
    this.setState({tags});
  }

  updateTagBody(event, index){
    const tagsArray = this.state.tags.slice()
    tagsArray[index].body = event.target.value
    this.setState({tags: tagsArray})
  }

  deleteTag(index){
    const tagsArray = this.state.tags.slice();
    if(tagsArray[index]._id){
      this.props.deleteTag(tagsArray[index]._id, index).then(tagsArray.splice(index, 1))
    } else {
      tagsArray.splice(index, 1)
    }
    this.setState({tags: tagsArray})
  }

  saveProgress(){
    if(this.props.isAuthenticated === true){
      if(this.props.document === undefined || this.props.match.path === "/" ){
        this.props.createDocument({title: this.state.title}).then(payload => {
            const docId = payload.document._id
            const tags = this.state.tags.map((tag) => {
              tag.documentId = docId
              return tag
            })
             this.props.saveTagCollection(tags).then((payload) => {
                this.props.history.push(`/edit/${docId}`)
                this.setState({tags: payload.tags})
              })
          })
      } else {
        const tags = this.state.tags.filter((tag) => {
          if(!tag._id){
            tag.documentId = this.props.document._id
            return tag
          }
        })
        this.props.editDocument({id: this.props.document._id, title: this.state.title })
        this.props.saveTagCollection(tags).then((payload) => {
            this.setState({tags: this.props.tags})
          })
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
          <button id='save-button' onClick={this.saveProgress}></button>
            {this.state.tags.map((ele,i) => (
              <ParseHTML 
              tagObj={ele}
              key={ele.fakeId}
              index={i}
              editingTag={this.props.editingTag}
              editing={this.props.editing}
              updateTagBody={this.updateTagBody}
              deleteTag={this.deleteTag}
              />
            ))}
          </div>
          <button id='download-button' onClick={this.htmlDownload}></button>
      </div>
    )
  }

}
export default EditDocument;