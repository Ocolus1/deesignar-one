import { Container, Image, Row } from "react-bootstrap"
import Lots from "../img/lots.png"

function SectionThree({ isMobile }) {
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
						ABOUT US
					</h3>
					<h1
						className="display-5 fw-semibold my-3"
						style={{
							width: isMobile ? '100%' : '50%',
							margin: '0 auto',
						}}
					>
						The great team of industry experts behind Deesignar
					</h1>
					<p
						className="my-3"
						style={{
							width: isMobile ? '100%' : '60%',
							margin: '0 auto',
						}}
					>
						We are a diverse group of digital marketing
						professionals with one shared goal – helping businesses
						thrive in the digital age. Our team boasts a wealth of
						experience and skills, enabling us to deliver
						exceptional results for our clients across all aspects
						of digital marketing.
					</p>
				</Row>
				<Row>
					<Image src={Lots} fluid={true} />
				</Row>
			</Container>
		</section>
  );
}

export default SectionThree