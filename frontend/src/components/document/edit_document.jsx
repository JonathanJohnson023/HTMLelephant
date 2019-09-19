import React from 'react';
import CreateTag from '../tags/create_tag_container';
import ParseHTML from '../tags/parse_html'
import './document.css'
import EditTag from '../tags/edit_tag_container';
class EditDocument extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      tags: [],
    }
    this.addTag = this.addTag.bind(this);
  }

  addTag(tag){
    const tags = this.state.tags
    tags.push(tag);
    this.setState({tags});
  }
  
  render(){
    
    return(
      <div id='edit-test'>
        <CreateTag addTag={this.addTag}/>
          <div id='hello-there'> 
            {this.state.tags.map((ele,i) => (
              <ParseHTML 
              tagObj={ele}
              key={i}
              />
            ))}
          </div>
          {/* <h1>Hello From Edit</h1>
          <p>this is a little subtitle</p> */}
      </div>
    )
  }

}
export default EditDocument;