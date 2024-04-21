import React, { useState, useEffect } from "react";
import {
  goFront,
  stopFront,
  goBack,
  stopBack,
  goLeft,
  stopLeft,
  goRight,
  stopRight,
  goStop,
  stopStop,
} from "../../a/flight-simulation/src/controls";

// goBack();
// setTimeout(stopBack, 1000);

function generateDummyData() {
  return [
    {
      camera: "Image_0",
      depth: 40.155524274749055,
      heat: 21.91853444500984,
      infrared: false,
      ultrasonic: 23.799836457391038,
      batteryLevel: 100,
      gpsPositioning: {
        lat: 35.68981631051572,
        lon: 139.69695024811767,
      },
      altitude: 549.1846246225954,
      attitude: {
        pitch: 1.2066799755856172,
        roll: 9.158345485471239,
        yaw: 3.212504424742918,
      },
      speed: {
        groundSpeed: 52.13992461982351,
        airSpeed: 101.30854874310877,
      },
      temperature: 22.5,
      windVelocity: 5.2,
      precipitation: 0.0,
      pressure: 1013,
    },
    {
      camera: "Image_1",
      depth: 57.65657088165447,
      heat: 30.240142447854147,
      infrared: true,
      ultrasonic: 4.849126136977777,
      batteryLevel: 90,
      gpsPositioning: {
        lat: 35.69909206737992,
        lon: 139.69653760010303,
      },
      altitude: 510.8853680695957,
      attitude: {
        pitch: 0.8154709373098246,
        roll: 1.28613904434827,
        yaw: 6.975666384487504,
      },
      speed: {
        groundSpeed: 51.02054680967374,
        airSpeed: 102.9411830601205,
      },
      temperature: 18.7,
      windVelocity: 3.5,
      precipitation: 1.2,
      pressure: 1017,
    },
    {
      camera: "Image_2",
      depth: 5.762982642454196,
      heat: 21.20508693427273,
      infrared: false,
      ultrasonic: 44.39834543635921,
      batteryLevel: 80,
      gpsPositioning: {
        lat: 35.69367004417965,
        lon: 139.70019431777624,
      },
      altitude: 500.8642984179522,
      attitude: {
        pitch: 3.6783752264040146,
        roll: 3.992468099393829,
        yaw: 6.9218514311534705,
      },
      speed: {
        groundSpeed: 51.50284216647187,
        airSpeed: 104.69023866140024,
      },
      temperature: 19.5,
      windVelocity: 7.0,
      precipitation: 0.0,
      pressure: 1021,
    },
    {
      camera: "Image_3",
      depth: 87.98089187785723,
      heat: 27.13514925104758,
      infrared: false,
      ultrasonic: 13.689642390423584,
      batteryLevel: 70,
      gpsPositioning: {
        lat: 35.697803512007646,
        lon: 139.69836681723814,
      },
      altitude: 503.675880371793,
      attitude: {
        pitch: 0.48866333978304977,
        roll: 8.523052077102715,
        yaw: 2.0844719113350054,
      },
      speed: {
        groundSpeed: 52.562542173957965,
        airSpeed: 100.3524975292054,
      },
      temperature: 21.0,
      windVelocity: 4.0,
      precipitation: 0.3,
      pressure: 1015,
    },
    {
      camera: "Image_4",
      depth: 82.52112337875577,
      heat: 33.595455494918994,
      infrared: false,
      ultrasonic: 27.740910375285864,
      batteryLevel: 60,
      gpsPositioning: {
        lat: 35.695166256177906,
        lon: 139.69618428536876,
      },
      altitude: 528.1349659005268,
      attitude: {
        pitch: 9.007967739625252,
        roll: 3.4166635958401184,
        yaw: 4.160255330540966,
      },
      speed: {
        groundSpeed: 51.44448578422261,
        airSpeed: 103.61721943573158,
      },
      temperature: 25.6,
      windVelocity: 2.5,
      precipitation: 0.0,
      pressure: 1012,
    },
    {
      camera: "Image_5",
      depth: 43.76423971400525,
      heat: 29.790707443726916,
      infrared: true,
      ultrasonic: 24.535877751876296,
      batteryLevel: 50,
      gpsPositioning: {
        lat: 35.69235551291196,
        lon: 139.70160945307995,
      },
      altitude: 543.0609470781039,
      attitude: {
        pitch: 1.6526309583421306,
        roll: 3.9494986949939292,
        yaw: 6.253703693357902,
      },
      speed: {
        groundSpeed: 54.24869858794018,
        airSpeed: 100.74174466373941,
      },
      temperature: 20.2,
      windVelocity: 6.3,
      precipitation: 2.4,
      pressure: 1009,
    },
    {
      camera: "Image_6",
      depth: 62.596104218692396,
      heat: 26.81902212767103,
      infrared: false,
      ultrasonic: 4.915995583719523,
      batteryLevel: 40,
      gpsPositioning: {
        lat: 35.69476948070892,
        lon: 139.69781353246952,
      },
      altitude: 515.411942264618,
      attitude: {
        pitch: 3.418032641978445,
        roll: 4.945922137460428,
        yaw: 5.594526122409697,
      },
      speed: {
        groundSpeed: 53.662085715684185,
        airSpeed: 100.14771307305078,
      },
      temperature: 18.3,
      windVelocity: 1.8,
      precipitation: 0.0,
      pressure: 1020,
    },
    {
      camera: "Image_7",
      depth: 99.22381800585069,
      heat: 32.90013824257083,
      infrared: true,
      ultrasonic: 9.736913337858633,
      batteryLevel: 30,
      gpsPositioning: {
        lat: 35.699437381999005,
        lon: 139.6998129685813,
      },
      altitude: 548.3854437884708,
      attitude: {
        pitch: 8.44548843872616,
        roll: 1.3482142742475356,
        yaw: 7.205268587497034,
      },
      speed: {
        groundSpeed: 52.494717395931495,
        airSpeed: 102.09208615533073,
      },
      temperature: 23.7,
      windVelocity: 3.9,
      precipitation: 5.5,
      pressure: 1008,
    },
    {
      camera: "Image_8",
      depth: 65.59681406765465,
      heat: 21.78112959435116,
      infrared: true,
      ultrasonic: 31.55415680861181,
      batteryLevel: 20,
      gpsPositioning: {
        lat: 35.691346644727545,
        lon: 139.69703536713217,
      },
      altitude: 523.9954077921933,
      attitude: {
        pitch: 5.502620613723439,
        roll: 4.682217331995488,
        yaw: 1.8730208483619637,
      },
      speed: {
        groundSpeed: 53.842155607802745,
        airSpeed: 101.41191723136212,
      },
      temperature: 24.1,
      windVelocity: 4.4,
      precipitation: 0.0,
      pressure: 1014,
    },
    {
      camera: "Image_9",
      depth: 51.024338071711604,
      heat: 22.66987414953126,
      infrared: true,
      ultrasonic: 31.391357328883302,
      batteryLevel: 10,
      gpsPositioning: {
        lat: 35.69839026057334,
        lon: 139.69354615020777,
      },
      altitude: 519.8404448281725,
      attitude: {
        pitch: 1.9449580276415024,
        roll: 0.21592055423179435,
        yaw: 8.706854189365492,
      },
      speed: {
        groundSpeed: 52.90930936705081,
        airSpeed: 104.43139664474793,
      },
      temperature: 22.3,
      windVelocity: 5.6,
      precipitation: 3.2,
      pressure: 1012,
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      camera: `Image_${i}`, // Simulating image data captured by camera
      depth: Math.random() * 100, // Depth in meters
      heat: 20 + Math.random() * 15, // Temperature in Celsius
      infrared: Math.random() > 0.5, // Boolean indicating detection of objects
      ultrasonic: Math.random() * 50, // Distance in meters
      batteryLevel: 100 - i * 10, // Battery level in percentage
      gpsPositioning: {
        lat: 35.6895 + Math.random() * 0.01,
        lon: 139.6917 + Math.random() * 0.01,
      }, // GPS coordinates
      altitude: 500 + Math.random() * 50, // Altitude in meters
      attitude: {
        pitch: Math.random() * 10,
        roll: Math.random() * 10,
        yaw: Math.random() * 10,
      }, // Attitude in degrees
      speed: {
        groundSpeed: 50 + Math.random() * 5,
        airSpeed: 100 + Math.random() * 5,
      }, // Speed in km/h
    });
  }
  return data;
}

