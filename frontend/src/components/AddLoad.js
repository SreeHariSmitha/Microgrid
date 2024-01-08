import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";

function AddLoad() {
  const [tem, setTem] = useState("");

  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
  }

  async function addload() {
    let uniqueID = document.getElementById("uniqueID").value;
    let userAddress = document.getElementById("userAddress").value;
    let energyRequired = document.getElementById("energyRequired").value;
    // Implement your logic for adding load
<<<<<<< HEAD
    const data = tem.addLoad(uniqueID,userAddress,energyRequired) 
=======
    const data = tem.addLoad(userAddress,Number(energyRequired) ,Number(uniqueID)) 
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
        <h1>Add load</h1>
        <br />
        <input type="text" id="uniqueID" placeholder="uniqueID" style={inputbox} />
        <br />
        <input type="text" id="userAddress" placeholder="userAddress" style={inputbox} />
        <br />
        <input type="text" id="energyRequired" placeholder="energyRequired" style={inputbox} />
        <br />
        <button className="btn" style={myButton} onClick={addload}>
          Add load
        </button>
        <button className="btn" style={myButton} onClick={connect}>
          Connect MetaMask
        </button>
<<<<<<< HEAD
=======

>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
      </div>
      {/* Uncomment and implement the producer component */}
      {/* <Producer /> */}
      {/* <AddLoad />*/}
    </>
  );
}

<<<<<<< HEAD
export default AddLoad;
=======
export default AddLoad;
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
