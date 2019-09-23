import React from 'react';
import { CirclePicker } from 'react-color';

class EditTag extends React.Component {
    constructor(props) {
      super(props);

      this.state={
        type: this.props.tagObj.type, 
        styles: this.props.tagObj.styles,
        body: this.props.tagObj.body,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(theType) {
      return (e) => {
          this.setState({ [theType]: e.target.value });
      };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTag(this.state)
    };

    sliderWork() {
      console.log('Howdy Partner!') 
    }


    componentDidUpdate(){
      this.props.updateTag(this.state)
    } 

    render() {
      return (
        <div id='edit-tag-form'>
          <form onSubmit={this.handleSubmit}>
            <h1 id='edit-tag-h1'>Text Editor</h1>
            <div id='color-picker' className="edit-tag-input">
              <CirclePicker
                color={this.state.styles.filter(ele => ele[0] === "color")[0][1]}
                onChange={this.props.handleChange}
              />
            </div>
            <div className='edit-tag-input'>
            Text Align:  <select name="text-align">
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
              <br></br>
              Body: <input
                type="textarea"
                placeholder='Add Your Text Here'
                value={this.state.body}
                onChange={this.update("body")}
              />
            </div>
            <div  className='edit-tag-input'>
              <div action="">
                Font: <select name="fonts" id="" onChange={this.props.handleFontChange}>
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

            <input type="submit" value="" />
          </form>
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
              {/* {this.props.tagObj.styles.filter(ele => ele[0] === "fontSize")[0][1]} */}
            </small>
            {/* styles = [["font-family", "sans"], ["font-size", "20px"],
                ["color", "red"]] */}
            {/* styles.filter(ele => ele[0] === "font-size")[0][1] */}
          </div>
        </div>
      );
    }
}

export default EditTag;