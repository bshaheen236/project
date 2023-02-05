import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Loginbymail } from "../services/loginUser";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useUserAuth } from "../context/UserAuthContext";
// import Dashboard from "./Dashboard";
import "../LoginEmailOtp.css";
import Navbar from "./Navbar";

function LoginEmailOtp() {
	const navigate = useNavigate();

	// refrence
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	const sendLink = async (e) => {
		e.preventDefault();

		// console.log(email);

		if (email === "") {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else if (!email.includes("@")) {
			toast.warning("includes @ in your email!", {
				position: "top-center",
			});
		} else {
			Loginbymail({ email })
				.then((result) => {
					if (result.data.statusCode === 200) {
						setEmail("");
						setMessage(true);

						// set
						// console.log("otp", result.data.data.otp);

						localStorage.setItem("otp", result.data.otp);
						localStorage.setItem("token", result.data.token);
						navigate("/emailotp");
					} else {
						toast.error("Invalid User", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);
		}
	};

	return (
		<>
			<Navbar />
			<div
				className="container-fluid pt-5 "
				style={{ marginTop: "50px" }}
			>
				<div
					className="row mx-4"
					style={{ marginTop: "40px", marginBottom: "30px" }}
				>
					<div className=" clr " style={{ textAlign: "center" }}>
						<div
							className="login text-dark"
							style={{ backgroundColor: "whiteSmoke" }}
						>
							<h2 className="mb-3 text-primary">
								{" "}
								Login with Email OTP{" "}
							</h2>

							<p style={{ fontSize: "12px" }}>
								Please enter your email address to login
							</p>
							{message ? (
								<p
									style={{
										color: "green",
										fontWeight: "bold",
									}}
								>
									pasword reset link send Succsfully in Your
									Email
								</p>
							) : (
								""
							)}
							<Form
								style={{ marginLeft: "20px" }}
								autoComplete="off"
							>
								<Form.Group
									className="mb-3"
									controlId="formBasicEmail"
								>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										className="border border-secondary"
										type="email"
										placeholder="Enter email"
										name="email"
										value={email}
										onChange={setVal}
									/>
								</Form.Group>

								{/* <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>OTP</Form.Label>
                                    <Form.Control className="border border-secondary" type="otp" placeholder="Enter OTP" name="OTP" value={otp} onChange={setotp} />
                                </Form.Group> */}

								<Button
									className="bg-primary mt-2 w-50"
									type="button"
									href="/"
									onClick={sendLink}
								>
									Send
								</Button>
							</Form>
							<ToastContainer />
							<div
								className="row pt-3"
								style={{ marginBottom: "20px" }}
							>
								<div
									className="col-sm-5"
									style={{ textAlign: "right" }}
								>
									<span>
										<a href="/login">
											Click here to login 👈
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginEmailOtp;
