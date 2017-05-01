export default class DistrictRepository {
 constructor(data) {
   this.data = this.splitter(data)
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
         found.data[year] =  Number(found.data[year].toFixed(3))
       })
     }
   })
   if(!found.location) {
     return undefined
   } else {
     return found
   }
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
