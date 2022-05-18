import './appSpe.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';




export default function AppSpe() {
	
	const { id } = useParams()

	return (

		<div className="menu" >
			<div className="boxtitre">De quelle filliere souhaite tu connaitre ta specialite ? </div>
			<div className="box-filliere">
				<button className='boutton'>
					
				<Link to={'/AppSpeSTI2D/'+id}>
					STI2D	
            	</Link>
							
				</button>
				<button className='boutton'>
				<Link to={'/AppSpeGeneral/'+id}>
					GENERAL
            	</Link>	
				</button>
			</div>
		</div>
	);
}

