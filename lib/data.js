
import fetch from 'isomorphic-unfetch'

export const getData = async () => {
	const other = await fetch(
		'https://api.airtable.com/v0/appecSyy7DokXutvB/cards?view=Grid%20view',
		{
			headers: {
				Authorization: `Bearer ${process.env.TABLE_KEY}`,
			}
		}
	)
		.then(r => r.json())
		.then(data =>
			data.records.map(({ id, fields }) => ({
				id,
				date: fields['date'],
				location: fields['location'],
				notes: fields['notes'],
				cost: fields['cost'],
				image: fields['image'].split(" "),
			}))
		)
		console.log(other);
	return other
}