// ITERATION 1

// Suspects Array
let suspect1 = {
  firstName: "Maia",
  lastName: "LastName1",
  occupation: "Student",
  age: 28,
  description: "Freckles, long brown hair, green eyes",
  image: "Image of Maia",
  color: "Red"
}
let suspect2 = {
  firstName: "Mashu",
  lastName: "LastName2",
  occupation: "Web Developer",
  age: 30,
  description: "Dark complection, green eyes, dark hair",
  image: "Image of Mashu",
  color: "Orange"
}
let suspect3 = {
  firstName: "Tommy",
  lastName: "LastName3",
  occupation: "AirBnB",
  age: 33,
  description: "fit, green eyes, freckles",
  image: "Image of Tommy",
  color: "Yellow"
}
let suspect4 = {
  firstName: "Mickey",
  lastName: "LastName4",
  occupation: "Professional Poker",
  age: 22,
  description: "tall, disney sleeve",
  image: "Image of Mickey",
  color: "Green"
}
let suspect5 = {
  firstName: "Mirta",
  lastName: "LastName5",
  occupation: "Broker",
  age: 63,
  description: "5'2 green eyes freckles blonde hair",
  image: "Image of Mirta",
  color: "Blue"
}
let suspect6 = {
  firstName: "Eddie",
  lastName: "LastName6",
  occupation: "Science",
  age: 73,
  description: "White hair, blue eyes",
  image: "Image of Eddie",
  color: "Voilet"

}

const suspectsArray = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];

// Rooms Array{}
let room1 = {name: "room1"}
let room2 = {name: "room2"}
let room3 = {name: "room3"}
let room4 = {name: "room4"}
let room5 = {name: "room5"}
let room6 = {name: "room6"}
let room7 = {name: "room7"}
let room8 = {name: "room8"}
let room9 = {name: "room9"}
let room10 = {name: "room10"}
let room11 = {name: "room11"}
let room12 = {name: "room12"}
let room13 = {name: "room13"}
let room14 = {name: "room14"}
let room15 = {name: "room15"}

const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];

// Weapons Array

let knife = {
name: "knife",
weight: 1
}
let gun = {
  name: "gun",
  weight: 2
} 
let machete = {
  name: "machete",
  weight: 2
}
let axe = {
  name: "axe",
  weight: 5
}
let chainsaw = {
  name: "chainsaw",
  weight: 20
}
let rope = {
  name: "rope",
  weight: 0.5
}
let car = {
  name: "car",
  weight: 2000 
}
let rock = {
  name: "rock",
  weight: 3
}
let poison = {
  name: "poison",
  weight: 0.3
}

const weaponsArray = [knife, gun, machete, axe, chainsaw, rope, car, rock, poison];


// ITERATION 2

let selectRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

let pickMystery = () => {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  }
}


// ITERATION 3

let revealMystery = (envelope) => {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
