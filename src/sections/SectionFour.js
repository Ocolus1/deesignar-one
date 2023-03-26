import { Container, Image, Row, Col } from 'react-bootstrap';
import SideOne from "../img/side-img-one.png"

function SectionFour({ isMobile }) {
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
								CONTACT US
							</h3>
							<h1 className="display-4  fw-bold pe-md-3">
								Interested in marketing your startup? Get in
								touch now!
							</h1>
							<button
								className=" rounded-pill fw-semibold text-white mt-3 me-2 py-2 py-sm-3 px-sm-4 py-md-4 px-4 px-md-5"
								style={{
									backgroundColor: '#121229',
								}}
							>
								Get in touch
							</button>
						</div>
					</Col>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-center justify-content-center mt-4 mt-lg-2"
					>
						<Image src={SideOne} fluid={true} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default SectionFour;
