'use strict';

class Robot{
  constructor(direction, coordinates){
    this.bearing = direction
    this.coordinates = coordinates
  }

  orient(direction){
    if (['north', 'east', 'south', 'west'].includes(direction)){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnLeft(){
    switch(this.bearing){
      case "north":
        this.bearing = 'west'
        break;
      case "east":
        this.bearing = 'north'
        break;
      case "south":
        this.bearing = 'east'
        break;
      case "west":
        this.bearing = 'south'
        break;
    }
  }

  turnRight(){
    switch(this.bearing){
      case "north":
        this.bearing = 'east'
        break;
      case "east":
        this.bearing = 'south'
        break;
      case "south":
        this.bearing = 'west'
        break;
      case "west":
        this.bearing = 'north'
        break;
    }
  }

  advance(){
    switch(this.bearing){
      case "north":
        this.coordinates = [this.coordinates[0], this.coordinates[1] + 1]
        break;
      case "east":
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
      case "south":
        this.coordinates = [this.coordinates[0], this.coordinates[1] - 1]
        break;
      case "west":
        this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]]
        break;
    }
  }

  at(x,y){
    this.coordinates = [x, y]
    return this.coordinates
  }

  instructions(instructions){
     return instructions.split("").map(instruction =>{
      switch(instruction){
        case "R":
          return "turnRight"
        case "A":
          return "advance"
        case "L":
          return "turnLeft"
        default:
          throw new Error("That is not a valid instruction!")
      }
    })
  }

  place(object){
    this.coordinates = [object.x,object.y]
    this.bearing = object.direction

  }

  evaluate(string){
    let robot = this
    this.instructions(string).forEach(instruction => {
      switch(instruction){
        case "turnRight":
          robot.turnRight()
          break;
        case "advance":
          robot.advance()
          break;
        case "turnLeft":
          robot.turnLeft()
          break;
      }
    })
  }
}