function getDecisionsByType( type ) {
  console.log(type);
  if (type === 1) {
    return [
      { decision: "ascend", reason: "500m below safety zone" },
      { decision: "hold", reason: "reach optimal altitude" },
      { decision: "left", reason: "5° off course" },
      { decision: "right", reason: "correct path alignment" },
      { decision: "right", reason: "adjust for wind" },
      { decision: "hold", reason: "maintain current settings" },
      { decision: "descend", reason: "prepare for landing" },
      { decision: "right", reason: "final landing approach" },
      { decision: "left", reason: "final landing approach" },
      { decision: "stop", reason: "final landing approach" },
    ];
  } else {
    // return [
    //   { "decision": "ascend", "reason": "500m below safety zone" },
    //   { "decision": "hold", "reason": "reach optimal altitude" },
    //   { "decision": "left", "reason": "5° off course" },
    //   { "decision": "right", "reason": "correct path alignment" },
    //   { "decision": "right", "reason": "adjust for wind" },
    //   { "decision": "hold", "reason": "maintain current settings" },
    //   { "decision": "descend", "reason": "prepare for landing" },
    //   { "decision": "right", "reason": "final landing approach" },
    //   { "decision": "left", "reason": "final landing approach" },
    //   { "decision": "stop", "reason": "final landing approach" }
    // ];
    return [
      { decision: "descend", reason: "500m below safety zone" },
      { decision: "descend", reason: "reach optimal altitude" },
      { decision: "descend", reason: "5° off course" },
      { decision: "descend", reason: "correct path alignment" },
      { decision: "right", reason: "adjust for wind" },
      { decision: "hold", reason: "maintain current settings" },
      { decision: "descend", reason: "prepare for landing" },
      { decision: "right", reason: "final landing approach" },
      { decision: "left", reason: "final landing approach" },
      { decision: "stop", reason: "final landing approach" },
    ];
  }
}

