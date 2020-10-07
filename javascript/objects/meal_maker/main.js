const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "cheese dip", 200);
menu.addDishToCourse("appetizers", "wings", 700);
menu.addDishToCourse("appetizers", "salad", 200);
menu.addDishToCourse("mains", "chicken", 30000);
menu.addDishToCourse("mains", "steak", 90000);
menu.addDishToCourse("mains", "salmon", 110000);
menu.addDishToCourse("desserts", "pudding", 100);
menu.addDishToCourse("desserts", "ice cream", 200);
menu.addDishToCourse("desserts", "pig snout", 300);

const meal = menu.generateRandomMeal();

console.log(meal);
