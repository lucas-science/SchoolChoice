import './appSpe.css'
import {Link} from 'react-router-dom'




export default function AppSpe() {
	


	return (
		
		<div className="menu" >

			

			<div className="boxtitre">De quelle filliere souhaite tu connaitre ta specialite ? </div>
			<div className="box-filliere">
				<button className='boutton'>
					
				<Link to='/AppSpeSTI2D'>
					STI2D			{/* Renvoie le questionnaire pour le choix des spe en stiD2*/}
            	</Link>
							
				</button>
				<button className='boutton'>
				<Link to='/AppSpeGeneral'>
					GENERAL				{/* Renvoie le questionnaire pour le choix des spe en general*/}
            	</Link>	
				</button>
			</div>
		</div>
	);
}

