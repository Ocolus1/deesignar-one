import { useState } from 'react';
import { Container, Image, Row, Col, Nav } from 'react-bootstrap';
import SideThree from "../img/side-img-three.png"
import SideFour from "../img/side-img-four.png"

function SectionSix({ isMobile }) {
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
								CASE STUDIES
							</h3>
							<h1 className="display-4  fw-bold pe-md-3">
								The results speak for themselves
							</h1>
						</div>
					</Col>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-center justify-content-center mt-4 mt-lg-0"
					>
						<div className="d-flex align-items-center justify-content-center">
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
					</Col>
				</Row>
				<Row>
					<Col
						xs={12}
						md={6}
						className="d-flex align-items-start justify-content-center p-4"
					>
						<div
							className="p-3 pb-5"
							style={{
								borderRadius: '15px',
								background: 'rgba(61, 174, 238, 0.3)',
							}}
						>
							<Image
								fluid={true}
								src={SideThree}
								className=" mb-5"
							/>
							<h5 className="fw-bold">
								Boosting Sales for E-commerce Brand through
								Email Marketing Automation
							</h5>
							<Nav.Item>
								<Nav.Link
									href="/"
									className="fw-bolder fs-3 my-3"
								>
									LADSPA
								</Nav.Link>
							</Nav.Item>
						</div>
					</Col>
					<Col
						xs={12}
						md={6}
						className="d-flex align-items-start justify-content-center p-4"
					>
						<div
							className="p-3 pb-5"
							style={{
								borderRadius: '15px',
								background: 'rgba(87, 4, 192, 0.3)',
							}}
						>
							<Image
								fluid={true}
								src={SideFour}
								className="mb-2"
							/>
							<h5 className="fw-bold">
								Transforming SMB's Online Presence with
								Comprehensive SEO Strategies
							</h5>
							<Nav.Item>
								<Nav.Link
									href="/"
									className="fw-bolder fs-3 my-3"
								>
									GitHub
								</Nav.Link>
							</Nav.Item>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default SectionSix;
