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

  pushButton() {
    let button = document.getElementById('add-tag-button');
    let list = document.getElementById('create-tag-list')
    let east = document.getElementsByClassName('east-side')[0]
    let navButtons = document.getElementsByClassName('btn')
    if (button.classList.value === 'turned') {
      button.classList.remove('turned')
      list.classList.remove('open')
      list.classList.add('closed')
      east.classList.remove('east-compact')
      for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove('btn-bye')
      }
    }
    else {
      button.classList.add('turned')
      list.classList.add('open')
      list.classList.remove('closed')
      east.classList.add('east-compact')
      for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.add('btn-bye')
      }
    }
  }

  render() {
      return (
        <div id='dropdown-time'>
          <div id='add-tag-button' onClick={this.pushButton}></div>
          <ul id='create-tag-list' className='closed'>
              <li><button value="p" onClick={(e) => this.handleClick(e)}>Add Text</button></li>
              <li><button value="h1" onClick={(e) => this.handleClick(e)}>Add Header</button></li>
          </ul>
          
        </div>
      )
  }

}

export default CreateTag;