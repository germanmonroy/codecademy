let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000
}

if (age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am!`)
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am!`)
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm!`)
} else {
  console.log('Runners who are 18 years old and registered early should see the registration desk.')
  console.log('Runners who are 18 years old and did NOT register early should see the registration desk.')
}
