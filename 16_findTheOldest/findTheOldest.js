const getAge = (birth, death = new Date().getFullYear()) => death - birth;

const findTheOldest = (people) =>
    people.reduce((oldest, currentPerson) =>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });

// Do not edit below this line
module.exports = findTheOldest;
