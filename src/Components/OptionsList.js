import React from 'react'

function OptionsList ({selectDataSource}){

  return (
    <select onChange={(e) =>{selectDataSource(e.target.value)}}>
      <option>{'Average  math scores race by ethnicity'}</option>
      <option>{"Eigth graded test scores"}</option>
      <option>{"Average reading scores"}</option>
      <option>{"Average writing scores"}</option>
      <option>{"Highschool graduation rates"}</option>
      <option selected={true}>{"Kindergarners in full day program"}</option>
      <option>{"Remediation in higher education"}</option>
      <option>{"Special education"}</option>
    </select>
  )
}

export default OptionsList
