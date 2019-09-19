import React from 'react';
import './tag.css'
class CreateTag extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      type: "", 
      styles: [],
      body: "Test Testy",
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

  pushButton() {
    let button = document.getElementById('add-tag-button');
    let list = document.getElementById('create-tag-list')
    if (button.classList.value === 'turned') {
      button.classList.remove('turned')
      list.classList.remove('open')
      list.classList.add('closed')
    }
    else {
      button.classList.add('turned')
      list.classList.add('open')
      list.classList.remove('closed')
    }
  }

  render() {
      return (
        <div id='dropdown-time'>
          <div id='add-tag-button' onClick={this.pushButton}></div>
          <ul id='create-tag-list' className='closed'>
              <li><button value="p" onClick={(e) => this.handleClick(e)}>Create p</button></li>
              <li><button value="h1" onClick={(e) => this.handleClick(e)}>Create h1</button></li>
          </ul>
          
        </div>
      )
  }

}

export default CreateTag;