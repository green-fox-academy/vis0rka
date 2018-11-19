import { Flowers } from './flower'
import { Trees } from './trees'
import { Garden } from './garden'

let kert = new Garden('kert');

let yellow = new Flowers('yellow');
let blue = new Flowers('blue');

let purple = new Trees('purple');
let orange = new Trees('orange');

kert.addPlants(yellow);
kert.addPlants(blue);

kert.addPlants(purple);
kert.addPlants(orange);

kert.waterInfo();

kert.watering(40);

kert.watering(70);

