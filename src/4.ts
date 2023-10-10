/* У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при 
створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. 
Клас Person повинен мати метод getKey, який повертає збережений ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. 
У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. 
Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. 
Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому. */

class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private name: string, private key: Key) {}
  getName(): string {
    return this.name;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected door: boolean,
    protected key: Key,
    public tenants: Person[] = []
  ) {}
  abstract openDoor(key: Key): void;
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getName()} entered the house.`);
    } else {
      console.log("The door is closed.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The key fits, door is opened.");
    } else {
      console.log("Invalid key.");
    }
  }
}
const key = new Key();
const house = new MyHouse(false, key);
const person = new Person("Dan", key);

house.openDoor(key);

house.comeIn(person);

export {};
