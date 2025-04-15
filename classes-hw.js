const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    //  - add(x, y): returns the sum of x and y
    //  - subtract(x, y): returns the result of x minus y
    // Then create an instance and call both methods.

    class Calculator{
      add(x,y){
        return x+y;
      }
      subtract(x,y){
        return x-y;
      }
    }

    let calc = new Calculator();
    output.innerHTML = (`Add: ${calc.add(9,3)} <div>Subtract: ${calc.subtract(27,12)}</div> `);
  },
  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    //  - setName(name): sets a property called name
    //  - getName(): returns the name
    // Then create an instance, set the name to your name, and log it using getName().

    class Person{
      setName(name){
        this.name = name;
      }
      getName(){
        return this.name;
      }
    }

    let hum = new Person()
    hum.setName("Steve")
    output.innerHTML = (`I am ${hum.getName()}`);
  },
  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    // Then create one Bird and one Penguin, and call their fly() methods.
    class Bird{
      fly(){
        return "Flying";
      }
    }

    class Penguin extends Bird{
      fly(){
        return "Penguins can't fly";
      }
    }
    
    let bierd = new Bird();
    let pengin = new Penguin();
    output.innerHTML = (`${bierd.fly()}<div>${pengin.fly()}</div>`)
  },
  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    // - Square's describe() method logs "I'm a square"
    // Then create instances of Circle and Square and call their describe() methods.

    class Shape{
      describe(){
        return "I am shape";
      }
    }

    class Circle extends Shape{
      describe(){
        return "I am circle";
      }
    }

    class Square extends Shape{
      describe(){
        return "I am square";
      }
    }
    let cicle = new Circle();
    let scare = new Square();
    output.innerHTML = (`${cicle.describe()}<div>and ${scare.describe()}</div>`)

  },
  function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    // Then create an instance of Manager, and call both methods.

    class Employee{
      work(){
        return "Working...";
      }
    }

    class Manager extends Employee{
      hireEmployee(){
        return "Employee hired";
      }
    }

    let theman = new Manager();
    output.innerHTML = (`${theman.work()}<div>${theman.hireEmployee()}</div>`);
  }
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
