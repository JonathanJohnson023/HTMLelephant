import React from 'react';
import EditTag from "./edit_tag_container"

class ParseHTML extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        tagObj: this.props.tagObj,
        editing: false
      };
      this.defaultStyling = this.defaultStyling.bind(this);
      this.state.tagObj.styles = this.defaultStyling();
      this.updateTag = this.updateTag.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);

    }
  
  parseStyles = () => {
    let styles = {};
    this.state.tagObj.styles.forEach(ele => styles[ele[0]] = ele[1]);
    return styles;
  }
  
  toggleEdit() {
    this.setState({ editing: !this.state.editing })
    let container = document.getElementById('edit-form-container')
    if (container.classList.value === 'edit-open') {
      container.classList.remove('edit-open')
      container.classList.add('edit-closed')
    }
    else {
      container.classList.add('edit-open')
      container.classList.remove('edit-closed')
    }
  }

  defaultStyling() {
    switch (this.state.tagObj.type) {
      case "p":
        return [["fontSize", "21px"], ["color", "purple"], ["fontFamily", "none"]];
      case "h1":
        return [["fontSize", "55px"], ["color", "lightpink"],["fontFamily", "none"]];
      default:
        return [];
    }
  }
  
  renderTag = () => {
    let styles;
    switch (this.state.tagObj.type) {
      case "p":
        styles = this.parseStyles()
        return <p style={styles}>{this.state.tagObj.body ? this.state.tagObj.body : "Click Here to Change text"}</p>
      case "h1":
        styles = this.parseStyles()
        return <h1 style={styles}>{this.state.tagObj.body ? this.state.tagObj.body : "Add your Header here"}</h1>
      default:
        return null
    }
  }

  updateTag(tag){
    this.setState({tagObj: tag})
    this.props.toggleEdit();
  }
  
  handleChange = (color) => {
    let newColor = this.state.tagObj.styles
    for (let i = 0; i < newColor.length; i++) {
      if (newColor[i][0] === "color") {
        newColor[i][1] = color.hex;
      }
    }
    this.setState({ [this.state.tagObj.styles]: newColor });
  };
  
  render() {
    let editTag;
    if(this.state.editing){
      editTag = <EditTag tagObj={this.state.tagObj} updateTag={this.updateTag} handleChange={this.handleChange}/>
    }else{
      editTag = ""
    }
    return (
      <div>
          <div className="on-click-listiner" onClick={this.toggleEdit}>
            {this.renderTag()}
          </div>
        <div id="edit-form-container" className='edit-closed' onClick={this.toggleEdit}>
          <div className="stop-propy-boy" onClick={e => e.stopPropagation()}>
            {editTag}
          </div>
        </div>
      </div>
    )
  } 
}

export default ParseHTML;