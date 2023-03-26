import { Container, Image, Row, Col } from 'react-bootstrap';
import John from '../img/john-carter.png';
import Sophie from "../img/sophie-moore.png"

function SectionEight({ isMobile }) {
	return (
		<section
			style={{
				paddingTop: isMobile ? '5rem' : '11.25rem',
				paddingBottom: '20rem',
			}}
		>
			<Container>
				<Row className="text-center">
					<h3 className="fw-bold" style={{ fontSize: '95%' }}>
						TESTIMONIALS
					</h3>
					<h1
						className="display-5 fw-semibold my-3"
						style={{
							width: isMobile ? '100%' : '50%',
							margin: '0 auto',
						}}
					>
						Don’t take our word for it, take theirs
					</h1>
				</Row>
				<Row>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-start justify-content-center"
					>
						<div
							className="card mb-3 py-5 px-1"
							style={{
								background: '#C7AEE7',
							}}
						>
							<div class="row g-0">
								<div class="col-lg-4 text-center">
									<Image
										src={John}
										roundedCircle
										fluid
										className="mb-3"
									/>
									<h5 className="fw-bold">Michaeal Jordan</h5>
									<h6 style={{ fontSize: '80%' }}>
										HEAD OF OPERATIONS
									</h6>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title mb-3 fw-bold">
											“ The team is always professional
											and communicative”
										</h5>
										<p className="card-text p-2">
											Digital Marketing Agency has been a
											game-changer for our online
											presence. Their expertise in SEO and
											email marketing has significantly
											increased our website traffic and
											lead generation.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col
						xs={12}
						lg={6}
						className="d-flex align-items-start justify-content-center"
					>
						<div
							className="card mb-3 py-5 px-1"
							style={{
								background: '#E7D7AE',
							}}
						>
							<div class="row g-0">
								<div class="col-lg-4 text-center">
									<Image
										src={Sophie}
										roundedCircle
										fluid
										className="mb-3"
									/>
									<h5 className="fw-bold">
										Racheal turnstile
									</h5>
									<h6 className='mb-3' style={{ fontSize: '80%' }}>
										HEAD OF OPERATIONS
									</h6>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title mb-3 fw-bold">
											“They took the time to understand
											our unique needs”
										</h5>
										<p className="card-text p-2">
											Their professionalism, attention to
											detail, and commitment to our
											success have been invaluable.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default SectionEight;
