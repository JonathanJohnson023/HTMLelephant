export const tagSelector = (tags = [], doc, isAuth) => {
  if(doc === undefined){
    return []
  }
  if (isAuth){
    const selected = []
    tags.forEach(ele => {
      if(ele.documentId === doc._id){
        selected.push(ele)
      }
    })
    return selected
  } else{
    return tags
  }
}