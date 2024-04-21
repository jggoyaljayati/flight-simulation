import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Button from "@mui/material/Button";
import FileInput from "@react-file-input";
import { FileUploader } from "react-drag-drop-files";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import OutlinedInput from "@mui/material/OutlinedInput"; // Importing OutlinedInput
import Checkbox from "@mui/material/Checkbox"; // Importing Checkbox
import ListItemText from "@mui/material/ListItemText";

const fileTypes = ["py"];

export function DashboardSidePanel({ onRunTests }) {
  const [terrain, setTerrain] = useState("");
  const [aircraftModel, setAircraftModel] = useState("");
  const [runtime, setRuntime] = useState("");
  const [sensors, setSensors] = useState([]);
  const [language, setLanguage] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(32); // State for temperature slider
  const [windVelocity, setWindVelocity] = useState(0); // State for wind velocity slider

  const sensorOptions = ["Camera", "Depth", "Heat", "Infrared", "Ultrasonic"];

  const handleSensorChange = (event) => {
    const {
      target: { value },
    } = event;
    setSensors(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const [value, setValue] = React.useState<number>(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: ".6rem",
          flexDirection: "column",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <div
          class="group1"
          style={{
            width: "98%",
            height: "100px",
            display: "flex",
            gap: "1rem",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="terrain-label">Terrain</InputLabel>
            <Select
              labelId="terrain-label"
              value={terrain}
              label="Terrain"
              onChange={handleChange(setTerrain)}
              class="formInput"
            >
              <MenuItem value="Mountains">Mountains</MenuItem>
              <MenuItem value="Cityscape">Cityscape</MenuItem>
              <MenuItem value="Desert">Desert</MenuItem>
              <MenuItem value="Forest">Forest</MenuItem>
              <MenuItem value="Ocean">Ocean</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="aircraft-model-label">Aircraft Model</InputLabel>
            <Select
              labelId="aircraft-model-label"
              value={aircraftModel}
              label="Aircraft Model"
              onChange={handleChange(setAircraftModel)}
            >
              <MenuItem value="A320">A320</MenuItem>
              <MenuItem value="B737">B737</MenuItem>
              <MenuItem value="C172">C172</MenuItem>
              <MenuItem value="F22">F22</MenuItem>
              <MenuItem value="A380">A380</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="runtime-env-label">Runtime</InputLabel>
            <Select
              labelId="runtime-env-label"
              value={runtime}
              label="Runtime"
              onChange={handleChange(setRuntime)}
            >
              <MenuItem value="Python">Python</MenuItem>
              <MenuItem value="C++">C++</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="Ruby">Ruby</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div
          class="group2"
          style={{
            width: "98%",
            height: "100px",
            display: "flex",
            gap: "1rem",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="virtual-sensors-label">Virtual Sensors</InputLabel>
            <Select
              labelId="virtual-sensors-label"
              multiple
              value={sensors}
              onChange={handleSensorChange}
              input={<OutlinedInput label="Virtual Sensors" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {sensorOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={sensors.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="programming-lang-label">
              Programming Language
            </InputLabel>
            <Select
              labelId="programming-lang-label"
              value={language}
              label="Programming Language"
              onChange={handleChange(setLanguage)}
            >
              <MenuItem value="Python">Python</MenuItem>
              <MenuItem value="C++">C++</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="Go">Go</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="weather-label">Weather</InputLabel>
            <Select
              labelId="weather-label"
              value={weather}
              label="Weather"
              onChange={handleChange(setWeather)}
            >
              <MenuItem value="Sunny">Sunny</MenuItem>
              <MenuItem value="Cloudy">Cloudy</MenuItem>
              <MenuItem value="Rainy">Rainy</MenuItem>
              <MenuItem value="Snowy">Snowy</MenuItem>
              <MenuItem value="Windy">Windy</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div class="group3" style={{ width: "80%" }}>
          <InputLabel>Temperature (°F): {temperature}</InputLabel>
          <Slider
            aria-label="Temperature"
            value={temperature}
            onChange={(e, newValue) => setTemperature(newValue)}
            min={-4}
            max={200}
          />

          <InputLabel>Wind Velocity (mph): {windVelocity}</InputLabel>
          <Slider
            aria-label="Wind Velocity"
            value={windVelocity}
            onChange={(e, newValue) => setWindVelocity(newValue)}
            min={0}
            max={50}
          />

          <div style={{ display: "flex", gap: ".5rem" }}>
            <InputLabel> Upload code</InputLabel>
            <FileUploader
              handleChange={handleFileChange}
              name="file"
              types={fileTypes}
            />

            <InputLabel>Upload custom test cases</InputLabel>

            <FileUploader
              handleChange={handleFileChange}
              name="file"
              types={fileTypes}
            />
          </div>
        </div>
        <Button
          variant="contained"
          color="success"
          onClick={() => onRunTests()}
        >
          Run tests
        </Button>
        <Button
          startIcon={<AutoAwesomeIcon />}
          variant="contained"
          color="success"
          onClick={() => onRunTests()}
        >
          Generate tests
        </Button>
      </div>
    </>
  );
}
