class Animal {
	construtor(species){
		this.species = species;
	}

	makeSound(){
		console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
    makeSound(){
		console.log("The Siamese makes a sound");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
    makeSound(){
		console.log("The Golden Retriever makes a sound");
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
