import { Card, Heading, Image } from 'theme-ui'
import Markdown from 'markdown-to-jsx';

const TradingCard = ({
	id, date, location, notes, cost, image
}) => (
	<Card>
		<Heading>{location}, {date}</Heading>
		{image.map(url => (
			<Image src={url}></Image>
		))}
		<Markdown options={{wrapper: 'Text'}}>{notes}</Markdown>
		<Heading as="subheading">Stats</Heading>
		<Markdown options={{wrapper: 'Text'}}>{cost}</Markdown>
	</Card>
)

export default TradingCard