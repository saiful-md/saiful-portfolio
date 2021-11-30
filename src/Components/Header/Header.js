import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import person from '../../images/person.png';
import './Header.css';
import resume from '../../images/Resume (1).pdf';

const Header = () => {
	return (
		<div style={{ color: '#fff' }}>
			<div
				style={{
					backgroundColor: '#A9AAB9',
					height: '90vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				className="header-part"
			>
				<Container>
					<Row>
						<Col
							md={12}
							xs={12}
							lg={6}
							style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111' }}
						>
							<div>
								<h3>MD SAIFUL ISLAM</h3>
								<h6>Front End React Developer</h6>
								<p>10+ web projects with react. 5+ MERN stack projects</p>
								<h5>
									<span
										style={{
											backgroundColor: 'rgba(0,140,0,0.3)',
											borderRadius: '20px',
											padding: ' 3px 15px'
										}}
									>
										React
									</span>{' '}
									<span
										style={{
											backgroundColor: 'rgba(0,140,0,0.3)',
											borderRadius: '20px',
											padding: ' 3px 15px'
										}}
									>
										Node
									</span>{' '}
									<span
										style={{
											backgroundColor: 'rgba(0,140,0,0.3)',
											borderRadius: '20px',
											padding: ' 3px 15px'
										}}
									>
										Express
									</span>{' '}
									<span
										style={{
											backgroundColor: 'rgba(0,140,0,0.3)',
											borderRadius: '20px',
											padding: ' 3px 15px'
										}}
									>
										MongoDB
									</span>
								</h5>
								<Button variant="info" style={{ marginTop: '10px' }}>
									<a
										style={{ textDecoration: 'none', color: '#111', fontWeight: '600' }}
										href={resume}
										download
									>
										Download Resume
									</a>
								</Button>
							</div>
						</Col>
						<Col md={12} xs={12} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
							<img style={{ width: '350px', height: '410px' }} src={person} alt="profile" />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Header;
