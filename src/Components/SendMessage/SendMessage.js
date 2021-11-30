import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const SendMessage = () => {
	const [
		success,
		setSuccess
	] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);

		emailjs
			.sendForm('service_1so616a', 'template_p8rm3zn', e.target, 'user_3uPobN8PERnI2jN7MH1hk')
			.then((res) => {
				if (res) {
					setSuccess(true);
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div style={{ backgroundColor: '#83A8C6' }}>
			<Container style={{ marginTop: '30px', padding: '30px' }}>
				<h2 className="text-center">Contact with me</h2>
				<Row style={{ display: 'flex', justifyContent: 'center' }}>
					<Col sm={12} lg={8}>
						<Form onSubmit={handleSubmit}>
							<Row>
								<Col>
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" name="name" />
								</Col>
								<Col>
									<Form.Label>Phone number</Form.Label>
									<Form.Control type="tel" name="phone" />
								</Col>
							</Row>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" name="user_email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>subject</Form.Label>
								<Form.Control type="text" name="subject" placeholder="subject" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Example textarea</Form.Label>
								<Form.Control as="textarea" name="message" rows={3} />
							</Form.Group>
							{success && <p style={{ color: 'green' }}>send successfully!</p>}
							<Button type="submit" variant="success">
								Send
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SendMessage;
