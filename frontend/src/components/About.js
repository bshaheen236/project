import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
	return (
		<div style={{ marginTop: "" }}>
			<Navbar />
			<section className="py-4 bg-info border-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-8 myp-auto">
							<h2> About Us </h2>
						</div>
						<div className="col-md-8 my-auto">
							{/* <h6 className='float-end' /> */}
						</div>
					</div>
				</div>
			</section>

			<section className="py-4 border-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-8 myp-auto">
							<h2>
								{" "}
								We’re Building For Billions And Crafting Stories
								Of Bold Transformation{" "}
							</h2>
						</div>
						<div className="col-md-8 my-auto">
							{/* <h6 className='float-end' /> */}
						</div>
					</div>
				</div>
			</section>

			<section className="section bg-c-light border-bottom">
				<div className="container">
					<h3 className="main-heading py-4">
						{" "}
						<span style={{ color: "black" }}>Neo</span>
						<span style={{ color: "red" }}>TRADE</span>{" "}
					</h3>
					<div className="underline" />
					<p>
						"On the other hand, we denounce with righteous
						indignation and dislike men who are so beguiled and
						demoralized by the charms of pleasure of the moment, so
						blinded by desire, that they cannot foresee the pain and
						trouble that are bound to ensue; and equal blame belongs
						to those who fail in their duty through weakness of
						will, which is the same as saying through shrinking from
						toil and pain. These cases are perfectly simple and easy
						to distinguish. In a free hour, when our power of choice
						is untrammelled and when nothing prevents our being able
						to do what we like best, every pleasure is to be
						welcomed and every pain avoided. But in certain
						circumstances and owing to the claims of duty or the
						obligations of business it will frequently occur that
						pleasures have to be repudiated and annoyances accepted.
						The wise man therefore always holds in these matters to
						this principle of selection: he rejects pleasures to
						secure other greater pleasures, or else he endures pains
						to avoid worse pains.
					</p>
				</div>
			</section>
			<br />

			<div
				className="container-fluid"
				style={{ background: "black", color: "white" }}
			>
				<div className="container mt-5  row">
					<div className="col-sm-6 mt-5">
						<h2>
							We are not different.
							<br /> We lead by creating difference
						</h2>
					</div>

					<div className="col-sm-6 mb-2 pt-3">
						<p>
							{" "}
							Engineering ideas to improvise lives, NeoSOFT over
							the past 25 years, has empowered ambitious
							change-makers around the world with sustained
							digital capabilities. We are a trusted Digital
							Engineering and Enterprise Modernization partner
							with offerings that enable our clients’ by creating
							a unique competitive advantage. While leaving room
							for continuous enhancement, NeoSOFT has leveraged
							the most in-demand technologies, methodologies, and
							framework components, for solving important client
							challenges. Combining deep technical competencies
							and industry experience, we ensure robustness,
							extensibility, and continuity in the solutions we
							deliver.
						</p>
					</div>
				</div>
			</div>

			<div className="container mt-5" style={{ textAlign: "center" }}>
				<h2 className="main-heading mb-5">
					{" "}
					<span style={{ color: "black" }}>Neo</span>
					<span style={{ color: "red" }}>TRADE</span> In The News{" "}
				</h2>
				<div className="underline" />
			</div>

			<div className="row mb-5">
				<div className="col-md-4 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Img
							variant="top"
							src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
						<Card.Body>
							<Card.Title>
								{" "}
								Gold Glitters Amid Positive Employment News{" "}
							</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-md-4 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Img
							variant="top"
							src="https://images.pexels.com/photos/8369687/pexels-photo-8369687.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
						<Card.Body>
							<Card.Title>
								{" "}
								Gold and Silver See Little Weekly Change, Yearly
								Gains{" "}
							</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-md-4 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Img
							variant="top"
							src="https://images.pexels.com/photos/8369695/pexels-photo-8369695.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
						<Card.Body>
							<Card.Title>
								{" "}
								Gold and Silver Oscillate Between Gains and
								Losses on Mixed Economic News{" "}
							</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>

			<section className="py-4 border-bottom">
				<div className="container review text-center">
					<h2>
						{" "}
						<span style={{ color: "black" }}>Neo</span>
						<span style={{ color: "red" }}>TRADE</span> Customer
						Reviews{" "}
					</h2>
					<p>
						Over 5,000 five star ratings on Shopper Approved.
						Excellent customer experience sets{" "}
						<span style={{ color: "black" }}>Neo</span>
						<span style={{ color: "red" }}>TRADE</span> apart from
						the competition.
					</p>
					<div className="col-md-8 my-auto">
						{/* <h6 className='float-end' /> */}
					</div>
				</div>
			</section>

			<div className="row mb-5">
				<div className="col-md-3 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Body>
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star-half-alt fa-lg text-warning " />
							<br />
							<div>
								<h5 className="mt-3">Mary Harrison</h5>
							</div>
							<h5>MD,United State</h5>
							<Card.Text className="mt-5">
								{" "}
								I always have had a great experience with
								GS.com. Now that there's so much more of a
								demand for silver it may take a little more time
								for orders, but even that being the case the
								customer service and quality of the silver
								rounds purchased are 100% immaculate.{" "}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-md-3 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Body>
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<br />
							<div>
								<h5 className="mt-3">Gary Nelson</h5>
							</div>
							<h5>AZ,United Kingdom</h5>
							<Card.Text className="mt-5">
								{" "}
								GoldSilver is my number resource for precious
								metals. With my many orders, I find their
								products to be high quality and their service
								exceeds my expectations with their friendliness
								and speediness.{" "}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-md-3 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Body>
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className=" " />
							<br />
							<div>
								<h5 className="mt-3">Ronaldo Wilkinson</h5>
							</div>
							<h5>Florida,Unites State</h5>
							<Card.Text className="mt-5">
								{" "}
								This is our second time buying silver from
								GoldSilver. This time we opted to get pure .999
								silver that was the companies choice and a
								little less than minted coins. We were very
								pleased we got all brand new coins that were
								really cool looking. We will be buying from them
								again!{" "}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div className="col-md-3 d-flex justify-content-center hover">
					<Card
						style={{ width: "18rem", textAlign: "center" }}
						className="stepCard"
					>
						<Card.Body>
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star fa-lg text-warning " />
							<div className="fas fa-star-half-alt fa-lg text-warning " />
							<br />
							<div>
								<h5 className="mt-3">Deanna Simpson</h5>
							</div>
							<h5>Arkansa,United Kindom</h5>
							<Card.Text className="mt-5">
								{" "}
								I am very happy with the follow-through efforts
								at GoldSilver. They sent me email responses
								whenever I asked a question, a confirmation
								email when I placed an order, another email when
								I sent in my photo ID, status reports letting me
								know{" "}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
			<Footer />
		</div>
	);
}
