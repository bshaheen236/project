import React from "react";
import "../Myprofile.css";
import { Link } from "react-router-dom";
import NavbarD from "./NavbarD";

export default function Myprofile() {
	return (
		<>
			<NavbarD />
			<div
				className="container emp-profile"
				style={{ marginTop: "120px" }}
			>
				<form method="post">
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
									alt=""
								/>
								<div className="file btn btn-lg btn-primary">
									Change Photo
									<input type="file" name="file" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
								<h5>Rasmita Kumari</h5>
								<h6>Web Developer and Designer</h6>
								<p className="proile-rating">
									Current Balance: <span>INR. 10,00,000</span>
								</p>
								<ul
									className="nav nav-tabs"
									id="myTab"
									role="tablist"
								>
									{/* <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li> */}
									<li className="nav-item">
										<Link href="/#">
											<a id="profile-tab">KYC Detail</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<button type="button">
								<a
									className="nav-link"
									id="profile-tab"
									// navigate="/Editpro"
								>
									Edit Profile
								</a>
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-work" />
						</div>
						<div className="col-md-8">
							<div
								className="tab-content profile-tab"
								id="myTabContent"
							>
								<div
									className="tab-pane fade show active"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												User Id
											</label>
										</div>
										<div className="col-md-6">
											<p>Kshiti123</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												{" "}
												First Name
											</label>
										</div>
										<div className="col-md-6">
											<p>Rasmita</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Last Name
											</label>
										</div>
										<div className="col-md-6">
											<p>Kumari</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Email
											</label>
										</div>
										<div className="col-md-6">
											<p>ras@gmail.com</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Phone
											</label>
										</div>
										<div className="col-md-6">
											<p>123 456 7890</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Profession
											</label>
										</div>
										<div className="col-md-6">
											<p>Web Developer and Designer</p>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="profile"
									role="tabpanel"
									aria-labelledby="profile-tab"
								>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Experience
											</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Hourly Rate
											</label>
										</div>
										<div className="col-md-6">
											<p>10$/hr</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Total Projects
											</label>
										</div>
										<div className="col-md-6">
											<p>230</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												English Level
											</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Availability
											</label>
										</div>
										<div className="col-md-6">
											<p>6 months</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<label
												htmlFor="checkbox-2"
												className="checkbox__label"
											>
												Your Bio
											</label>
											<br />
											<p>Your detail description</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
