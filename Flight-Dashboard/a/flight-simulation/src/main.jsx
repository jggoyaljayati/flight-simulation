import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import "./index.css";

export function Simulation({isAirplanVisible, isLandScapeVisible}) {
	return (
		<>
			<Canvas shadows>
				<Suspense fallback={null}>
					<App isAirplanVisible={ isAirplanVisible } isLandScapeVisible={ isLandScapeVisible }/>
				</Suspense>
			</Canvas>
		</>
	)
}