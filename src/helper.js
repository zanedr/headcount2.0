export default class DistrictRepository {
 constructor(data) {
   this.data           = this.splitter(data)
   this.findByName     = this.findByName
   this.findAllMatches = this.findAllMatches
   this.findAverage    =   this.findAverage
   this.compareDistrictAverages =this.compareDistrictAverages
   this.makeNumber    = this.makeNumber
   this.splitter      =this.splitter
 }

 findByName(name) {
   let found = {}
   if(!name) {
     return undefined
   }
   Object.keys(this.data).forEach(val => {
     if(val.toLowerCase() == name.toLowerCase()){
       found.location=val;
       found.data = this.data[val]
       Object.keys(found.data).forEach(year=>{
        found.data[year]==="N/A"?
         found.data[year] = 0:
         found.data[year] =    Number(found.data[year].toFixed(3))

       })
     }
   })
   if(!found.location) {
     return undefined
   } else {
     return found
   }
 }

 findAllMatches(name = null) {
  let found = []
  Object.keys(this.data).forEach((val, index) => {
    if (name === null) {
      found.push({[val]: this.data[val]})
    } else if (val.toLowerCase().includes(name.toLowerCase())){
      found.push({[val]: this.data[val]})
    }
  })
  return found
}

findAverage(name) {
  let leveller = this.findByName(name)
  let divider = Object.keys(leveller.data).length
  let total = Object.keys(leveller.data).reduce((acc, val) => {
    return acc += leveller.data[val]
  }, 0)
  return this.makeNumber((total / divider).toFixed(3))
}

compareDistrictAverages(nameOne, nameTwo) {
  let first = this.findAverage(nameOne)
  let second = this.findAverage(nameTwo)
  return {[nameOne.toUpperCase()]: first,
          [nameTwo.toUpperCase()]: second,
          'compared': this.makeNumber((first / second).toFixed(3))}
}

makeNumber(input) {
  return input / 1
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
