import {Typography} from "antd";

function HouseDetails({data}) {
	const {name, region, coatOfArms, words, titles, seats, diedOut, overlord, cadetBranches} = data;
	const unknown = <Typography.Text type="secondary">no info</Typography.Text>;

	return (
		<ul>
			<li><Typography.Text strong>Name of the House:</Typography.Text> {name || unknown}</li>
			<li><Typography.Text strong>Region:</Typography.Text> {region || unknown}</li>
			<li><Typography.Text strong>Coat of Arms:</Typography.Text> {coatOfArms || unknown}</li>
			<li><Typography.Text strong>Words:</Typography.Text> {words || unknown}</li>
			<li><Typography.Text strong>Titles:</Typography.Text> {(titles && titles[0]) || unknown}</li>
			<li><Typography.Text strong>Seats:</Typography.Text> {(seats && seats[0])  || unknown}</li>
			<li><Typography.Text strong>Has died out:</Typography.Text> {diedOut || unknown}</li>
			<li><Typography.Text strong>Has overlord:</Typography.Text> {overlord ? 'Yes' : 'No'}</li>
			<li><Typography.Text strong>Number of Cadet Branches:</Typography.Text> {cadetBranches.length}</li>
		</ul>
	);
}

export default HouseDetails;