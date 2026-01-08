let users = [
  {
    id: 0,
    isActive: false,
    age: 24,
    eyeColor: "green",
    name: "Marsh Obrien",
    company: "CENTURIA",
  },
  {
    id: 1,
    isActive: false,
    age: 21,
    eyeColor: "green",
    name: "Rios Gibson",
    company: "MULTRON",
  },
  {
    id: 2,
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Morgan Buchanan",
    company: "CENTURIA",
  },
  {
    id: 3,
    isActive: true,
    age: 25,
    eyeColor: "brown",
    name: "Franklin Dyer",
    company: null,
  },
  {
    id: 4,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Keller Pitts",
    company: "CENTURIA",
  },
  {
    id: 5,
    isActive: false,
    age: 25,
    eyeColor: "brown",
    name: "Davenport Maddox",
    company: "MULTRON",
  },
  {
    id: 6,
    isActive: true,
    age: 31,
    eyeColor: "brown",
    name: "Judith Graves",
    company: null,
  },
  {
    id: 7,
    isActive: true,
    age: 26,
    eyeColor: "blue",
    name: "Hoffman Hess",
    company: "CENTURIA",
  },
  {
    id: 8,
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Sheena Goff",
    company: "MULTRON",
  },
  {
    id: 9,
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Rose Lawrence",
    company: "EVENTIX",
  },
  {
    id: 10,
    isActive: false,
    age: 35,
    eyeColor: "blue",
    name: "Alston Goodman",
    company: "CENTURIA",
  },
  {
    id: 11,
    isActive: true,
    age: 28,
    eyeColor: "brown",
    name: "Nannie Berry",
    company: null,
  },
  {
    id: 12,
    isActive: true,
    age: 27,
    eyeColor: "blue",
    name: "Lynette Jackson",
    company: "CENTURIA",
  },
  {
    id: 13,
    isActive: false,
    age: 23,
    eyeColor: "blue",
    name: "Samantha Garrett",
    company: "EVENTIX",
  },
  {
    id: 14,
    isActive: false,
    age: 30,
    eyeColor: "blue",
    name: "Grimes Savage",
    company: "CENTURIA",
  },
  {
    id: 15,
    isActive: false,
    age: 31,
    eyeColor: "green",
    name: "Atkinson Kirby",
    company: null,
  },
  {
    id: 16,
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Jami Burgess",
    company: "CENTURIA",
  },
  {
    id: 17,
    isActive: true,
    age: 31,
    eyeColor: "blue",
    name: "Sallie Albert",
    company: "CENTURIA",
  },
  {
    id: 18,
    isActive: false,
    age: 26,
    eyeColor: "blue",
    name: "Ora Hobbs",
    company: "EVENTIX",
  },
  {
    id: 19,
    isActive: true,
    age: 30,
    eyeColor: "blue",
    name: "Pruitt Sellers",
    company: "CENTURIA",
  },
];

// étape 1

function countActiveUsers(users) {
  return users.filter((user) => user.isActive).length;
}

console.log(`We currently have ${countActiveUsers(users)} active users.`);

// étape 2

function getActiveUsers(users) {
  return users.filter((user) => user.isActive);
}

function hasBlueEyes(activeUsers) {
  return activeUsers.filter((user) => user.eyeColor === "blue").length;
}

console.log(
  `Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(
    getActiveUsers(users)
  )} have blue eyes.`
);

// étape 3

function getActiveUsers(users) {
  return users.filter((user) => user.isActive);
}

function getActiveUsersAges(users) {
  return users.map((user) => user.age);
}

function computeActiveUsersAverageAge(ages) {
  return ages.reduce((total, age) => total + age, 0) / ages.length;
}

console.log(
  `Out of our currently ${countActiveUsers(
    users
  )} active users, the average age is ${computeActiveUsersAverageAge(
    getActiveUsersAges(getActiveUsers(users))
  )}.`
);

// étape 4

function getMultronUsers(users) {
  return users.filter((users) => users.company === "MULTRON");
}

function setMultronToCenturia(users) {
  return users.map((users) => users.company === "CENTURIA");
}

console.log(
  `${
    getMultronUsers(users).length
  } user companies have been changed from MULTRON to CENTURIA.`
);

// étape 5

function getBrownEyedUsers(users) {
  return users.filter((user) => user.eyeColor === "brown");
}

function excludeCenturiaWorkers(users) {
  return users.filter((user) => user.company !== "CENTURIA");
}

console.log(
  `${
    getBrownEyedUsers(users).length
  } users with brown eyes do not work at CENTURIA`
);

// étape 6

function getActiveUsers(users) {
  return users.filter((user) => user.isActive);
}

function getInactiveUsers(users) {
  return users.filter((user) => !user.isActive);
}

function getBrownEyedUsers(users) {
  return users.filter((user) => user.eyeColor === "brown");
}

function getGreenEyedUsers(users) {
  return users.filter((user) => user.eyeColor === "green");
}

function getBlueEyedUsers(users) {
  return users.filter((user) => user.eyeColor === "blue");
}

const brownUsers = getBrownEyedUsers(users);
console.log(
  `Out of our brown eyed users ${
    getActiveUsers(brownUsers).length
  } are active and ${getInactiveUsers(brownUsers).length} are inactive`
);

const greenUsers = getGreenEyedUsers(users);
console.log(
  `Out of our green eyed users ${
    getActiveUsers(greenUsers).length
  } are active and ${getInactiveUsers(greenUsers).length} are inactive`
);

const blueUsers = getBlueEyedUsers(users);
console.log(
  `Out of our blue eyed users ${
    getActiveUsers(blueUsers).length
  } are active and ${getInactiveUsers(blueUsers).length} are inactive`
);
