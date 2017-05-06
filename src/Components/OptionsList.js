import React from 'react'

function OptionsList ({selectDataSource}){

return(
<select onChange = {(e) =>{selectDataSource(e.target.value)}}>
  <option>{"3rd grade test scores"}</option>
  <option>{'Average  math scores race by ethnicity'}</option>
  <option>{"Eigth graded test scores"}</option>
  <option>{"Average reading scores"}</option>
  <option>{"Average writing scores"}</option>
  <option>{"Highschool graduation rates"}</option>
  <option>{"Kindergarners in full day program"}</option>
  <option>{"Online student enrollment"}</option>
  <option>{"Enrollment by race"}</option>

  <option>{"Remediation in higher education"}</option>
  <option>{"School aged children in poverty"}</option>
  <option>{"Special education"}</option>
</select>
)
}

export default OptionsList
