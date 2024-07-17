// code your solution here
function saturdayFun(activity='roller-skate') {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(work='go to the office') {
   return `This Monday, I will ${work}.`
}

function wrapAdjective(visualFlair="*") {
   return function innerWrapAdjective(adjective="special")  {
      return `You are ${visualFlair}${adjective}${visualFlair}!`
   }  
   }

   // const encouragingPromptFunction = wrapAdjective(!!!);