import { Card, Heading, Image, Text } from 'theme-ui'
import Markdown from 'markdown-to-jsx';
import { useState } from 'react'
import { IoIosStats } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'
import { GiDeadWood } from "react-icons/gi";

const TradingCard = ({
	id, date, location, notes, cost, image
}) => {
	const [toggle, setToggle] = useState(false);

	function handleClick(evt) {
		setToggle(!toggle)
	}

	return (
		<Card sx={{
			border: "20px solid",
			borderColor: 'primary',
			background: toggle ? 'white' : `url(${image[0]})`,
			transform: `rotate(${Math.random() * 6 - 3}deg)`,
			color: 'dork',
			minHeight: '60vh',
		}} onClick={handleClick}>
			{
				toggle ? 
				<>
					<Heading sx={{
						mb: [3],
						display: 'flex',
						alignItems: 'center',
					
					}}><IoLocation size={35} style={{
						color: '#AF5246',
					}}/><Text sx={{ml: [2]}}>{location}, {date}</Text></Heading>
					<Image src={image[1]} sx={{
						width: '60%',
						height: 'auto',
						display: 'block',
						mx: 'auto',
					}} />
			<Markdown options={{ wrapper: 'Text' }}>{notes}</Markdown>
			<Heading sx={{
				fontSize: [2],
				fontWeight: 'bold',
				display: 'flex',
				alignItems: 'center',
				mb: 0,
				top: 0,
				left: 0,
				color: 'accent'
			}}><IoIosStats size={28} /><Text sx={{ml: [1]}}>Stats</Text></Heading>
			<Markdown options={{ wrapper: 'Text' }}>{cost}</Markdown>
				</> 
				:
				<>
				<Heading sx={{
					color: 'white',
					fontSize: [4],
					mb: [1],
					backgroundColor: 'accent',
					display: 'relative',
					width: '100%',
					p: [2],
					lineHeight: [2],
					display: 'flex',
				}}><GiDeadWood size={56} style={{
					color: '#D48044',
				}}/> <Text sx={{
					ml: [2]
				}}>History of Droughts</Text></Heading>
				<div style={{height: '30em'}}></div>
					<Text
					sx={{
						textAlign: 'left',
						position: 'relative',
						padding: '10px',
						bottom: 0,
						left: 0,
						fontSize: [3],
						color: 'card',
						backgroundColor: 'primary',
						width: '100%'
					}}>{location}, {date}</Text>
				</>
			}
		</Card>
	)
}

export default TradingCard