interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation {
  dow: string;
  code: any;
  static codeStorage: any [] = [];
  constructor() {
    this.code = this.randomString();
    this.dow = this.randomDay();
  }
  randomString() {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let string_length = 8;
    let randomstr = '';
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstr += chars.substring(rnum, rnum + 1);
    }   
    if(Reservation.codeStorage.indexOf(randomstr) > 0) {
      this.randomString();
    } 
    Reservation.codeStorage.push(randomstr);
    return randomstr;
  }
  randomDay() {
    let weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT', 'SUN'];
    let rnum = Math.floor(Math.random() * weekDays.length);
    let rday = weekDays[rnum].toString();
    return rday;
  }
  getDowBooking() {
    return this.dow;
  }
  getCodeBooking() {
    return this.code;
  }

  print(){
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);   
  }

}

let Booking1 = new Reservation();
let Booking2 = new Reservation();
let Booking3 = new Reservation();
let Booking4 = new Reservation();
let Booking5 = new Reservation();
let Booking6 = new Reservation();
let Booking7 = new Reservation();
let Booking8 = new Reservation();

Booking1.print();
Booking2.print();
Booking3.print();
Booking4.print();
Booking5.print();
Booking6.print();
Booking7.print();
Booking8.print();


