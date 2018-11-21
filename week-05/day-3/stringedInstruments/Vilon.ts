import { StringedInstrument } from './StringedInstrument'

export class Violin extends StringedInstrument {
  constructor(numberOfstrings: number = 4) {
    super(numberOfstrings,"Violin")
  }
  sound():string {
    return 'Screech'
  }
  play():void{
    console.log(`${this.name} a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
  }
}