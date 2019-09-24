import React from 'react';
import { CirclePicker } from 'react-color';

class EditTag extends React.Component {
    constructor(props) {
      super(props);

      this.state={
        type: this.props.tagObj.type, 
        styles: this.props.tagObj.styles,
        body: this.props.tagObj.body,
        parentStyles: this.props.tagObj.parentStyles
      }
      this.handleBodyUpdate = this.handleBodyUpdate.bind(this);
    }

    

    update(theType) {
      return (e) => {
          this.setState({ [theType]: e.target.value });
      };
    }

    handleBodyUpdate(event){
      this.setState({body: event.target.value})
      this.props.updateTagBody(event, this.props.index)
    }

    sliderWork() {
      console.log('Howdy Partner!') 
    }


    // componentDidUpdate(){
    //   this.props.updateTag(this.state)
    // } 

    render() {
      let TE = '<Text Editor/>'
      

      if (this.state.type === 'img') {
        return (
         <div> 
          <div id='edit-tag-form'>
            <div>
            <input
              type="range"
              min="100"
              max="800"
              id="img-width-slider"
              onChange={this.props.handleImgWidthChange}
            />
            <input
              type="range"
              min="100"
              max="800"
              id="img-height-slider"
              onChange={this.props.handleImgHeightChange}
            />
          </div>
          <button id='delete-button' onClick={() => this.props.deleteTag(this.props.index)}>DELETE</button>
        </div>
      ) 
      } else {
        return (
          <div id='edit-tag-form'>
            <form>
              <h1 id='edit-tag-h1'>{TE}</h1>
              <div id='color-picker' className="edit-tag-input">
                <CirclePicker
                  color={this.state.styles.filter(ele => ele[0] === "color")[0][1]}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='edit-tag-input' id='text-align-dropdown'>
              <p>textAlign=</p>  <select name="text-align" >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
              <div className='edit-tag-input'>
              <p>body=</p> <input
                  type="textarea"
                  id='tag-textarea'
                  placeholder='Add Your Text Here'
                  value={this.state.body}
                  onChange={this.handleBodyUpdate}
                />
              </div>
              <div  className='edit-tag-input'>
                <div action="">
                <p>font=</p> <select name="fonts" id="font-dropdown" onChange={this.props.handleFontChange}>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Arial">Arial</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Gadget">Gadget</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="cursive">Cursive</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Geneva">Geneva</option>
                    <option value="Courier">Courier</option>
                    <option value="monospace">monospace</option>
                  </select>
                </div>
              </div>
            </form>
              <button onClick={() => this.props.deleteTag(this.props.index)}>DELETE</button>
            <div  className='edit-tag-input'>
              <input
                type="range"
                min="8"
                max="100"
                className="slider"
                name="slider"
                id="font-size-slider"
                onChange={this.props.handleFontSizeChange}
              />
              <small>
                {this.state.styles.filter(ele => ele[0] === "fontSize")[0][1]}
                {/* {this.props.tagObj.styles.filter(ele => ele[0] === "fontSize")[0][1]} */}
              </small>
              {/* styles = [["font-family", "sans"], ["font-size", "20px"],
                  ["color", "red"]] */}
              {/* styles.filter(ele => ele[0] === "font-size")[0][1] */}
            </div>
            <input type="submit" id='delete-button' value="Delete Element" />
          </div>
        );
      }
  }
}

export default EditTag;