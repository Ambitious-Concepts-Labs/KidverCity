import "./App.css";
import * as Screens from "./screens/all";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App relative overflow-x-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Screens.HomeScreen />} />

					<Route path="/about-us" element={<Screens.AboutScreen />} />

					<Route path="/academics" element={<Screens.AcademicsScreen />} />

					<Route path="/facilities" element={<Screens.FacilitiesScreen />} />

					<Route path="/our-works" element={<Screens.WorksScreen />} />

					<Route path="/student-life" element={<Screens.StudentScreen />} />

					<Route
						path="/admission-and-aid"
						element={<Screens.AdmissionScreen />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

//RESPONSIVE
// Home
// Footer
