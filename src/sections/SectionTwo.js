import {useState} from "react";
import { Container, Col, Row, Image, Nav } from 'react-bootstrap';
import Email from '../img/email.png';
import MegaPhone from '../img/megaphone.png';
import Search from '../img/search.png';

function SectionTwo({ isMobile }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<section
			style={{
				paddingTop: isMobile ? '5rem' : '11.25rem',
				paddingBottom: '5rem',
			}}
		>
			<Container>
				<Row>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-center justify-content-center"
					>
						<div>
							<h3 className="d-flex ">
								<hr
									style={{
										width: isMobile ? '48px' : '138px',
										marginRight: '1rem',
									}}
								/>
								MARKETING AGENCY
							</h3>
							<h1 className="display-4  fw-bold pe-md-3">
								High-impact services to help your business
							</h1>
						</div>
					</Col>
				</Row>
				<Row className="mt-3 mt-sm-5 mb-4">
					<Col
						xs={12}
						md={4}
						className="d-flex align-items-center justify-content-center mb-4"
					>
						<div
							className="p-3 pb-5"
							style={{
								borderRadius: '15px',
								background: 'rgba(192, 140, 4, 0.3)',
							}}
						>
							<Image fluid src={Email} />
							<h5 className="fw-bold pt-1">Email Marketing</h5>
							<p>
								Skyrocket Your Email Open Rates and Our Tailored
								Email Marketing Solutions
							</p>
							<Nav.Item>
								<Nav.Link href="/" className="fw-bold">
									Learn more
								</Nav.Link>
							</Nav.Item>
						</div>
					</Col>
					<Col
						xs={12}
						md={4}
						className="d-flex align-items-center justify-content-center mb-4"
					>
						<div
							className="p-3 pb-5"
							style={{
								borderRadius: '15px',
								background: 'rgba(166, 4, 192, 0.3)',
							}}
						>
							<Image fluid src={MegaPhone} />
							<h5 className="fw-bold pt-1">Paid Advertising</h5>
							<p>
								Maximize Your ROI with Our Expertly Managed Paid
								Advertising Campaigns
							</p>
							<Nav.Item>
								<Nav.Link href="/" className="fw-bold">
									Learn more
								</Nav.Link>
							</Nav.Item>
						</div>
					</Col>
					<Col
						xs={12}
						md={4}
						className="d-flex align-items-center justify-content-center mb-4"
					>
						<div
							className="p-3 pb-5"
							style={{
								borderRadius: '15px',
								background: 'rgba(18, 224, 212, 0.3)',
							}}
						>
							<Image fluid src={Search} />
							<h5 className="fw-bold pt-1">SEO</h5>
							<p>
								Dominate the Search Engine Rankings with Our
								Holistic SEO Strategies
							</p>
							<Nav.Item>
								<Nav.Link href="/" className="fw-bold">
									Learn more
								</Nav.Link>
							</Nav.Item>
						</div>
					</Col>
				</Row>
				<Row>
					<div className="d-flex align-items-center justify-content-center mb-5">
						<button
							className=" rounded-pill fw-semibold text-white me-2 py-2 py-sm-3 px-sm-4 py-md-4 px-4 px-md-5"
							style={{
								backgroundColor: '#121229',
							}}
						>
							Get in touch
						</button>
						<button
							className="btn btn-outline-dark rounded-pill fw-semibold ms-2 py-2 py-sm-3 px-sm-4 py-md-4 px-4 px-md-5"
							style={{
								backgroundColor: isHovered
									? '#121229'
									: 'transparent',
								color: isHovered ? '#fff' : '#121229',
							}}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							All Services
						</button>
					</div>
				</Row>
			</Container>
		</section>
	);
}

export default SectionTwo;
