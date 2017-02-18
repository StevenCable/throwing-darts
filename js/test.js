const chai = require('chai')
chai.should();

const scoreThrows = require('./app.js');

let correctArray = [0,5,10,11]; //20
let negativeArray = [-1,5,10,11]; //err
let nonNumberArray = ['three', 5,10,11]; //err

describe('Dart Score!', _=>{
  describe('Score: ', _=>{

    it('should be an array of numbers', _()=>{
      scoreThrows.correctArray
    })

  })


})

