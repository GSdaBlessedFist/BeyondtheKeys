import React,{useRef,useEffect}from 'react';
import {navigate} from 'gatsby';
import Typewriter from 'typewriter-effect';
import "../scss/introModal.scss";


export default function IntroModal(){
	const introRef = useRef(null);
	function hideIntro(){
		introRef.current.style.display = 'none';
		navigate("/stories");
	}
	
	return (
		<div className="intro-modal" ref={introRef}>
			<div className="intro-modal_text-box ">
			
				<div className="introText">
					A good program, some say... is alive.
					Digital life pulsating through their code,
					orderly and with purpose.
					Errors, comments, and alas deletion
					save us from catastrophic failure.
					But there is a place where deleted bytes go.
					A place where only the 'bad' code remains...
					The binary void awaits your evaluation
					<div className="beyondTheKeys-button" onClick={hideIntro} to={"/stories"}>BeyondTheKeys(<span className="blinky">_</span>)</div>
				</div>
				
			</div>
		</div>
	)
}