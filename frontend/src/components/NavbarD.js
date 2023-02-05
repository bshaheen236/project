import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
	return (
		<Navbar
			fixed="top"
			style={{
				backgroundColor: "white",
				width: "80%",
				marginLeft: "270px",
			}}
		>
			<Container fluid>
				<Navbar.Brand href="/sidenav" style={{ marginLeft: "70px" }}>
					<img src="images/logo.png" alt="img" height="40px"/>
					<span style={{ color: "Black" }}>Neo</span>
					<span style={{ color: "#DAA520" }}>TRADE</span>
				</Navbar.Brand>
				<Nav className="me-auto" />
				<section className="d-flex">
					<NavLink exact to="/sell" activeClassName="activeClicked" >
						<CDBSidebarMenuItem>
							<img
								className="hvr"
								src="images/shopping-cart.png"
								alt="img"
								height="28px"
								title="sell trade"
							/>
						</CDBSidebarMenuItem>
					</NavLink>
					<NavLink exact to="/buy" activeClassName="activeClicked" >
						<CDBSidebarMenuItem>
							<img
								src="images/download-cart.png"
								alt="img"
								height="28px"
								title="Buy trade"
							/>
						</CDBSidebarMenuItem>
					</NavLink>
					{/* <Button style={{ textAlign: "right" }} variant=""> <Nav.Link as={Link} to="/login">Login</Nav.Link></Button> */}
					{/* <Button variant="info "> <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link></Button> */}
					{/* {!isLoggedIn() && <> */}
					<NavLink exact to="/wallet" activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="credit-card text-dark" title="wallet"/>
					</NavLink>
					{/* </>} */}
					<input
						className="form-control me-2"
						style={{ height: "30px", marginTop: "10px" }}
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-secondary"
						style={{
							height: "30px",
							marginTop: "17px",
							text: "center",
						}}
						type="submit"
					>
						<i className="fa fa-search" aria-hidden="true" title="search"/>
					</button>
				</section>
				<hr />
			</Container>
		</Navbar>
	);
}

export default ColorSchemesExample;
