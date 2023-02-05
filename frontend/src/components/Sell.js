import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarD from "./NavbarD";

export default function Sell() {
	const success = (data) =>
		toast.success(data, { position: toast.POSITION.TOP_CENTER });

	const submitMsg = (e) => {
		e.preventDefault();
		success("You have succeefully buy your gold");
	};

	return (
		<>
		<NavbarD/>
		<Tabs
			defaultActiveKey="gold"
			id="uncontrolled-tab-example"
			className="mb-5 mt-3"
		>
			<Tab eventKey="gold" title="Gold">
				<div className="container bg-light">
					<ToastContainer />
					<div className="row">
						<div className="col-xs-12 col-md-8">
							<div className="byugold-section">
								<div className="tabbed-block">
									<div className="tab-content">
										<div className="gold-row">
											<div className="gold-col">
												<div className="icon">
													<img
														src="https://www.digigold.com/media/original/public/content/dYFule3YelOYz0axfHKLnSwI7yE8ReHhcqllCYL0.png"
														alt="gold-icon"
													 />
													&nbsp; &nbsp;
													<span>
														Live Sell Gold Price{" "}
													</span>
												</div>
												&nbsp; &nbsp; &nbsp;
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<label htmlFor="checkbox-2"
                                                    className="checkbox__label">
													₹5852.5<sub>/gm</sub>
												</label>
												&nbsp;
												<img
													src="https://www.digigold.com/media/original/public/content/vgIEtmW5myuJI6s5PBNefMSrn50kttif8gUYnZpU.gif"
													alt="brodcast-icon"
													width="90"
												 />
											</div>
										</div>

										<div className="quickbuy-row mt-3">
											<div className="headings">
												<h3> Quick Sell </h3>
											</div>
											<div className="row ">
												<div className="col-md-6">
													<label htmlFor="buy_amount_in_rs">
														{" "}
														Quantity{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountRs"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_rs"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Price{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Duration{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Trade Amount{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Profit{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Loss{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="btnrow">
													<button
                                                        type="button"
														className="btn buynow-btn btn btn-warning"
														data-toggle="modal"
														data-target="#popup-login-form-popup"
														onClick={submitMsg}
													>
														Sell Now
														<img
															src="https://www.digigold.com/media/original/public/content/lbSV71aXZqKMTLSJLuJd3tGgkP51RmACFKj6mCFg.png"
															alt=""
														/>
													</button>
												</div>
											</div>

											<div className="warning mt-3">
												<p style={{ color: "red" }}>
													<img
														src="https://www.digigold.com/media/original/public/content/droucVVDbbEIP6BRZIfMzueHZAchObKR16DvOHZW.png"
														alt=""
													/>{" "}
													&nbsp; For Security reason ,
													to buy gold we’ll need to
													verify your PAN details.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Tab>
			<Tab eventKey="silver" title="Silver">
				<div className="container">
					<ToastContainer />
					<div className="row">
						<div className="col-xs-12 col-md-8">
							<div className="byugold-section">
								<div className="tabbed-block">
									<div className="tab-content">
										<div className="gold-row">
											<div className="gold-col">
												<div className="icon">
													<img
														src="https://www.digigold.com/media/original/public/ImageMedia/COUHmLJaUaXdThC7EaTEsUjdspZrCD5QxVF1vnPt.png"
														alt="silver-icon"
													 />
													&nbsp; &nbsp;
													<span>
														Live Sell Sliver Price{" "}
													</span>
												</div>
												&nbsp; &nbsp; &nbsp;
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<label
                                                htmlFor="checkbox-2"
                                                className="checkbox__label">
													₹69.69<sub>/gm</sub>
												</label>
												&nbsp;
												<img
													src="https://www.digigold.com/media/original/public/content/vgIEtmW5myuJI6s5PBNefMSrn50kttif8gUYnZpU.gif"
													alt="brodcast-icon"
													width="90"
												 />
											</div>
										</div>

										<div className="quickbuy-row mt-3">
											<div className="headings">
												<h3>Quick Sell</h3>
											</div>
											<div className="row ">
												<div className="col-md-6">
													<label htmlFor="buy_amount_in_rs">
														{" "}
														Quantity{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountRs"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_rs"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Price{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Duration{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Trade Amount{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Profit{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="col-md-6">
													<label htmlFor="buy_amount_in_gm">
														{" "}
														Loss{" "}
													</label>{" "}
													&nbsp;
													<input
														type="text"
														name="amountGm"
														maxLength="7"
														className="text-field"
														id="buy_amount_in_gm"
														autoComplete="off"
														required="true"
														aria-required="true"
													/>
												</div>

												<div className="btnrow">
													<button
                                                        type="button"
														className="btn buynow-btn btn btn-warning"
														data-toggle="modal"
														data-target="#popup-login-form-popup"
														onClick={submitMsg}
													>
														Sell Now
														<img
															src="https://www.digigold.com/media/original/public/content/lbSV71aXZqKMTLSJLuJd3tGgkP51RmACFKj6mCFg.png"
															alt=""
														/>
													</button>
												</div>
											</div>

											<div className="warning mt-3">
												<p style={{ color: "red" }}>
													<img
														src="https://www.digigold.com/media/original/public/content/droucVVDbbEIP6BRZIfMzueHZAchObKR16DvOHZW.png"
														alt=""
													/>{" "}
													&nbsp; For Security reason ,
													to buy gold we’ll need to
													verify your PAN details.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Tab>
		</Tabs>
		</>
	);
}
