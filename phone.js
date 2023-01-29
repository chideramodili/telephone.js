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
  addObserver(addedObservers) {
    this.addedObservers.add(addedObservers);
  }
  removeObserver(observersNumber) {
    this.addedObservers = this.observersNumber.delete(observer);
  }
  notifyObservers(observersNunmber) {
    this.addedObservers.forEach(observersNumber =>
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

telephone.addObserver(observe);
telephone.addObserver(dailing);

telephone.addNumber(09027742423);
telephone.dail(0902774242);
