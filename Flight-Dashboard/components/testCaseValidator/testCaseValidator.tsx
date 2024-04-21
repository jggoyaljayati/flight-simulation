import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import BugReportIcon from "@mui/icons-material/BugReport";

export function TestCaseValidator({
  enableDebugging,
  handleAirplaneVisibility,
}) {
  const [testResults, setTestResults] = useState(new Array(5).fill(true));

  useEffect(() => {
    // Simulate test results
    setTestResults(testResults.map((result, index) => index !== 2));
  }, []);

  return (
    <div>
      <h2>Test Case Results</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {testResults.map((result, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px 5px",
              color: result ? "green" : "red",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {result ? "✓" : "✕"} Test Case {index + 1}
            </span>
            <Button
              style={{ marginRight: "10px" }}
              startIcon={<BugReportIcon />}
              variant="contained"
              size="small" // Set the size of the button to small
              color="success"
              onClick={() => {
                enableDebugging(result ? 1 : 2);
                handleAirplaneVisibility();
              }}
            ></Button>
          </li>
        ))}
      </ul>
      <div>
        Total Passed: {testResults.filter(Boolean).length} /{" "}
        {testResults.length}
      </div>
    </div>
  );
}
