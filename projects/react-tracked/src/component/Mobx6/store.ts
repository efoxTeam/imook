import {configure, makeAutoObservable} from 'mobx'

configure({useProxies: 'never'})

class Store {
  data = {
    count: 0,
    person: {
      age: '100',
      firstName: 'Xu',
      lastName: 'Ken',
    },
  }

  constructor() {
    makeAutoObservable(this)
  }
  setPerson(k: 'age' | 'firstName' | 'lastName', v: string) {
    this.data.person[k] = v
  }
  inc() {
    this.data.count += 1
  }
}

export default new Store()
