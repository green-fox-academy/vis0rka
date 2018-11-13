class PostIt {
  backgroundColor: string;

  text: string;

  textColor: string;

  constructor(message:string,textColor:string,backgroundColor:string) {
    this.text = message;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
  }

  textPostIt():string {
    return `post it text: ${this.text} text color: ${this.textColor} backgroundcolor: ${this.backgroundColor}`;  
  }

}
let postit1 = new PostIt("Idea1","blue","orange");
let postit2 = new PostIt("Awesome","black","pink");
let postit3 = new PostIt("Superb!","green","yellow");


console.log(postit1.textPostIt());
console.log(postit2.textPostIt());
console.log(postit3.textPostIt());