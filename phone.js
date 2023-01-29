class Phone {
  constructor() {
    this.observersNumber = new Set();
    this.addedObservers = new Set();
  }
  addNumber(observersNo) {
    this.observersNumber.add(observersNo);
  }
  remove(observersNumber) {
    this.observersNumber.delete(observersNumber);
  }
  dail(observersNo) {
    this.notifyObservers(observersNo);
  }
  Observer(addedObservers) {
    this.observersNumber.add(addedObservers);
  }
  notifyObserver(observersNo) {
    this.observersNumber.forEach(observersNumber =>
      observersNumber.notify(observersNo)
    );
  }
}

class Observer {
  notify(observersNo) {
    console.log(observersNo);
  }
}
class Dailer {
  notify(observersNo) {
    console.log(`DAILING....... ${observersNo}`);
  }
}

let telephone = new Phone();
let observe = new Observer();
let dailing = new Dailer();

telephone.addNumber(09027742423);
telephone.addNumber(08028984138);
telephone.addNumber(08063386594);
telephone.Observer(dailing);
telephone.Observer(observe);

console.log(telephone);
