import { Card, Heading, Image, Text } from 'theme-ui'
import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { useState } from 'react'
import { IoIosStats } from 'react-icons/io'
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
			color: 'black',
			minHeight: '60vh',
		}} onClick={handleClick}>
			{
				toggle ? 
				<>
					<Heading sx={{
						
					}}>{location}, {date}</Heading>
					<Image src={image[1]} sx={{
						width: '60%',
						height: 'auto',
						mx: 'auto',
					}} />
			<Markdown options={{ wrapper: 'Text' }}>{notes}</Markdown>
			<Heading sx={{
				fontSize: [2],
				fontWeight: 'bold',
				mb: 0,
				top: 0,
				left: 0,
				color: 'primary'
			}}><IoIosStats />Stats</Heading>
			<Markdown options={{ wrapper: 'Text' }}>{cost}</Markdown>
				</> 
				:
				<>
				<Heading sx={{
					color: 'blue',
					fontSize: [4],
					mb: [1],
					background: '#f00',
					display: 'relative',
					width: '100%',
					p: [2],
				}}><GiDeadWood style={{
					color: '#ff0',
					size: [2],
				}}/> History of Droughts</Heading>
				<div style={{height: '30em'}}></div>
					<Text
					sx={{
						textAlign: 'left',
						position: 'relative',
						padding: '10px',
						bottom: 0,
						left: 0,
						fontSize: [3],
						color: 'white',
						background: '#f00',
						width: '100%'
					}}>{location}, {date}</Text>
				</>
			}
		</Card>
	)
}

export default TradingCard