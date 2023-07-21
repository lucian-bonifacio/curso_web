const randomNumbers = [36, 99, 37, 63]

const numbersGreatThan37 = randomNumbers.filter((item) => {
    return item > 37
})

console.log(numbersGreatThan37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter((item) => {
    if(item.premium){
        return {name: item.name, premium: item.premium}
    }
})

console.log([users, premiumUsers])

const premiumUsersTwo = users.filter((item) => {
    return item.premium
})

console.log(premiumUsersTwo)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// ***************************************

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

  console.log(filtered)

// **************************************

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const functionTest = (num) => num > 5 

console.log(array.filter(functionTest))
// console.log(array.filter(isPrime))

//**************************************************** */

