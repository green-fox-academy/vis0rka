class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
  
  printThing(){
    if (this.completed === true) {
      console.log(`[x] ${this.name}`);
    } else {
      console.log(`[ ] ${this.name}`);
    }
  }
}

export { Thing };
