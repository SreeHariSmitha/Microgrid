import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectToMetaMask from "./hooks/MetaMaskConnection.js";
import {ConsumerAuthentication,ConsumerLogin} from "./consumer/authentication.js";
import ConsumerFaceAuthentication from "./consumer/registration.js";
import ConsumerOtp from "./consumer/otp.js";
import ConsumerMicroid from "./consumer/microid.js";
<<<<<<< HEAD
import AddConsumer from "./components/AddConsumer.js";
import ConsumerHome from './consumer/home.js'
import ConsumerPlans from './consumer/plans.js'
import ConsumerHistory from './consumer/history.js'
// import Payable from './components/Payment.js'
//import { ethers } from "ethers";
// import contractABI from "./blockChain/Microgrid.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connectToMetaMask from "./hooks/MetaMaskConnection.js"
import AddProducer from "./components/AddProducer.js"
import AddBattery from "./components/AddBattery.js";
import  AddLoad from "./components/AddLoad.js"
import  AddGreenEnergy from "./components/AddGreenEnergy.js"
import AddGrid from "./components/AddGrid.js";
import AddMicrogrid from "./components/AddMicrogrid.js";

export default function App() {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract } = await connectToMetaMask();
        // Use sendDataContract and getDataContract here or set them to state variables
        console.log(sendDataContract, getDataContract);
=======
import ConsumerHome from "./consumer/home.js";
import ConsumerPlans from "./consumer/plans.js";
import ConsumerHistory from "./consumer/history.js";
import Form from "./consumer/form.js";
import AddConsumer from "./components/AddConsumer.js";
import ConsumerNavbar from "./consumer/navbar.js";
import IsAuthenticated from "./hooks/IsAuthenticated.js";

// Producer Imports
import ProducerHome from "./pages/ProducerHome.js";
import ProducerNavbar from "./pages/ProducerNavbar.js";
import ProducerLogIn from "./pages/ProducerLogin.js";
import ProducerSignup from "./pages/ProducerSignUp.js";
import AddMicrogrid from "./components/AddMicrogrid.js";
import AddBattery from "./components/AddBattery.js";
import AddLoad from "./components/AddLoad.js";
import AddGreenEnergy from "./components/AddGreenEnergy.js";
import AddGrid from "./components/AddGrid.js";
import AddProducer from "./components/AddProducer.js";
import JoinOrCreateMicroGrid from "./pages/JoinOrCreateMicroGrid.js";
import Test from "./components/Test.js"
import AvailableMicrogrid from "./components/AvailableMicrogrid.js";

// import { VariableProvider } from './Context/metaContext.js';

export default function App() {
  const [getContract, setGetContract] = useState("");
  const [sendContract, setSendContract] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState("");

  const producerAuthentic=IsAuthenticated("producerAuthToken")
  const consumerAuthentic=IsAuthenticated("consumerAuthToken")
  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract, metaMaskAddress } = await ConnectToMetaMask();
        console.log(sendDataContract, getDataContract,metaMaskAddress);
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89

        // Set state with received data
        setGetContract(getDataContract);
        setSendContract(sendDataContract);
        setMetaMaskAddress(metaMaskAddress);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }

<<<<<<< HEAD
    fetchData();
  }, []);

  const myrouter = createBrowserRouter([
    { path: "/",                      element: < ConsumerAuthentication /> },
    { path: "/consumer/registration", element: < ConsumerFaceAuthentication /> },
    { path: "/consumer/otp",          element: < ConsumerOtp /> },
    { path: "/consumer/microid",      element: < ConsumerMicroid/>},
    { path: "/consumer/login",        element: < ConsumerLogin /> },
    { path: "/consumer/home",         element: < ConsumerHome/>},
    { path: "/consumer/plans",        element: < ConsumerPlans/>},
    { path: "/consumer/history",      element: < ConsumerHistory/>},
    { path: "/addConsumer",           element: < AddConsumer  contract = {temp}/> },
    { path: "/addProducer",           element: < AddProducer  contract = {temp}/> },
    { path: "/addBattery",            element: < AddBattery   contract = {temp}/> },
    {path:   "/addLoad",              element: <AddLoad       contract ={temp}/>},
    {path:   "/addGreenEnergy",       element: <AddGreenEnergy contract ={temp}/>},
    {path:   "/addGrid",              element: <AddGrid        contract ={temp}/>},
    {path:   "/addMicrogrid",         element: <AddMicrogrid   />}  
    // { path: "/payable",               element: < Payable   contract = {temp}/> },
=======
    fetchData(); // Invoke the fetchData function when the component mounts
  }, []);

>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89




  return (
    <Router>
      <div>
        {producerAuthentic?<ProducerNavbar connect = {sendContract} />:<></>}
        {consumerAuthentic?<ConsumerNavbar/>:<></>}
      =
        <Routes>
          <Route path="/" element={<ConsumerAuthentication />} />
          <Route path="/consumer/registration" element={<ConsumerFaceAuthentication />} />
          <Route path="/consumer/otp" element={<ConsumerOtp />} />
          <Route path="/consumer/microid" element={<ConsumerMicroid />} />
          <Route path="/consumer/form" element={<Form connect={sendContract} />} />
          <Route path="/consumer/login" element={<ConsumerLogin />} />
          <Route path="/consumer/home" element={<ConsumerHome />} />
          <Route path="/consumer/plans" element={<ConsumerPlans connect={sendContract}  metaMaskAddress= {metaMaskAddress}/>} />
          <Route path="/consumer/history" element={<ConsumerHistory />} />
          <Route path="/addConsumer" element={<AddConsumer connect={sendContract} />} />

          {/* Producer Routes */}
          <Route path="/ProducerSignup" element={<ProducerSignup />} />
          <Route path="/ProducerLogin" element={<ProducerLogIn />} />
          <Route path="/ProducerHome" element={<ProducerHome   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addProducer" element={<AddProducer   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addMicrogrid" element={<AddMicrogrid   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddBattery" element={<AddBattery   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddLoad" element={<AddLoad   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGreenEnergy" element={<AddGreenEnergy   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGrid" element={<AddGrid   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />

          <Route path="/JoinOrCreateMicroGrid" element={<JoinOrCreateMicroGrid  getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress}/>}/>
          <Route path="/ShowMicroGrid" element={<AvailableMicrogrid   />} />
          <Route path="/test" element={<Test  getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress}   />} />

        </Routes>
 
      </div>
    </Router>
  );
}
