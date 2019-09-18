import React from 'react';

export default ({tagObj}) => {
  let display;

  const parseStyles = () => {
    let styles = {};
    tagObj.styles.forEach(ele => styles[ele[0]] = ele[1]);
    return styles;
  }
  
  const renderTag = () => {
    let styles = parseStyles()
    switch (tagObj.type) {
      case "p":
        return <p contentEditable='true' style={styles}>{tagObj.body}</p>
      case "h1":
        return <h1 contentEditable='true' style={styles}>Add your Header here</h1>
      default:
        return null
    }
  }
  
    display = renderTag()
    return(
      <div>
        {display}
      </div>
    )
  
}