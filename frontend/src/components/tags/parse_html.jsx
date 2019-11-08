import React from 'react';
import EditTag from "./edit_tag_container"
import ContentEditable from 'react-contenteditable'

class ParseHTML extends React.Component{
  constructor(props){
    super(props)
      this.contentEditable = React.createRef();
      this.state = {
        tagObj: this.props.tagObj,
        html: "",
        editing: false,
        bodyEdit: false,
      };
      this.handleColorChange = this.handleColorChange.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      // this.toggleDrag = this.toggleDrag.bind(this);
      // this.handleClick = this.handleClick.bind(this)
      this.handleFontChange = this.handleFontChange.bind(this);
      this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
      this.handleImgWidthChange = this.handleImgWidthChange.bind(this);
      this.handleImgHeightChange = this.handleImgHeightChange.bind(this);
    }

    // componentDidMount(){
    //   const tag = document.getElementById(`${this.props.index}`)
    //   tag.addEventListener("click", (event) => {
    //     if(event.currentTarget.id != this.props.index){
    //       this.setState({editing: false})
    //     }
    //   })
    // }
    
    dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "element")) {
        // if present, the element is where you move the DIV from:
        document.getElementById(elmnt.id + "element").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        // e.preventDefault();
        // calculate the new cursor position:

        let canvas = document.getElementById('hello-there')
        let canLeft = canvas.offsetLeft - 3
        let canRight = canLeft + canvas.offsetWidth - 3
        let canTop = canvas.offsetTop
        
        let eleLeft = elmnt.offsetLeft - pos1
        let eleTop = elmnt.offsetTop - pos2
        let eleRight = eleLeft + elmnt.offsetWidth - pos1


        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        // debugger
        if (eleTop >= canTop)elmnt.style.top = (eleTop) + "px";
        if (eleLeft >= canLeft && eleRight <= canRight) elmnt.style.left = (eleLeft) + "px";

      }
    
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    
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

  parseParentStyles = () => {
    if (this.state.tagObj.parentStyles) {
    let parentStyles = {};
    this.state.tagObj.parentStyles.forEach(ele => parentStyles[ele[0]] = ele[1]);
    return parentStyles;}
    else {
      return {}
    }
  }

  // handleClick(){
  //   debugger
  //   if (!this.state.editing){
  //     this.toggleEdit()
  //   } else {
  //     this.toggleDrag()
  //   }
  // }
  
  toggleEdit() {
    this.setState({ editing: !this.state.editing })
    this.props.editingTag(this.props.index)
    let div = document.getElementById(`${this.props.index}`)
    this.dragElement(div)
  }

  toggleDrag(){
    let div = document.getElementById(`${this.props.index}`)
    this.dragElement(div)
  }

  handleUpdate(event, key){
    let tagClone = Object.assign({}, this.state.tagObj);
    tagClone[key] = event.currentTarget.innerText
    this.setState(
      {tagObj: tagClone, bodyEdit: true}, 
      this.props.updateTag(this.state.tagObj[key], this.props.index, key)
      )
    
  }

  renderTag = () => {
    let styles;
    let tagId
    switch (this.state.tagObj.type) {
      case "p":
        styles = this.parseStyles()
        tagId = this.props.index + 'element'
        let tagBody = this.state.bodyEdit ? this.state.tagObj.body : "Click Here to Change text";
        let finalPain = `<p id=${tagId}>${tagBody}</p>`
        return <ContentEditable id={tagId} innerRef={this.contentEditable} html={finalPain} style={styles} disabled={false} onChange={(e) => this.handleUpdate(e, "body")}/> 

      case "img":
        styles = this.parseStyles()
        tagId = this.props.index + 'element'
        return <img id={tagId} src={this.state.tagObj.imgURL} style={styles}/>
      default:
        return null
    }
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
    return newFontSize
  }



  handleImgWidthChange = e => {

    let newWidth = this.state.tagObj.styles
    for (let i = 0; i < newWidth.length; i++) {
      if (newWidth[i][0] === "width") {
        newWidth[i][1] = e.target.value;
      }
    }
    this.setState({ [this.state.tagObj.styles]: newWidth });
    return newWidth
  }

  handleImgHeightChange = e => {

    let newHeight = this.state.tagObj.styles
    for (let i = 0; i < newHeight.length; i++) {
      if (newHeight[i][0] === "height") {
        newHeight[i][1] = e.target.value;
      }
    }
    this.setState({ [this.state.tagObj.styles]: newHeight });
    return newHeight
  }
  
  render() {
    let parentStyling = this.parseParentStyles();
    let editTag;
    if(this.state.editing){
      editTag = <EditTag 
        tagObj={this.state.tagObj} 
        updateTag={this.props.updateTag}
        index={this.props.index}
        handleChange={this.handleColorChange}
        handleFontChange={this.handleFontChange}
        handleFontSizeChange={this.handleFontSizeChange}
        handleImgWidthChange={this.handleImgWidthChange}
        handleImgHeightChange={this.handleImgHeightChange}
        deleteTag={this.props.deleteTag}
      />
    }else{
      editTag = ""
    }
    let tag = this.renderTag()
    return (
      <div id={this.props.index} onClick={this.toggleEdit} style={parentStyling}>
          {tag}
        <div onClick={e => e.stopPropagation()}>
          {editTag}
        </div>
      </div>
    )
  } 
}

export default ParseHTML;