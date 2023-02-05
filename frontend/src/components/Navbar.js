import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
	// const navigate=useNavigate();
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#home">
						<img src="images/logo.png" alt="img"/>
						<span style={{ color: "Black" }}>Neo</span>
						<span style={{ color: "#DAA520" }}>TRADE</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						className="justify-content-end"
						id="basic-navbar-nav"
					>
						<Nav>
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/FAQ">
								FAQ
							</Nav.Link>
							<Nav.Link as={Link} to="/Aboutgns">
								AboutG&S
							</Nav.Link>
						</Nav>
						<Button
							className="text-white "
							size="sm"
							variant="warning"
						>
							{" "}
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default ColorSchemesExample;
