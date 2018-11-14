import { callbackify } from "util";

export{};

/* Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() */

class Student {
  name:string;
  constructor(name:string) {
    this.name = name;
  }

  learn(){
    console.log("learn");
  }
  question(teacher: Teacher){
    teacher.answer();
  }
}

class Teacher {
  name:string;
  constructor(name:string) {
    this.name = name;
  }
  teach(student: Student){
    student.learn();
  }
  answer(){
    console.log("answer"); 
  }

}

let Bence = new Teacher("Bence");
let Krisztian = new Student("Krisztian")


Bence.teach(Krisztian);
Krisztian.question(Bence);


