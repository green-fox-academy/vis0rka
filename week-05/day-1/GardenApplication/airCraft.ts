class AirCraft {
  name: string;
  ammo: number;
  baseDamage: number;
  maxAmmo: number;
  constructor(name: string, baseDamage: number, maxAmmo: number) {
    this.name = name;
    this.ammo = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }
  checkAmmo() {
    return this.ammo;
  }
  fight(): number {
    return 0;
  }
  refill(amount: number) {
    let leftAmmo = amount - this.maxAmmo;
    if (amount > this.maxAmmo) {
      this.ammo = this.maxAmmo
      return leftAmmo;
    } 
    else {
      this.ammo = this.maxAmmo
      return this.maxAmmo
    }
  }
  getType() {
    return this.constructor.name
  }
  getStatus() {
    return `Type ${this.constructor.name}, Ammo ${this.ammo}, BaseDamade ${this.baseDamage}, All Damage ${this.fight()}`
  }

}

class F16 extends AirCraft {
  constructor(name: string, baseDamage: number = 30, maxAmmo: number = 8) {
    super(name, baseDamage, maxAmmo);
  }

  fight(): number {
    this.maxAmmo == 0;
    return this.maxAmmo * this.baseDamage;
  }
}

class F35 extends AirCraft {
  constructor(name: string, baseDamage: number = 50, maxAmmo: number = 12) {
    super(name, baseDamage, maxAmmo)
  }

  fight(): number {
    this.maxAmmo == 0;
    return this.maxAmmo * this.baseDamage;
  }
}

class Carrier {
  name: string;
  fighters: AirCraft[] = [];
  carrierammo: number;
  healtPoint: number;
  constructor(name: string, carrierammo: number, healtPoint: number) {
    this.name = name;
    this.carrierammo = carrierammo;
    this.healtPoint = healtPoint;

  }

  add(fighter: AirCraft) {
    this.fighters.push(fighter);
  }
  fill() {
    let ammo = this.carrierammo;    
        if (this.carrierammo < 0) {
          throw `No ammo`
        }
        try { 
          this.fighters.forEach(function(element) {
          element.refill(ammo);
          ammo -= element.maxAmmo
          })}
        catch(e) {
          console.log(e);          
        }
        return this.carrierammo = ammo;  
  } 

  totalDamage(): number {
    let totalD: number = 0;
    this.fighters.forEach(function (element) {
      totalD += element.fight();
    })
    return totalD;
  }

  fight(carrier: Carrier) {
    for (let i = 0; this.carrierammo > 0; i++) {
      if (carrier.healtPoint  > 0) {
        carrier.healtPoint -= this.totalDamage();
        console.log(carrier.healtPoint);
        this.fill();
      } else { 
        return `It's dead Jim :(` 
      }
    }
  }

  getStatus(): void {
    console.log(`HP: ${this.healtPoint} Aircraft Count: ${this.fighters.length} Ammo Storage ${this.carrierammo} Total Damage ${this.totalDamage()}`);
    console.log(` Aircraft:`);
    this.fighters.forEach(function (element) {
      console.log(element.getStatus());
    })

  }
}

let harcosf16 = new F16("harcosf16");
let harcosf35 = new F35("harcosf35")

let motherShip = new Carrier('motherShip', 50, 5000);
let fatherShip = new Carrier('fatherShip', 30, 3000);

motherShip.add(harcosf16);
motherShip.add(harcosf16);
motherShip.add(harcosf16);

fatherShip.add(harcosf35);
fatherShip.add(harcosf35);
fatherShip.add(harcosf35);

//console.log(harcosf16.refill(300));



console.log(motherShip.fight(fatherShip));

motherShip.getStatus();

fatherShip.getStatus(); 

