import React from 'react';
import './tag.css'
class CreateTag extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      type: "", 
      styles: [],
      body: "",
    }
    this.handleClick = this.handleClick.bind(this);
    
  }  
  // ["color", "red"], ["fontSize", "40px"]
  // "<p style=style></p>"
    // style = {{ backgroundImage: `url(${this.props.user.coverPhoto})` }}

  handleClick(e){
    e.preventDefault();
    this.setState({ type: e.target.value}, () => this.props.addTag(this.state));
  };

  render() {
      return (
        <div id='add-tag-button'>
            <ul id='create-tag-list'>
              <li><button value="p" onClick={(e) => this.handleClick(e)}>Create p</button></li>
              <li><button value="h1" onClick={(e) => this.handleClick(e)}>Create h1</button></li>
            </ul>
        </div>
      )
  }

}

export default CreateTag;