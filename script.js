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

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
