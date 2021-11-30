import React from 'react';
import { Container, Button } from 'react-bootstrap';
import resume from '../../images/Resume (1).pdf';

const AboutMe = () => {
	return (
		<div style={{ marginTop: '50px', marginBottom: '50px' }}>
			<Container>
				<h2 className="text-center mb-4">About Me</h2>

				<h6>
					I am <span style={{ color: 'tomato' }}>MD SAIFUL ISLAM</span>
				</h6>
				<h6 style={{ textAlign: 'justify' }}>
					I’m a Front End Web developer who is passionate about making error-free websites with 100% client
					satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work
					with an end goal in mind. I pride myself on doing quality work and maintaining excellent
					communication. Most of the time I work with JavaScript ReactJS
				</h6>
				<h6 style={{ color: 'green', fontWeight: '600' }}>mdsaifulislam2491@gmail.com</h6>
				<Button variant="success">
					<a
						style={{ textDecoration: 'none', color: 'black' }}
						href="https://github.com/saiful-md"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
				</Button>
				<Button style={{ margin: '0 20px' }} variant="success">
					<a
						style={{ textDecoration: 'none', color: 'black' }}
						href="https://www.linkedin.com/in/md-saiful-islam-1648b0218/"
						target="_blank"
						rel="noreferrer"
					>
						Linkdin
					</a>
				</Button>
				<Button variant="success">
					<a
						style={{ textDecoration: 'none', color: 'black' }}
						href="https://drive.google.com/file/d/1LxOM7rbNul_Y5akFzq3KEfO7ZsUU4tAG/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Resume
					</a>
				</Button>
			</Container>
		</div>
	);
};

export default AboutMe;
