import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../services/user";
import "react-toastify/dist/ReactToastify.css";
import { Loginbymail} from "../services/loginUser";
import Navbar from "./Navbar";
import "../SignUp.css";

function Signup() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [disableOtp, setDisable] = useState(true);
	const [disableEmail, setDisableEmail] = useState(false);
	const [isOn, setIsOn] = useState(true);

	const [inpOTP, setInpOTP] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const successAlert = () => {
		Swal.fire({
			title: "User Registered successfully",
			icon: "success",
		});
	};

	const successAlert2 = () => {
		Swal.fire({
			title: "User varification done successfully",
			icon: "success",
		});
	};

	// const cancelAlert = () => {
	// 	Swal.fire({
	// 		title: "User already registered",
	// 		icon: "error",
	// 	});
	// };

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	
	const handleOnChange = (e) => {
		setInpOTP(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inpOTP === "") {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else if (localStorage.getItem("otp") !== inpOTP) {
			toast.error("email is required!", {
				position: "top-center",
			});
		} else {
			successAlert2()
			navigate("/signup");
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
						setDisable(false);
						setDisableEmail(true);
						setIsOn(false);
						setEmail("");
						setMessage(true);

						localStorage.setItem("otp", result.data.otp);
						// navigate("/emailvarify");
					} else {
						toast.error("Invalid User", {
							position: "top-center",
						});
					}
				})
				.catch((err) => err);
		}
	};

	const ValidationSchema = Yup.object().shape({
		fname: Yup.string()
			.required("First Name is required")
			.matches(/^[a-zA-Z]+$/, "Only alphabate allow")
			.test(
				"is-full-name",
				"Please enter both fname and lname",
				(value = "") => value !== ""
			),

		lname: Yup.string()
			.required("last name is required")
			.matches(/^[a-zA-Z]+$/, "Only alphabate allow")
			.test(
				"is-full-name",
				"Please enter both fname and lname",
				(value = "") => value !== ""
			),
		email: Yup.string()
			.required("Email is required")
			.email("Email is invalid"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be atleast 6 characters")
			.max(40, "Password must not execeed 40 characters"),

		confirmPassword: Yup.string()
			.required("Confirm Password is required")
			.oneOf(
				[Yup.ref("password"), null],
				"Confirm Password doesnot match"
			),

		phone: Yup.string()
			.required("Phone number is required")
			.test(
				"phone-number",
				"Please enter your number",
				(value = "") => value.length === 10
			),
		acceptTerms: Yup.bool().oneOf([true], "Accept term is required"),
	});
	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
			acceptTerms: false,
		},
		validationSchema: ValidationSchema,
		onSubmit: (data) => {
			addUser(data).then((res) => {
				if (res.data.statusCode === 201) {
					successAlert();

					navigate("/login");
				}
			});
			// cancelAlert().catch((err) => {
			// 	err;
			// });
		},
	});

	return (
		<>
			<Navbar />
			<div className="signup_container font ">
				<div className=" signup_form_container row">
					<div className="left col-sm-3">
						<h1>Welcome Back</h1>
						<Link to="/login">
							<button type="button" className="white_btn">
								Sing in
							</button>
						</Link>
					</div>
					<div className="right col">
						{message ? (
							<p
								style={{
									color: "green",
									fontWeight: "bold",
								}}
							>
								varification done
							</p>
						) : (
							""
						)}
						<form
							className="form_container"
							onSubmit={formik.handleSubmit}
						>
							<h2 className="regis pt-2">REGISTER</h2>

							<input
								type="text"
								placeholder="First Name"
								name="fname"
								onChange={formik.handleChange}
								value={formik.values.fname}
								className="input"
							/>

							{formik.errors.fname && formik.touched.fname ? (
								<div className="alert alert-danger">
									{formik.errors.fname}
								</div>
							) : (
								""
							)}
							<input
								type="text"
								placeholder="Last Name"
								name="lname"
								onChange={formik.handleChange}
								value={formik.values.lname}
								className="input"
							/>

							{formik.errors.lname && formik.touched.lname ? (
								<div className="alert alert-danger">
									{formik.errors.lname}
								</div>
							) : (
								""
							)}
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
								className="input"
							/>
							{formik.errors.email && formik.touched.email ? (
								<div className="alert alert-danger">
									{formik.errors.email}
								</div>
							) : (
								""
							)}

							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={formik.handleChange}
								value={formik.values.password}
								className="input"
							/>
							{formik.errors.password && formik.touched.password ? (
								<div className="alert alert-danger">
									{formik.errors.password}
								</div>
							) : (
								""
							)}
							<input
								type="password"
								className="input"
								name="confirmPassword"
								placeholder="Confirm  password"
								onChange={formik.handleChange}
								value={formik.values.confirmPassword}
							/>
							{formik.errors.confirmPassword &&
								formik.touched.confirmPassword ? (
								<div className="alert alert-danger">
									{formik.errors.confirmPassword}
								</div>
							) : (
								""
							)}

							<input
								type="text"
								placeholder="Enter number"
								name="phone"
								onChange={formik.handleChange}
								value={formik.values.phone}
								className="input"
							/>
							{formik.errors.phone && formik.touched.phone ? (
								<div className="alert alert-danger">
									{formik.errors.phone}
								</div>
							) : (
								""
							)}
							<div className="up">
								<Button
									className="bg-primary text-white"
									onClick={handleShow}
								>
									Please verify your email
								</Button>
							</div>
							<div className="row accept">
								<div className="mt-4 text-center">
									<input
										type="checkbox"
										name="acceptTerms"
										onChange={formik.handleChange}
									/>
									<label
										htmlFor="checkbox-2"
										className="checkbox__label"
									>
										I accept terms and conditions
									</label>
									{formik.errors.acceptTerms &&
										formik.touched.acceptTerms ? (
										<div className="alert alert-danger">
											setMessage
											{formik.errors.acceptTerms}
										</div>
									) : (
										""
									)}
								</div>

								<div className="up">
									<button type="submit" className="green_btn" >
										Sing Up
									</button>

									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title  className="up">
												Verfify your email to register
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
												<Form.Group
													className="mb-3"
													controlId="exampleForm.ControlInput1"
												>
													<Form.Control
														type="email"
														placeholder="Enter email"
														autoFocus
														disabled={disableEmail}
														value={email}
														onChange={setVal}
													/>
												</Form.Group>

												<Form.Group
													className="mb-3"
													controlId="exampleForm.ControlInput1"
												>
													<Form.Control
														type="text"
														placeholder="Enter otp"
														autoFocus
														disabled={disableOtp}
														value={inpOTP}
														onChange={handleOnChange}
													/>
												</Form.Group>
												<ToastContainer />
												{/* <Button
													variant="info"
													onClick={sendLink}
												>
													Submit
												</Button> */}
												{isOn ? (
													<Button color="info" onClick={sendLink}>
														Submit
													</Button>
												) : (
													<Button
														color="info"
														onClick={handleSubmit}
													>
														Verfify
													</Button>
												)}
											</Form>
										</Modal.Body>
									</Modal>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;
