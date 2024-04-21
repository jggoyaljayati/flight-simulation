import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


export function TestCaseValidator({enableDebugging, handleAirplaneVisibility}) {
  const [testResults, setTestResults] = useState(new Array(5).fill(true));

  useEffect(() => {
    // Simulate test results
    setTestResults(testResults.map((result, index) => index !== 2));
  }, []);

  return (
    <div>
      <h2>Test Case Results</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {testResults.map((result, index) => (
          <li key={index} style={{ margin: '5px 0', color: result ? 'green' : 'red' }}>
            {result ? '✓' : '✕'} Test Case {index + 1}  <Button variant="contained" color="success" onClick={() => { enableDebugging(result ? 1 : 2); handleAirplaneVisibility();}}>Debug</Button>
          </li>
        ))}
      </ul>
      <div>
        Total Passed: {testResults.filter(Boolean).length} / {testResults.length}
      </div>
    </div>
  );
}
