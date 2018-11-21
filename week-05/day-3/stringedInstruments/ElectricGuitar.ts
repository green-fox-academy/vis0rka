import { StringedInstrument } from './StringedInstrument'

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfstrings: number = 6) {
    super(numberOfstrings, "Electric Guitar");
  }
  sound():string {
    return 'Twang'
  }
  play():void{
    console.log(`${this.name} a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
  }
}