class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return `${this.species} says ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  // Перевизначення методу makeSound
  makeSound() {
    return `The ${this.color} ${this.species} says ${this.sound}`;
  }
}

const myDog = new Dog("dog", "woof", "brown");

document.getElementById('animalSound').innerText = myDog.makeSound();

