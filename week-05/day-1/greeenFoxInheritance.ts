export {}
class Person {
  protected name: string;
  protected age: number;
  protected gender: string;
  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(): void {
    console.log(`Hi I'm ${this.name} a ${this.age} year old ${this.gender}`);
  }
  getGoal(): void {
    console.log(`My goal is: Live for the moment!`);

  }
}

class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;
  constructor(name?:string,age?:number,gender?:string, previousOrganization?: string,skippedDays: number = 0) {
    super(name,age,gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  introduce(): void {
    console.log(`Hi I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganization}
    who skipped ${this.skippedDays} from the course already`);
  }
  getGoal(): void {
    console.log(`Be a junior software developer.`);
  }
  skipDays(daysNumber: number): void {
    this.skippedDays += daysNumber;
  }
}
class Mentor extends Person {
  protected level: string;
  constructor(name?:string,age?:number,gender?:string,level: string  = "intermediate") {
    super(name,age,gender);
    this.level = level;
  }
  introduce(): void {
    console.log(`Hi I'm ${this.name} a ${this.age} year old ${this.gender} ${this.level} mentor`);
  }
  getGoal(): void {
    console.log(`Educate brilliant junior software developers.`);
  }
}

class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;
  constructor(name?:string,age?:number,gender?:string,  company: string = "Google") {
    super(name,age,gender);
    this.company = company;
    this.hiredStudents = 0;
  }
  introduce(): void {
    console.log(`Hi I'm ${this.name} a ${this.age} year old ${this.gender} who represent ${this.company}
    and hired ${this.hiredStudents} so far`);
  }
  getGoal(): void {
    console.log(`Hire brilliant junior software developers.`);
  }
  hire(): void {
    this.hiredStudents++;
  }
}

class Cohort {
  protected name:string;
  protected students: Student []= [];
  protected mentors: Mentor []= [];
  constructor(name:string) {
    this.name = name;
  }
  addStudent(student: Student):void {
    this.students.push(student);
  }
  addMentor(mentor: Mentor):void {
    this.mentors.push(mentor);
  }
  info():void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
    
  }
}


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();