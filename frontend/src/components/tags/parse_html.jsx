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
      this.handleColorChange = this.handleColorChange.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      this.handleFontChange = this.handleFontChange.bind(this);
      this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    }

    // componentDidMount(){
    //   const tag = document.getElementById(`${this.props.index}`)
    //   tag.addEventListener("click", (event) => {
    //     debugger
    //     if(event.currentTarget.id != this.props.index){
    //       this.setState({editing: false})
    //     }
    //   })
    // }
    
    componentDidUpdate(){
      if(this.state.editing && this.props.editing != this.props.index){
        this.setState({editing: false})
      }
    }

  parseStyles = () => {
    let styles = {};
    this.state.tagObj.styles.forEach(ele => styles[ele[0]] = ele[1]);
    return styles;
  }
  
  toggleEdit() {
    this.setState({ editing: !this.state.editing })
    this.props.editingTag(this.props.index)
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
  }
  
  handleColorChange = (color) => {
    let newColor = this.state.tagObj.styles
    for (let i = 0; i < newColor.length; i++) {
      if (newColor[i][0] === "color") {
        newColor[i][1] = color.hex;
      }
    }
    this.setState({ [this.state.tagObj.styles]: newColor });
  };

  handleFontChange = e => {
    let newFont = this.state.tagObj.styles
    for (let i = 0; i < newFont.length; i++) {
      if (newFont[i][0] === "fontFamily") {
        newFont[i][1] = e.target.value;
      }
    }

    this.setState({ [this.state.tagObj.styles]: newFont });
  }

  handleFontSizeChange = e => {
    let newFontSize = this.state.tagObj.styles
    for (let i = 0; i < newFontSize.length; i++) {
      if (newFontSize[i][0] === "fontSize") {
        newFontSize[i][1] = e.target.value;
      }
    }

    this.setState({ [this.state.tagObj.styles]: newFontSize });
    // debugger
  }
  
  render() {
    let editTag;
    if(this.state.editing){
      editTag = <EditTag 
        tagObj={this.state.tagObj} 
        updateTag={this.updateTag} 
        handleChange={this.handleColorChange}
        handleFontChange={this.handleFontChange}
        handleFontSizeChange={this.handleFontSizeChange}
      />
    }else{
      editTag = ""
    }
    return (
      <div id={this.props.index} onClick={this.toggleEdit}>
          {this.renderTag()}
        <div onClick={e => e.stopPropagation()}>
          {editTag}
        </div>
      </div>
    )
  } 
}

export default ParseHTML;