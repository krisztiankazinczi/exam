class NumberSequence {
  constructor(start, end) {
    this.start = start // vagy ezt kellene novelni minden nextnel?
    this.end = end
    this.actual = start
  }

  current() {
    return this.actual
  }

  next() {
    if (this.getCurrent() + 1 > this.end) {
      return undefined
    }
    this.actual += 1
    return this.actual
  }


}

class CustomNumberSequence {
  constructor(start, end, next) {
    const seq = new NumberSequence(start, end)
    this.seq = seq
    this.start = start
    this.end = end
    this.next = next
  }

  next() {
    const actualNum = this.seq.current() 
    const result = this.next(actualNum)
    if (result < this.end)

    return this.next(actualNum)
  }
}

function plus3(num) {
  return num + 3
}

class EvenNumberSequence {
  constructor(start, end, next) {
    const seq = new NumberSequence(start, end)
    this.seq = seq
    this.start = start
    this.end = end
    this.next = next
    this.actual = start
  }

  next() {

      const isItEven = (this.seq.getCurrent() % 2 == 0);
      if (isItEven) {
        if (this.actual + 2 > this.end) {
          return undefined
        }
        this.actual += 2
        return this.actual
      }
      if (this.actual + 1 > this.end) {
        return undefined
      }
      this.actual += 1
      return this.actual  
  }
  }


const seq = new NumberSequence(5,10)
// console.log(seq.getCurrent())
// seq.next()
// console.log(seq.getCurrent())
// console.log(seq.next())
// seq.next()
// seq.next()
// seq.next()
// seq.next()

// console.log(seq.getCurrent())
// console.log(seq.next())

const custom = new CustomNumberSequence(10, 20, plus3)
// console.log(custom.next)


// const even = new CustomNumberSequence(10, 20)
// // console.log(even)



