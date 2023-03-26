import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function SectionNine({ isMobile}) {
  return (
		<section
			style={{
				paddingTop: isMobile ? '14rem' : '18.25rem',
				paddingBottom: '7rem',
				backgroundColor: '#121229',
				position: 'relative',
			}}
		>
			<Container
				style={{
					position: 'absolute',
					top: '0',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Row
					style={{
						padding: isMobile ? '2rem .5rem' : '3rem 1rem',
						backgroundColor: '#C7AEE7',
						borderRadius: '16px',
					}}
				>
					<Col
						xs={12}
						lg={9}
						className="d-flex align-items-start justify-content-center"
					>
						<h1 className="display-5 fw-semibold my-3">
							Ready to grow your company? Get in touch today!
						</h1>
					</Col>
					<Col
						xs={12}
						lg={3}
						className="d-flex align-items-start justify-content-lg-center"
					>
						<button
							className=" rounded-pill fw-semibold text-white mt-3 me-2 py-2 py-sm-3 px-sm-4 py-md-4  px-4 px-md-5"
							style={{
								backgroundColor: '#121229',
							}}
						>
							Get in touch
						</button>
					</Col>
				</Row>
			</Container>
			<div className="d-flex align-items-start justify-content-center">
				<h1 className="fw-bold text-white">Deesignar</h1>
			</div>
		</section>
  );
}

export default SectionNine