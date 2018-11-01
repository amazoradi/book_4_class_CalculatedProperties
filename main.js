class Restaurants {

  constructor(props) {
    this.menu = props.menu
    this.discount = props.discount
  }

  set combo(items) {
    if (typeof items === "object"){
      return this._combo = items
    }
  }

  get comboPrice() {
    if (this._combo){
      let discount  =this.discount
      let comboPrice = this._combo.reduce(
        (currTot, nextItem) => currTot + nextItem
      );
      return `The price of your combo meal is ${(discount*comboPrice).toFixed(2)}`;
    } 
  }
}


// My restaurant info
const bobsBurgersProp = {
  menu: {
    buger: 7.95,
    fries: 2.99,
    soda: 1.99,
    beer: 5.00,
    milkshake: 4.50
  },
  discount: .87
}

const bobsBurgers = new Restaurants(bobsBurgersProp)

console.log(bobsBurgers)
console.log(bobsBurgers.menu)
bobsBurgers.combo = [bobsBurgers.menu.buger, bobsBurgers.menu.soda, bobsBurgers.menu.fries]
// can change what the combo is
// bobsBurgers.combo = [bobsBurgers.menu.buger, bobsBurgers.menu.beer]

console.log(bobsBurgers._combo)

console.log(bobsBurgers.comboPrice)



