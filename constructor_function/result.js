function Result_s(name, marks) {
  this.name = name;
  this.marks = marks;

  this.result = function () {
    if (this.marks >= 40) {
      return this.name + " pass";
    } else {
      return this.name + " fail";
    }
  };
}

let s1 = new Result_s("adesh", 60);

console.log(s1.result());
