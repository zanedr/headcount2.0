export default class DistrictRepository {
  constructor(data) {
    this.data = this.splitter(data)
  }

  splitter(data) {
    let empty = {}
    data.forEach(val => {
      let { Location, TimeFrame, Data } = val
      if(!empty[Location]){
        empty[Location] = {[TimeFrame]: Data}
      } else {
        let temp = {[TimeFrame]: Data}
        empty[Location] = Object.assign(empty[Location], temp)
      }
    })
    return empty
  }
}
