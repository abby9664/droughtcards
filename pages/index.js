import TradingCard from '../components/card'
import { Container, Grid } from 'theme-ui'

export default function HomePage({ data }) {
	return (
		<Container>
		<Grid columns={[null, 1, 2]} gap={[3, 4]} sx={{ mb: [3, 4] }}>
              {data.map(card => (
				<TradingCard {...card} key={card.id} />
			))}
            </Grid>
			
		</Container>
	)
}

export async function getStaticProps() {
	const { getData } = require('../lib/data')
	const data = await getData();
	return { props: { data } }
}