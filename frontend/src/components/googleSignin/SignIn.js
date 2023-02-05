import React, { useState,useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate,useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Loginbymail, isLoggedIn, isAdmin,varifyOtp } from "../../services/loginUser";
import { auth, google, facebook } from "./config";
import "../../Signin.css";

function SignIn() {
	const { otp } = useParams();
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState(null);
	const [show, setShow] = useState(false);
	// const [disableOtp, setDisable] = useState(true);
	// const [disableEmail, setDisableEmail] = useState(false);
	const [isOn, setIsOn] = useState(true);
	const [isOn2, setIsOn2] = useState(true);

	const [inpOTP, setInpOTP] = useState("");
	const navigate = useNavigate();


	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");


	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	const handleOnChange = (e) => {
		setInpOTP(e.target.value);
	};

	const successAlert = () => {
		Swal.fire({
			title: "Login successfully",
			icon: "success",
		});
	};


	const userValid = async () => {
		varifyOtp(otp)
		.then((result) => {
			console.log("kya h ye", otp);
			if (result.status === 201) {
				console.log("correct otp")
			} else {
				(err) => err
			}
		})
		.catch((err) => err);
		console.log("kya h ye2");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inpOTP === "") {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else if (localStorage.getItem("otp") !== inpOTP) {
			toast.error("wrong OTP", {
				position: "top-center",
			});
		} else {
				successAlert();
				isLoggedIn();
				isAdmin();
				navigate("/dashboard");
			
		}
	};

	const sendLink = async (e) => {
		e.preventDefault();
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
						// setDisable(false);
						// setDisableEmail(true);
						setIsOn2(false)
						setIsOn(false);
						setEmail("");
						setMessage(true);

						// localStorage.setItem("otp", result.data.otp);
						localStorage.setItem("token", result.data.token);

						// navigate("/emailotp");
					} else {
						toast.error("Invalid User", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);
		}
	};

	const LoginTrue = () => {
		const navigate = useNavigate();

		localStorage.setItem("token", user.token);
			isLoggedIn()
			isAdmin();
			navigate("/dashboard");
		
	};

	const login = async (provider) => {
		const result = await signInWithPopup(auth, provider);
		setUser(result.user);
		setIsLogin(true);
	};

	useEffect(() => {
		userValid();
		setTimeout(() => {
			// setData(true)
		}, 3000);
	}, []);

	return (
		<div className="App font">
			<header className="App-header">
				{isLogin && user ? (
					<LoginTrue />
				) : (
					<div>
						<h4>-OR-</h4>
						<div className="row" style={{ marginLeft: "30px" }}>
							<div className="col-md-4">
								<div className="up">
									{/* <Link to="/loginEmailOtp"> */}
									<button
										type="button"
										onClick={handleShow}
										className="signin_btn"
									>
										<div className="row">
											{/* <i className="fa-solid fa-envelope"/> */}
											<img src="images/email.png" alt="img" width="42px" height="42px" />

										</div>
									</button>
									{/* </Link> */}
									{/* </div>
						<div className="up"> */}
									<div className="modal fade" role="dialog">
										<div className="modal-dialog" >
											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title className="up">
														Enter your email and OTP to login
													</Modal.Title>
												</Modal.Header>
												<Modal.Body className="up">
													{message ? (
														<p
															style={{
																color: "green",
																fontWeight: "bold",
															}}
														>
															An OTP sent to your mail
														</p>
													) : (
														""
													)}
													<Form>
														{isOn2 ? (
															<Form.Group
																className="mb-3 inp"

																controlId="exampleForm.ControlInput1"
															>
																<input
																	className="kuch"
																	style={{ border: "none", outline: "none" }}
																	type="email"
																	placeholder="Enter email"
																	// disabled={disableEmail}
																	value={email}
																	onChange={setVal}
																/>
															</Form.Group>
														) : (
															<Form.Group
																className="mb-3"
																controlId="exampleForm.ControlInput1"
															>
																<input
																	type="text"
																	className="kuch"
																	placeholder="Enter otp"
																	autoComplete="off"
																	// disabled={disableOtp}
																	value={inpOTP}
																	onChange={handleOnChange}
																/>
															</Form.Group>
														)}
														<ToastContainer />
													</Form>
												</Modal.Body>
												<Modal.Footer>
													{isOn ? (
														<Button className="btn btn-primary bttn" style={{ textAlign: "center", paddingTop: "7px" }} onClick={sendLink}>
															Submit
														</Button>
													) : (
														<Button
															className="btn btn-primary bttn" style={{ textAlign: "center", paddingTop: "7px" }}
															// className="pop"
															onClick={handleSubmit}
														>
															Verfify
														</Button>
													)}
												</Modal.Footer>
											</Modal>
										</div>
									</div>
								</div>

							</div>

							<div className="col-md-3">
								<button
									className="signin_btn "
									type="button"
									onClick={() => login(facebook)}
								>
									<div>
										{/* <i className=" social_icon fa-brands fa-facebook-f" /> */}
										<img src="images/facebook (2).png" alt="img" width="40px" height="40px" />
									</div>
								</button>
							</div>

							<div className="col-md-3">
								<button
									className="signin_btn "
									type="button"
									onClick={() => login(google)}
								>
									<div className="row">
										{/* <i className="social_icon fa-brands fa-google" /> */}
										<img src="images/google (1).png" alt="img" width="42px" height="42px" />
									</div>
								</button>
							</div>

						</div>






						{/* 
						<br /> */}


					</div>
				)}
			</header>
		</div>
	);
}
export default SignIn;
