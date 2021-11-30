import React from 'react';
import { Container, Button } from 'react-bootstrap';
import bdTravel from '../../images/bdtravel.png';
import hondacbr from '../../images/hondacbr.png';
import mackbook from '../../images/macbook.png';
import needspactacle from '../../images/needspactacle.png';
import poet from '../../images/poet.png';

import shabujuddan from '../../images/shabujuddan.png';

const projects = [
	{
		id: '1',
		name: 'BD TRAVEL',
		image: ` ${bdTravel}`,
		details:
			'By Using this site , customers can book travel via system.This site provide various bangladeshi spot tickets. Traveler can book ticket for bangaldeshes spots. Manage his/her order. then they can see their tickets, price , booked sits etc.',
		livesite: 'https://bd-travel-a8f8d.web.app/home',
		githubClientSite: 'https://github.com/saiful-md/bd-travel-client-site',
		githubServerSite: 'https://github.com/saiful-md/bd-travel-server-site'
	},
	{
		id: '2',
		name: 'NEED SPACTACLE',
		image: `${needspactacle}`,
		details:
			'By using this site customers order sunglassess. This site provide many types of sunglasess. customers can see their sunglasses at dashboard. admin can controll all order, customars can controll her/his order.',
		livesite: 'https://need-spactacle.web.app/',
		githubClientSite: 'https://github.com/saiful-md/need-spactacle-client-site',
		githubServerSite: 'https://github.com/saiful-md/need-spactacle-server-site'
	},
	{
		id: '3',
		name: 'SHABUJUDDAN UNIVERSITY',
		image: `${shabujuddan}`,
		details:
			'By Using this site , students can see the university oportunity. Basically, This site is ui based web site. here have been seen about a university. Offering course by the university. Used technology is Html, Css, Bootstrap, JavaScript, React',
		livesite: 'https://shabujuddanuniversity.netlify.app/',
		githubClientSite: 'https://github.com/saiful-md/shabujuddan-university'
	},
	{
		id: '4',
		name: 'WRITER LIST',
		image: `${poet}`,
		details:
			'By Using this site ,You can know about some legendary poets in bangla litarature. The purpose of this site is imforming others about bangla litarature.If you dont know about bangali poet. You can visit this site. This is also ui based site.',
		livesite: 'https://poets-information.netlify.app/',
		githubClientSite: 'https://github.com/saiful-md/publisher-list'
		// githubServerSite: 'https://github.com/saiful-md/bd-travel-server-site'
	},
	{
		id: '5',
		name: 'MACK BOOK',
		image: `${mackbook}`,
		details:
			'By Using this site ,You can order mackbook with various functionality. There are so many functionality for example chose verious option, use cupon code and get discount.Here using javascript and react ui functionality. ',
		livesite: '',
		githubClientSite: 'https://github.com/saiful-md/publisher-list'
		// githubServerSite: 'https://github.com/saiful-md/bd-travel-server-site'
	},
	{
		id: '4',
		name: 'HONDA CBR',
		image: `${hondacbr}`,
		details:
			'This site is ui based site. Used technology on this site raw html, css, bootstrap site. This site will share is my ui design skilled. ',
		livesite: 'https://honda-cbr-from-saiful.netlify.app/',
		githubClientSite: 'https://github.com/saiful-md/honda-cbr'
		// githubServerSite: 'https://github.com/saiful-md/bd-travel-server-site'
	}
];

const MyProjects = () => {
	return (
		<div style={{ margin: '50px 0' }}>
			<Container>
				<div className="text-center mt-5">
					<h3>Projects</h3>
					<h6>
						I have shared my some spacific projects. If you see my all projects and code go to My github
						Reposetories.
					</h6>
					<Button variant="outline-success">
						<a
							style={{ color: '#111', textDecoration: 'none', fontWeight: '500' }}
							href="https://github.com/saiful-md/"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</Button>
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-4 my-2 ">
					{projects.map((project) => (
						<div className="col">
							<div className="card h-100">
								<img
									src={project.image}
									style={{ width: '100%', height: '200px' }}
									className="card-img-top"
									alt="tour spot"
								/>
								<div className="card-body">
									<h5 className="card-title">{project.name}</h5>
									<p className="card-text" style={{ textAlign: 'justify' }}>
										{project.details}
									</p>

									<div className="text-center">
										<Button variant="outline-success">
											{' '}
											<a
												href={project.livesite}
												target="_blank"
												rel="noreferrer"
												style={{ color: '#111', textDecoration: 'none', fontWeight: '500' }}
											>
												Livesite
											</a>{' '}
										</Button>
										<Button style={{ margin: '5px 5px' }} variant="outline-success">
											{' '}
											<a
												href={project.githubClientSite}
												target="_blank"
												rel="noreferrer"
												style={{ color: '#111', textDecoration: 'none', fontWeight: '500' }}
											>
												Github Client
											</a>{' '}
										</Button>
										{project.githubServerSite && (
											<Button variant="outline-success">
												{' '}
												<a
													href={project.githubServerSite}
													target="_blank"
													rel="noreferrer"
													style={{ color: '#111', textDecoration: 'none', fontWeight: '500' }}
												>
													Github Server
												</a>{' '}
											</Button>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default MyProjects;
