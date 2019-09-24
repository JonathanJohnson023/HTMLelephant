import React from 'react';
import './tag.css'
import axios from 'axios';
class CreateTag extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      type: "", 
      styles: [],
      body: "",
      files: [],
      previews: []
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
          return [["fontSize", "21px"], ["color", "purple"], ["fontFamily", "none"]];
        case "h1":
          return [["fontSize", "55px"], ["color", "lightpink"],["fontFamily", "none"]];
        case "image":
          return [["width", "200px"], ["height", "200px"]];  
        default:
          return [];
      }
    }

  handleClick(e){
    e.preventDefault();
    let defaultStyles = this.defaultStyling(e.target.value)
    this.setState({ styles: defaultStyles})
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
    // debugger
    
    // fileReader.onloadend = () => {
    //   const newState =  Object.assign({}, this.state);
    //   newState.previews.push(fileReader.result);
    //   this.setState(newState);
    // };
    // if (file) {
    //   fileReader.readAsDataURL(file);

    // }
    // debugger

    // let defaultStyles = this.defaultStyling("image");
    // this.setState({ styles: defaultStyles })
    // this.setState({ type: "image" }, () => this.props.addTag(this.state));
  }

  render() {
    let filePreview = this.props.previews.map(preview => {
      return <div className="preview-img">
        <img src={preview} />
      </div>
    })
      return (
        <div id='dropdown-time'>
          <div id='add-tag-button' onClick={this.pushButton}></div>
          <ul id='create-tag-list' className='closed'>
              <li><button value="p" onClick={(e) => this.handleClick(e)}>Add Text</button></li>
              <li><button value="h1" onClick={(e) => this.handleClick(e)}>Add Header</button></li>
              <li><input className="inputGroupFile01" type="file" onChange={this.handleFileUpload} />Add Image</li>

            {filePreview}
            
          </ul>
          
        </div>
      )
  }

}

export default CreateTag;