class Hero {
 //properties or attributes 
 // "variables that belong to each object"
    constructor(health=18, power=5) {
        this.health = health; 
        this.power = power; 
    }
 // behaviors or methods 
 // "functions that belong to each instance"
 hug(otherHero) {
    //  otherHero.health += this.power; 
     otherHero.receiveHealth(this.power);
    //  console.log(`otherHero has ${otherHero.health}`);
 }

 receiveHealth(healthPoints) {
     this.health += healthPoints; 
     console.log(`Yay I love hugs. I have ${this.health}`);
 }
}

const aHero = new Hero(); 
// console.log(aHero);
const anotherHero = new Hero();
aHero.hug(anotherHero);
aHero.hug(anotherHero);









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
