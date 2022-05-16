import './appSpe.css'
import {Link} from 'react-router-dom'




export default function AppSpe() {
	


	return (
		
		<div className="menu" >

			

			<div className="boxtitre">De quelle filliere souhaite tu connaitre ta specialite ? </div>
			<div className="box-filliere">
				<button className='boutton'>
					
				<Link to='/AppSpeSTI2D'>
					STI2D	
            	</Link>
							
				</button>
				<button className='boutton'>
				<Link to='/AppSpeGeneral'>
					GENERAL
            	</Link>	
				</button>
			</div>
		</div>
	);
}

