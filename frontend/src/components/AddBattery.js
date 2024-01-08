import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";

function AddBattery() {
  const [tem, setTem] = useState("");

  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
  }

  async function addBattery() {
    let uniqueID = document.getElementById("uniqueID").value;
    let minCapacity = document.getElementById("minCapacity").value;
    let maxCapacity = document.getElementById("maxCapacity").value;
<<<<<<< HEAD
    let maxCharge = document.getElementById("maxCharge").value;
    let maxEfficiency = document.getElementById("maxEfficiency").value;
    let initSoc = document.getElementById("initSoc").value;
    // Implement your logic for adding battery
    const data = tem.addBattery(uniqueID,minCapacity,maxCapacity,maxCharge,maxEfficiency,initSoc) 
=======
    let charge = document.getElementById("charge").value;
    let maxEfficiency = document.getElementById("maxEfficiency").value;
    let initSoc = document.getElementById("initSoc").value;
    // Implement your logic for adding battery
    // console.log(typeof(uniqueID))
    const data = tem.addBattery(Number(uniqueID),Number(minCapacity),Number(maxCapacity),Number(charge),Number(maxEfficiency),Number(initSoc)) 
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
  }
  
  let style = {
    backgroundColor: "#DAFFFB",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    height: "70%",
    width: "40%",
    borderRadius: "3%",
  };

  let inputbox = {
    height: 40,
    width: "60%",
    borderRadius: 20,
    backgroundColor: "#9BBEC8",
    margin: 5,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 8,
  };

  let myButton = {
    backgroundColor: "#164863",
    color: "#ffffff",
    height: "20%",
    width: "30%",
    borderRadius: 20,
    padding: "2%",
    margin: "10px", // Added margin for better spacing
  };

  return (
    <>
      <div className="welcomeContainer shadow" style={style}>
        <h1>Add Battery</h1>
        <br />
        <input type="text" id="uniqueID" placeholder="uniqueID" style={inputbox} />
        <br />
        <input type="text" id="minCapacity" placeholder="minCapacity" style={inputbox} />
        <br />
        <input type="text" id="maxCapacity" placeholder="maxCapacity" style={inputbox} />
        <br />
<<<<<<< HEAD
        <input type="text" id="maxCharge" placeholder="maxCharge" style={inputbox} />
=======
        <input type="text" id="charge" placeholder="charge" style={inputbox} />
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
        <br />
        <input type="text" id="maxEfficiency" placeholder="maxEfficiency" style={inputbox} />
        <br />
        <input type="text" id="initSoc" placeholder="initSoc" style={inputbox} />
        <br />
        <button className="btn" style={myButton} onClick={addBattery}>
          Add Battery
        </button>
        <button className="btn" style={myButton} onClick={connect}>
          Connect MetaMask
        </button>
      </div>
      {/* Uncomment and implement the producer component */}
      {/* <Producer /> */}
      {/* <AddLoad />*/}
    </>
  );
}

<<<<<<< HEAD
export default AddBattery;
=======
export default AddBattery;
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
