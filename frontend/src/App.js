import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact ";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
import FAQ from "./components/FAQ";
import Aboutgns from "./components/Aboutgns";
import Myprofile from "./components/Myprofile";
import Sidenav from "./components/Sidenav";
import LoginEmailOtp from "./components/LoginEmailOtp";
import { isLoggedIn } from "./services/loginUser";
import Passreset from "./components/Passreset";
import Forgotpass from "./components/Forgotpass";
import EmailOtp from "./components/EmailOtp";
import EmailVarify from "./components/EmailVarify";
import Sell from "./components/Sell";
import Buy from "./components/Buy";
// import Kyc from "./components/Kyc"

function ProtectRoute({ children }) {
	const auth = isLoggedIn();
	return auth ? children : <Navigate to="/login" />;
}

function App() {
	return (
		<div className="A">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/FAQ" element={<FAQ />} />
					<Route path="/aboutgns" element={<Aboutgns />} />
					<Route
						path="/forgotpassword/:id/:token"
						element={<Forgotpass />}
					/>
					<Route path="/passreset" element={<Passreset />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/emailvarify" element={<EmailVarify />} />

					<Route
						path="/dashboard"
						element={
							<ProtectRoute>
								<Dashboard />
							</ProtectRoute>
						}
					/>

					<Route
						path="/wallet"
						element={
							<ProtectRoute>
								<Wallet />
							</ProtectRoute>
						}
					/>

					{/* <Route path ="/kyc" element={
            <ProtectRoute>
              <Kyc/>
            </ProtectRoute>
          }/> */}

					{/* <Route path ="/contact" element={

              <Contact/>
        
          }/> */}

					<Route
						path="/sidenav"
						element={
							<ProtectRoute>
								<Sidenav />
							</ProtectRoute>
						}
					/>

					<Route
						path="/myprofile"
						element={
							<ProtectRoute>
								<Myprofile />
							</ProtectRoute>
						}
					/>

					<Route
						path="/loginEmailOtp"
						element={
							// <ProtectRoute>
							<LoginEmailOtp />
						}
					/>
					{/* </ProtectRoute> */}

					<Route
						path="/sell"
						element={
							<ProtectRoute>
								<Sell />
							</ProtectRoute>
						}
					/>
					<Route
						path="/buy"
						element={
							<ProtectRoute>
								<Buy />
							</ProtectRoute>
						}
					/>

					<Route path="/emailotp" element={<EmailOtp />} />
				</Routes>
			</Router>
			{/* <Footer/> */}
			{/* <Dashboard /> */}
		</div>
	);
}

export default App;
