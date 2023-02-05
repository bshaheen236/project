import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { isLoggedIn, signin, isAdmin } from "../services/loginUser";
import SignIn from "./googleSignin/SignIn";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import "../Login.css";

function Login() {
	const navigate = useNavigate();

	// const [token,setToken] = useState("")
	// const [errMsg,setErrMsg]=useState("");

	const [data, setdata] = useState({
		email: "",
		password: "",
	});
	const [emailErr, setEmailErr] = useState(false);
	const [passwordErr, setPasswordErr] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setdata({
			...data,
			[name]: value,
		});
		setEmailErr(false);
		setPasswordErr(false);
	};
	const successAlert = () => {
		Swal.fire({
			title: "Login successfully",
			icon: "success",
		});
	};

	const cancelAlert = () => {
		Swal.fire({
			title: "Invalid email or password",
			icon: "cancelled",
		});
	};
	const Login = (e) => {
		e.preventDefault();
		const eRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		const pwdRegex = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
		if (data.email === "" || !eRegex.test(data.email)) {
			setEmailErr(true);
		}if (data.password === "" || !pwdRegex.test(data.password)) {
			setPasswordErr(true);
		} else {
			signin(data)
				.then((res) => {
					if (res.data.statusCode === 200) {
						successAlert();

						localStorage.setItem("token", res.data.token);
						isLoggedIn();
						isAdmin();
						navigate("/dashboard");
					} else {
						cancelAlert();
					}
				})
				.catch((err) => err);
		}
	};

	return (
		<>
			<Navbar />
			<div className="signup_container font">
				<div className=" signup_form_container row">
					<div className="left col-sm-3">
						<h1>New User</h1>
						<p style={{ color: "rgb(221, 191, 58)" }}>
							Please register first
						</p>

						<Link to="/SignUp">
							<button type="button" className="white_btn">
								Sing Up
							</button>
						</Link>
					</div>
					<div className="right col">
						<form className="form_container">
							<h3>LOGIN </h3>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className="input"
							/>

							{emailErr ? (
								<div className="text-muted "style={{alignItems:"right"}}>
									<p className="text-danger">
										{" "}
										Enter Email
									</p>
								</div>
							) : (
								false
							)}
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className="input"
							/>
							{passwordErr ? (
								<Form.Text className="text-muted ">
									<p className="text-danger text-right">
										{" "}
										Enter Password{" "}
									</p>
								</Form.Text>
							) : (
								false
							)}

							<div className="col">
								<span>
									<a
										href="/passreset"
										style={{
											fontSize: "12px",
											paddingLeft: "240px",
										}}
									>
										Forgot Password?
									</a>
								</span>
							</div>

							<button
								type="submit"
								className="green_btn"
								href="/"
								onClick={Login}
							>
								login
							</button>

							<div className="login throu">
								<SignIn />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
export default Login;
