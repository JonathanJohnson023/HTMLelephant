import React from 'react';
import EditTag from "./edit_tag_container"

class ParseHTML extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        tagObj: this.props.tagObj,
        editing: false
      }
      this.toggleEdit = this.toggleEdit.bind(this);
    }
  
  parseStyles = () => {
    let styles = {};
    this.state.tagObj.styles.forEach(ele => styles[ele[0]] = ele[1]);
    return styles;
  }
  
  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }
  
  renderTag = () => {
    let styles = this.parseStyles()
    switch (this.state.tagObj.type) {
      case "p":
        return <p style={styles}>{this.state.tagObj.body}</p>
      case "h1":
        return <h1 style={styles}>Add your Header here</h1>
      default:
        return null
    }
  }
  
  render() {
    let editTag;
    if(this.state.editing){
      editTag = <EditTag />
    }else{
      editTag = ""
    }
    return (
      <div onClick={this.toggleEdit}>
        {this.renderTag()}
        {editTag}
      </div>
    )
  } 
}

export default ParseHTML;