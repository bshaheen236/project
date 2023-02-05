import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isLoggedIn, isAdmin } from "../services/loginUser";

function EmailOtp() {
	const [inpOTP, setInpOTP] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleOnChange = (e) => {
		// console.log(e.target.value);
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
			setMessage(true);
			isLoggedIn();
			isAdmin();
			navigate("/dashboard");
		}
	};
	return (
		<div
			className="modal show"
			style={{ display: "block", position: "initial" }}
		>
			<Modal.Dialog className="field">
				<Modal.Header closeButton>
					Enter an otp sent to your register email id
				</Modal.Header>

				<Modal.Body className="field">
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
					<Form.Group
						className="  mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label>Enter Otp</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter otp"
							autoFocus
							value={inpOTP}
							onChange={handleOnChange}
						/>
					</Form.Group>
					<ToastContainer/>
				</Modal.Body>

				<Modal.Footer>
					<Button className="pop" onClick={handleSubmit}>
						Verfify
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}
export default EmailOtp;
