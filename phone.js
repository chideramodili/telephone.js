class Phone {
  constructor() {
    this.observersNumber = new Set();
    this.addedObservers = new Set();
  }

  addNumber(observersNunmber) {
    this.observersNumber.add(observersNunmber);
  }
  remove(observersNumber) {
    this.observersNumber.delete(observersNumber);
  }
  dail(observersNunmber) {
    this.notifyObservers(observersNunmber);
  }
  Observer(addedObservers) {
    this.observersNumber.add(addedObservers);
  }
  notifyObservers(observersNunmber) {
    this.observersNumber.forEach(observersNumber =>
      observersNumber.notify(observersNunmber)
    );
  }
}

class Observer {
  notify(observersNunmber) {
    console.log(observersNunmber);
  }
}
class Dailer {
  notify(observersNunmber) {
    console.log(`DAILING....... ${observersNunmber}`);
  }
}

let telephone = new Phone();
let observe = new Observer();
let dailing = new Dailer();

telephone.Observer(observe);
telephone.Observer(dailing);

telephone.addNumber(09027742423);
telephone.dail(0902774242);

