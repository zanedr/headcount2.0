function splitter(data) {
  let cleaned = {}

  data.forEach(val => {
    if(cleaned[val.Location]){
      //add stuff
    } else {
      cleaned[val.Location][val.TimeFrame]: [val.Data]
    }
  })
}
