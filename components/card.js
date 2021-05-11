import { Card, Heading } from 'theme-ui'
import Markdown from 'markdown-to-jsx';

const TradingCard = ({
	id, date, location, notes, cost
}) => (
	<Card>
		<Heading>{location}, {date}</Heading>
		<Markdown options={{wrapper: 'Text'}}>{notes}</Markdown>
		<Heading as="subheading">Stats</Heading>
		<Markdown options={{wrapper: 'Text'}}>{cost}</Markdown>
	</Card>
)

export default TradingCard