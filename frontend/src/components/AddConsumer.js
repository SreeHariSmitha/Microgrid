import React, {useState,useEffect}from 'react'

export default function AddConsumer(props) {
  const [temp, setTemp] = useState('');
  

  async function callContract(){
    console.log(props.contract)
    let data = await props.contract.addProducer("sai",1);
    let data2=await props.contract.createMicroGrid("sai");
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text"  id="producer-name"/>
        <label htmlFor="">ProducerName</label>
        <input type="text"  id="producer-password"/>
        <label htmlFor="">Password</label>
        {/* <p>{temp}</p> */}
        <button onClick={callContract}>button</button>
        

      </header>
    </div>
  );
}