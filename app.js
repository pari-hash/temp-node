// const {john,peter}=require('./1-names')
const names=require('./1-names')
const sayHi=require('./2-utils')
const data=require('./3-alternative-flavour')
require('./4-mind-grenade')
// console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(john)
// sayHi(peter)

//npm- global command,comes with node 
//npm --version 

//local dependency - use it only in this particular project 
//npm i <packagename>

//global dependency - use it in any project 
//npm install -g <packagename>

//package.json- manifest file (Stores important info about project/package)