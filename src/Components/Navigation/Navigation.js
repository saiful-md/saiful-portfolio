import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky="top" style={{ color: '#fff' }}>
			<Container>
				<h1 style={{ fontStyle: 'italic' }}>Saiful</h1>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-white"
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						style={{ color: '#fff' }}
						to="/home"
					>
						Home
					</Nav.Link>

					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-white"
						activeStyle={{
							fontWeight: 'bold',
							color: '#fff'
						}}
						to="/orderPlace"
					>
						Booked Tickets
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
