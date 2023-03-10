import Request from "./Request"
import Address from "./Address"
import PersonalData from "./PersonalData"
import Exit from "./Exit"

export default function Render(props){
	if(props.page == 'personal'){
		return(
			<PersonalData />
		)
	}else if(props.page == 'address'){
		return(
			<Address />
		)
	}else if(props.page == 'requests'){
		return(
			<Request />
		)
	}else{
		return(
			<Exit />
		)
	}
}
