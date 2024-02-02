{
  interface CarName {
    name: string,
    run(): void
  }

  interface CarAge {
    name: number,
    swim(): void
  }

  function myCar(prop: CarName | CarAge) {
    // return prop.name
    (prop as CarName).run()

  }


  const car: CarName = {
    name: 'tom',
    run: function () {
      console.log('hello')
    }
  }

  myCar(car)
}


{
  function getCount(count: number): any {
    const run = () => {
      console.log(count + '次数')
    }
    return {
      count,
      run
    }
  }

  interface CountType {
    count: number,
    run(): void
  }

  const getList = getCount(10) as CountType
  getList.run()
}

{
  interface Animal {
    name: string
  }
  interface Cat extends Animal {
    run(): void
  }

  const getCount = function (name: string): Cat {
    const run = () => {
      console.log(name)
    }

    return {
      name,
      run
    }
  }

  const count = getCount('张三')
  count.run()
}