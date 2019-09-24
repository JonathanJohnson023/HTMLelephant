import React from 'react';
import './tag.css'
import axios from 'axios';
class CreateTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      styles: [],
      body: "",
      // files: [],
      // previews: []
      parentStyles: []

    }
    this.handleClick = this.handleClick.bind(this);
    this.defaultStyling = this.defaultStyling.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  // ["color", "red"], ["fontSize", "40px"]
  // "<p style=style></p>"
  // style = {{ backgroundImage: `url(${this.props.user.coverPhoto})` }}


    defaultStyling(type) {
      switch (type) {
        case "p":
          return [["fontSize", "55px"], ["color", "purple"], ["fontFamily", "none"]];
        case "img":
          return [["width", "200px"], ["height", "200px"]];
        default:
          return [];
      }
    }

  defaultParentStyling(type) {
      switch(type) {
        case 'p':
          return [['position', 'absolute']]
        default:
          return [];
      }
  }

    

  handleClick(e){
    e.preventDefault();
    let defaultStyles = this.defaultStyling(e.target.value)
    let defaultParentStyling = this.defaultParentStyling(e.target.value)
    this.setState({ styles: defaultStyles})
    this.setState({parentStyles: defaultParentStyling})
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

  // handleFileUpload(e) {
  //   e.preventDefault();
  //   const imgURL = URL.createObjectURL(e.target.files[0]);

  //   let defaultStyles = this.defaultStyling("img");
  //   this.props.uploadSuccess(imgURL);

  //   defaultStyles.push(["src", imgURL]);
  //   this.setState({ styles: defaultStyles })
  //   debugger
  //   this.setState({ type: "img" }, () => this.props.addTag(this.state));
  // }

  handleFileUpload(e) {
    e.preventDefault();
    // const file = URL.createObjectURL(e.target.files[0]);
    let file = e.target.files[0];

    if (this.props.isAuthenticated) {
      const imgObj = new FormData();
      imgObj.append("image", file);
      // imgObj.append("tagId", )
      debugger
      this.props.uploadRequest(imgObj);
    } else {
      file = URL.createObjectURL(file);
      this.props.uploadSuccess(file);
    }
  }

  render() {
    let filePreview = this.props.previews.map(preview => {
      return <div className="preview-img">
          <img src={preview} />
        </div>
    });
      return (
        <div id='dropdown-time'>
          <div id='add-tag-button' onClick={this.pushButton}></div>
          <ul id='create-tag-list' className='closed'>
              <li><button value="p" onClick={(e) => this.handleClick(e)}>Add Text</button></li>
              <li><input type="file" onChange={this.handleFileUpload} />Add Image</li>
              {filePreview}
          </ul>
        </div>
      )
  }

}

export default CreateTag;