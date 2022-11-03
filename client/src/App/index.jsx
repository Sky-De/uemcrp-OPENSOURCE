import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "../components/Auth"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import { classes, Root } from "./styles"
import { useState } from "react"
import { students } from "../data/users"
import {
	AdmitCard, //
	ChangePassword,
	OrganisationalCalander,
	Bills,
	Payduefees,
	UniversityMarkingSystem,
	UpdateInfo,
	UnitTestDetails,
	Attendance,
} from "../components/studentModules"

const App = () => {
	const test = null || students[0]
	const [user, setUser] = useState(test)

	const updateUserInfo = user => {
		setUser(user);
	}

	return (
		<BrowserRouter>
			<Root className={classes.root}>
				<Navbar user={user} setUser={setUser} />
				<Routes>
					<Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
					<Route path="/auth" element={user ? <Navigate to="/" /> : <Auth setUser={setUser} />} />
					{/*STUDENT MODULES*/}
					<Route path="/changePassword" element={user ? <ChangePassword /> : <Navigate to="/" />} />
					<Route path="/admitCard" element={<AdmitCard user={user} />} />
					<Route path="/calendar" element={<OrganisationalCalander />} />
					<Route path="/feesReciept" element={user ? <Bills user={user} /> : <Navigate to="/" />} />
					<Route path="/fees" element={user ? <Payduefees user={user} /> : <Navigate to="/" />} />
					<Route path="/result" element={<UniversityMarkingSystem user={user} />} />
					<Route path="/update" element={<UpdateInfo user={user} updateUserInfo={updateUserInfo} />} />
					<Route path="/marks" element={<UnitTestDetails />} />
					<Route path="/attendance" element={user ? <Attendance /> : <Navigate to="/" />} />
				</Routes>
			</Root>
		</BrowserRouter>
	)
}

export default App
