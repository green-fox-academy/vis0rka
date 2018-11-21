import { Instrument} from './Instrument'

export abstract class StringedInstrument extends Instrument {
  numberOfstrings: number;
  sound(): void { };

  constructor(numberOfstrings: number, name: string) {
    super(name);
    this.numberOfstrings = numberOfstrings;
  }
}