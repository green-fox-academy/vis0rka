import { StringedInstrument } from './StringedInstrument'

export class BassGuitar extends StringedInstrument {
  constructor(numberOfstrings: number = 4) {
    super(numberOfstrings, "Bass Guitar")
  }
  sound():string {
    return 'Duum-duum-duum' 
  }
  play():void{
    console.log(`${this.name} a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
  }
}