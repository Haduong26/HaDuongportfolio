let arr= [17,21,23,36,48,14]
arr.forEach( (tem,i) => {
    console.log(`${tem} in ${i+1} days`);
})

for (const [i,tem] of arr.entries()) {
    console.log(`${tem} in ${i+1} days`);
}


function Duck(n){
    console.log(n * (n+1) / 2);
}
Duck(5)

    const account1 = {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    };
    
    const account2 = {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    };
    
    const account3 = {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    };
    
    const account4 = {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    };
    // tinh tong movement, username, tao arr moi k co so am va dc doi qua usd ()

    const accounts = [account1, account2, account3, account4];

    const rose = [1, 14, 42, 50]
    const filterRose = rose.filter(move => move>10).map(move => move*2)
    console.log(filterRose)
 

    const red = [2, 'a', 'c', 84, 'e', 45, 'w', 27, 9, 'p']
    const number = red.filter(mov => typeof mov === 'number')
    console.log(number);
    const string = red.filter(mov => typeof mov === 'string')
    console.log(string);

    const  leaf = [2,5,7,'p', 'r', 90]

    function array(arr) {
      let arrOfString = []
      let arrOfNumber = []
      for (const el of arr) {
        if (typeof el === 'string') {
          arrOfString.push(el)
        }else {
          arrOfNumber.push(el)
        }
      }
      console.log(arrOfNumber);
      console.log(arrOfString);
    }
    array(leaf)

    const lowerName = account1.owner.toLocaleLowerCase().split(' ').map( firstLetter => firstLetter[0]).join('')
    console.log(lowerName);

    console.log(
    account1.movements.reduce((a, b) => a + b, 0)
)

    function usd(arr) {
      let movementInUsd = []
      for (const el of arr) {
        if ( el > 0) {
          elInUsd = el / 23
          movementInUsd.push(elInUsd)
        }else {
        }
      }
      console.log(movementInUsd);
        }
    usd(account1.movements)
