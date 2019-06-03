import {withRouter} from 'next/router';
import Header from '../components/Header';


function Index(props) {
	const name = props.router.query.name || 'World';

	return (
		<div>
			<Header/>
			<p>Hello {name}!</p>
		</div>
	);
}

export default withRouter(Index);