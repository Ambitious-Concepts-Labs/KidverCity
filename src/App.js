import React, { useContext } from 'react';
import "./App.css";
import * as Screens from "./screens/all";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext }from './firebaseAuthContext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
	const authValue=useContext(AuthContext)
	const [user, loading, error] = useAuthState(auth);

	return (
		<div className="App relative overflow-x-hidden">
			<BrowserRouter>
				<Routes>
					{/* Login/Signup */}

					<Route path="/login" element={<Screens.LoginScreen />} />

					<Route path="/signup" element={<Screens.SignUpScreen />} />

					<Route path="/forgot" element={<Screens.ForgotPasswordScreen />} />

					<Route path="/reset" element={<Screens.ResetPasswordScreen />} />

					{/* Home/About */}

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
					
					<Route path='*' exact={true} component={<>Test</>} />

				    {/* Dashboard */}

					<Route path="/dashboard" element={<Screens.AdminDashboard user={user} authValue={authValue} />} /> 
				
					<Route path="/profile" element={<Screens.AdminProfile user={user} />} />

					<Route path="/assesment" element={<Screens.AdminAssesment />} />

					<Route path="/suggestions" element={<Screens.AdminSuggestions />} />

					<Route path="/rewards" element={<Screens.AdminRewards />} />

					<Route path="/purchase" element={<Screens.AdminPurchase />} />

					<Route path="/thankyou" element={<Screens.AdminThankyou />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

//RESPONSIVE
// Home
// Footer
