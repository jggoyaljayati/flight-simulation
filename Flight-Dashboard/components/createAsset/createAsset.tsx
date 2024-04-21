import React, { useState, useEffect } from 'react';
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useSignAndExecuteTransactionBlock, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../../src/networkConfig";
import { NavBar } from "../navBar/navBar";
import { MultiSelect } from "../multiSelect/multiSelect";
import { HorizontalCardScroll } from "../horizontalCardScroll/horizontalCardScroll";
import { SuccessTransitionAlerts } from "../alert/success";
import { FailTransitionAlerts } from "../alert/fail";
import { FileUploader } from "react-drag-drop-files";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import "./createAsset.css";
import { DashboardSidePanel } from "../dashboardSidePanel/dashboardSidePanel";
import { MultiLineChart } from "../multiLineChart/multiLineChart";
import { InferenceLogs } from "../inferenceLogs/inference";
import { TestCaseValidator } from "../testCaseValidator/testCaseValidator";
import { Simulation } from "../../a/flight-simulation/src/main";


const fileTypes = ["JPG", "PNG", "GIF"];


const backgroundStyle = {
  width: '100vw',
  height: '100vh',
  backgroundColor: "#051329",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // padding: "1rem"
};

// Add this style for the form container
const formContainerStyle = {
  // padding: "1rem",
  width: '80vw',
  maxWidth: '500px', // Set a max width if you want to limit how wide the form can go
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem", // Spacing between children
};


export function CreateAsset({ onMinted }) {


  const [testResultsVisible, setTestResultsVisible] = useState(false);
  const [debugVisible, setDebugVisible] = useState(false);
  const [isAirplanVisible, setisAirplanVisible] = useState(false);
  const [debugType, setdebugType] = useState(1);
  let [graphData, setGraphData] = useState([]);

  // Callback to trigger from DashboardSidePanel
  const handleRunTests = () => {
    setTestResultsVisible(true);  // This could trigger fetching or generating results
  };

  const handleAirplaneVisibility = () => {
    console.log("enabliing airplane")
    setisAirplanVisible(true);
  };

  const handleGraphData = (newItem) => {
    setGraphData([...graphData, newItem]);  // This could trigger fetching or generating results
  };

  const enableDebugging = (type) => {
    console.log("setting type");
    console.log(type);
    setdebugType(type);
    console.log("type set");
    console.log(type);
    setDebugVisible(true);  // This could trigger fetching or generating results
  };
  
  
  return (
        <>
          <NavBar />
      <div style={backgroundStyle} >
        <div class="group1">
          <div class="canvas">
            <Simulation isAirplanVisible={isAirplanVisible} isLandScapeVisible={true}/>
            </div>
          <div class="sidePanel">
          
  
            <DashboardSidePanel onRunTests={handleRunTests} />
          

        </div>
        </div>
        <div class="group2">
          <div class="timeLine">{debugVisible && <MultiLineChart graphData={graphData}/>}</div>
          <div class="inferenceLogs">{debugVisible && <InferenceLogs type={debugType} handleGraphData={handleGraphData}/>}</div>
          <div class="testCases">{testResultsVisible && <TestCaseValidator enableDebugging={enableDebugging} handleAirplaneVisibility={handleAirplaneVisibility}/>}</div>
        </div>
        
        
          
        </div >
      
      </>
      
      
  );
}
