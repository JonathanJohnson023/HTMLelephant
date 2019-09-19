import React from 'react';
class EditTag extends React.Component {
    constructor(props) {
      super(props);

      this.state={
        type: this.props.tagObj.title, 
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

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.body}
              onChange={this.update('body')}
            />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
}

export default EditTag;