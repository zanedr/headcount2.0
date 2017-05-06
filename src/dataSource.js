import avgRaceMath from '../data/average_race_ethnicity_math_scores.js'

import thirdGrade from '../data/3rd_grade_tests.js'

import eighthGrade from '../data/8th_grade_test_scores.js'

import kinderData from '../data/kindergartners_in_full_day_program.js'

import avgRaceReading from '../data/average_race_ethnicity_reading_scores.js'

import avgRaceWriting from '../data/average_race_ethnicity_writing_scores.js'

// import dropoutByRace from '../data/dropout_rates_by_race_and_ethnicity.js'

import highschoolGradRate from '../data/high_school_graduation_rates.js'

// import medianHouseIncome from '../data/median_household_income.js'

import onlineEnroll      from '../data/online_pupil_enrollment.js'

import enrollByRace  from '../data/pupil_enrollment_by_race_ethnicity.js'
//
// import enroll      from '../data/pupil_enrollment.js'

import remediationHigh from '../data/remediation_in_higher_education.js'

import childrenInPov from '../data/school_aged_children_in_poverty.js'

import specialEducation from '../data/special_education.js'

// import freeReducedLuch from '../data/students_qualifying_for_free_or_reduced_price_lunch.js'

// import titleI    from '../data/students_qualifying_for_free_or_reduced_price_lunch.js'

function dataSource(input){
    switch(input){

      case "3rd grade test scores":{
        return thirdGrade
      }

      case 'Average  math scores race by ethnicity':{

        return avgRaceMath
      }

      case "Eigth graded test scores":{
        return eighthGrade
      }

      case 'Average reading scores':{
        return avgRaceReading
      }

      case 'Average writing scores':{
        return avgRaceWriting
      }

      // case 'dropoutByRace':{
      //   return dropoutByRace
      // }

      case 'Highschool graduation rates':{
        return highschoolGradRate
      }

      case 'Kindergarners in full day program':{
        return kinderData
      }

      // case 'Median house income':{
      //   return medianHouseIncome
      // }

      case 'Online student enrollment':{
        return onlineEnroll
      }

      case 'Enrollment by race':{
        return enrollByRace
      }



      case 'Remediation in higher education':{
        return remediationHigh
      }

      case 'School aged children in poverty':{
        return childrenInPov
      }

      case 'Special education':{
        return specialEducation
      }

      // case 'freeReducedLuch':{
      //   return freeReducedLuch
      // }

      // case 'titleI':{
      //   return titleI
      // }

      default:
      return kinderData
      }


  }



export default dataSource
