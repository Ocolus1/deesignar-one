import { Container, Image, Row, Col } from 'react-bootstrap';
import SideTwo from '../img/side-img-two.png';

function SectionFive({ isMobile, isTab }) {
	return (
		<section
			style={{
				paddingTop: isMobile ? '5rem' : '11.25rem',
				paddingBottom: '5rem',
			}}
		>
			<Container>
				<Row className="text-center">
					<h3 className="fw-bold" style={{ fontSize: '95%' }}>
						OUR PROCESSES
					</h3>
					<h1
						className="display-5 fw-semibold my-3"
						style={{
							width: isMobile ? '100%' : '50%',
							margin: '0 auto',
						}}
					>
						A simple, yet powerful and efficient process
					</h1>
					<p
						className="my-3"
						style={{
							width: isMobile ? '100%' : '60%',
							margin: '0 auto',
						}}
					>
						At Deesignar Digital Marketing Agency, we believe that a
						systematic, data-driven process is key to delivering
						exceptional results for our clients.
					</p>
				</Row>
				<Row
					className=""
					style={{
						width: isTab ? '100%' : '70%',
						margin: '0 auto',
						backgroundColor: '#DFAEE7',
						padding: isMobile ? '3rem 1rem' : '6rem 1rem',
					}}
				>
					<Col
						xs={12}
						md={6}
						className="d-flex align-items-center justify-content-center"
					>
						<div>
							<Image src={SideTwo} fluid={true} />
						</div>
					</Col>
					<Col
						xs={12}
						md={6}
						className="d-flex align-items-center justify-content-center mt-4 mt-md-0"
					>
						<div>
							<h1>1. Discovery & Analysis</h1>
							<p className="my-3">
								Our approach to digital marketing is both
								strategic and agile, allowing us to adapt to the
								ever-changing digital landscape while ensuring
								we stay focused on your business goals.
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<div className="d-flex align-items-center justify-content-center mb-5 mt-3">
						<button
							className=" rounded-pill fw-semibold text-white mt-3 me-2 py-2 py-sm-3 px-sm-4 py-md-4 px-4 px-md-5"
							style={{
								backgroundColor: '#121229',
							}}
						>
							More About Our Process
						</button>
					</div>
				</Row>
			</Container>
		</section>
	);
}

export default SectionFive;
