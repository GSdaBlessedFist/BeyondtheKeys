import React,{useEffect} from 'react';
import Link from 'gatsby';
import "../scss/introModal.scss";

export default function IntroModal(){
	
	return (
		<div className="intro-modal">
			<div className="intro-modal_text-box ">
				<div className="introText">
					A good program, some say...is alive.
					Digital life pulsating through their code,
					orderly and with purpose.
					Errors, comments, and alas deletion
					save us from catastrophic failure.
					But there is a place where deleted bytes go.
					A place where only the 'bad' code remains...
					The binary void awaits your evaluation
				</div>
				
			</div>
		</div>
	)
}