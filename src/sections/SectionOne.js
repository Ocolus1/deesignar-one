import { Container, Col, Row, Image } from 'react-bootstrap'
import hero from "../img/hero-img.png"

function SectionOne({ isMobile }) {
  return (
		<section
			style={{
				paddingTop: isMobile ? '5rem' : '11.25rem',
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
							<h1 className="display-1  fw-bold">
								We are a digital agency
							</h1>

							<div
								className="my-4"
								style={{
									// maxWidth: '37.5rem',
									paddingRight: isMobile ? '0' : '3rem',
									fontSize: '18px',
								}}
							>
								At Deesignar Digital Marketing Agency, we
								understand the ever-evolving digital landscape
								and the crucial role it plays in the success of
								your business. With our team of digital
								marketing experts, we develop and implement
								cutting-edge, data-driven strategies that drive
								results for your business.
							</div>
						</div>
					</Col>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-center justify-content-center"
					>
						<Image src={hero} fluid={true} />
					</Col>
				</Row>
			</Container>
		</section>
  );
}

export default SectionOne