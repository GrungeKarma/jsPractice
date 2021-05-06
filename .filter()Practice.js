let friends = [
	{
		name: 'Arod',
		status: 'married',
		sister: true,
	},
	{
		name: 'Scary',
		status: 'single',
		sister: true,
	},
	{
		name: 'Prophet',
		status: 'N.E.A.T',
		sister: false,
	},
	{
		name: 'Seven',
		status: 'single',
		sister: true,
	},
	{
		name: 'Bod',
		status: 'single',
		sister: false,
	},
];

const hasSister = friends.filter((friend) => {
	if (friend.sister === true) {
		console.log(`${friend.name} : Ayyyyy`);
	} else {
		console.log(`I guess ${friend.name} is useless`);
	}
});
