
        // 1. Primitivos (strings, numbers, booleans)
   /* let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);*/

    // lo mismo sucede con los strings

   /* let name = 'Wes';
    let name2 = name;
    console.log(name, name2);
    name = 'wesley';
    console.log(name, name2);*/

    // 2. Arrays
    /*const players = ['Wes','Sarah','Ryan','poppy'];
    const team = players;
    console.log(players, team);
    
    team[3] = 'Lux';
    console.log(players, team);

    const team2 = players.slice()
    const team3 = [].concat(players);
    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);
    const team5 = Array.from(players);
    team5[3] = 'cool';*/

    // 3. Objects 
 /* const person = {
        name: 'Wes Bos',
        age: 80
    };
   const captain = person;
    captain.number = 99;
    console.log(person, captain);

//como copiar objetos
 const cap2 = Object.assign({}, person, {number: 99, age: 12});
 console.log(cap2);

 //utilizando el operador spread {...}
 const cap3 = {...person};*/

 const wdex = {
    name: 'dex' ,
    age: 100 ,
    social: {
        twitter: '@Dex',
        facebook: 'dex.developer'
    }  
};

//const dev = Object.assign({}, wdex);
//dev.social.twitter = '@cool';
console.log(wdex.social.twitter);

const dev2 = JSON.parse(JSON.stringify(wdex));

console.log(wdex);