export function InferenceLogs({ type, handleGraphData }) {
  const sensorData = generateDummyData();
  const decisions = getDecisionsByType(type);
  console.log("InferenceLogs: ", type);

  const [logs, setLogs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < decisions.length) {
      const intervalId = setInterval(() => {
        const currentData = sensorData[index];
        const currentDecision = decisions[index];
        const log = `${new Date().toISOString()} | Second ${index}: ${currentDecision.decision}. Reason: ${currentDecision.reason}. Data: Altitude=${currentData.altitude.toFixed(2)}m, Battery=${currentData.batteryLevel}%`;
        setLogs((prevLogs) => [...prevLogs, log]);

        handleGraphData({
          temperature: currentData.temperature,
          windVelocity: currentData.windVelocity,
          precipitation: currentData.precipitation,
          pressure: currentData.pressure,
        });

        // Execute corresponding control action
        executeDecision(currentDecision.decision);

        setIndex(index + 1);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [index, decisions, sensorData]);

  function executeDecision(decision) {
    switch (decision) {
      case "ascend":
        goBack(); // Simulates pressing 'S'
        setTimeout(stopBack, 100);

        break;
      case "descend":
        goFront(); // Simulates pressing 'W'
        setTimeout(stopFront, 100);
        break;
      case "left":
        goLeft(); // Simulates pressing 'A'
        setTimeout(stopLeft, 100);
        break;
      case "right":
        goRight(); // Simulates pressing 'D'
        setTimeout(stopRight, 100);
        break;
      case "hold":
        stopFront();
        stopBack();
        stopLeft();
        stopRight();
        break;
      case "stop":
        goStop();
        setTimeout(stopStop, 10000);
        break;
      default:
        console.log("Unknown decision");
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#0f0",
        fontFamily: "monospace",
        padding: "10px",
        height: "400px",
        overflowY: "auto",
      }}
    >
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
}
