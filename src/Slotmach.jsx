const Slot = (props) => {
    let x = props.x
    let y = props.y
    let z = props.z
    
    if((x === y) && (y === z)){
       return (
         <>
         <div>
           <h1>{x}{y}{z}</h1>
           <h1>This is matching</h1>
         </div>
         </>
       )
    }else{
      return (
        <>
        <div>
          <h1>{x}{y}{z}</h1>
          <h1>This is not matching</h1>
        </div>
        </>
      )
    }
  }

  export default Slot;