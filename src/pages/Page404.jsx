import {Divider} from "antd";
import {Link} from "react-router-dom";

function Page404() {
	return (
		<div className='text-center'>
			<h1 style={{'font-size': '80px'}}>404</h1>
			<Divider/>
			<Link to="/">Back to Characters</Link>
		</div>
	);
}

export default Page404;