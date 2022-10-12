const fn = () => {
    let x = "middle"
  
    console.log("start")
    console.log(x)
    console.log("finished")
  }
  
  fn()
  
  // "start"
  // "middle"
  // "finished"
  
  const fnasync = () => {
    let x = "middle"
  
    console.log("start")
    setTimeout(() => console.log(x))
    console.log("finished")
  }
  
  fnasync()
  
  // "start"
  // "finished"
  // "middle"
  