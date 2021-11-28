import React,{useState,useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Link from 'gatsby';
import "../scss/intro_modal.scss";

export default function Intro_modal({visible}){
	const app = document.getElementById('app');
	
	var typewriter = new Typewriter(app, {
		  loop: false,
		  autoStart: false,
		  wrapperClassName: "introText",
		  cursorClassName: "introCursor"
		});

		typewriter
		  .pauseFor(750)
		  .changeDelay(50)
		  .typeString('A good program, some say...')
		  .pauseFor(1200)
		  .changeDelay(75)
		  .typeString("is alive.")
		  .typeString(`<br>`)
		  .pauseFor(500)
		  .changeDelay(50)
		  .typeString("digital life pulsates through it's code, ")
		  .pauseFor(750)
		  .typeString("orderly ")
		  .pauseFor(1000)
		  .typeString("and with purpose.")
		  .pauseFor(1500)
		  .typeString(`<br>`)
		  .typeString("Errors, comments, and alas deletion save us from catastrophic mistakes.")
		  .pauseFor(1250)
		  .typeString(`<br>`)
		  .typeString("...")
		  .pauseFor(1000)
		  .typeString(`<br>`)
		  .typeString("But there is a place where deleted lines go.")
		  .pauseFor(750)
		  .typeString(`<br>`)
		  .typeString("a place where only the 'bad' code remains...")
		  .pauseFor(1250)
		  .typeString("<div style='margin-top:10px;'>The darkness of the void awaits you...</div>")
		  .pauseFor(1000)
		  .typeString("<div class='introButton'>BeyondTheKeys(<span class='blinky'>_</span>)</div>")
		  .start()

	useEffect(()=>{
		document.addEventListener('click',(e)=>{
			if(e.target.matches(".introButton")){
				let modal = document.querySelector('.intro-modal');
				modal.classList.add('fade-out');
				setTimeout(()=>{
					modal.style.display="none";
				},1000)
			}
		})

		// var typewriter = new Typewriter(app, {
		//   loop: false,
		//   autoStart: false,
		//   wrapperClassName: "introText",
		//   cursorClassName: "introCursor"
		// });

		// typewriter
		//   .pauseFor(750)
		//   .changeDelay(50)
		//   .typeString('A good program, some say...')
		//   .pauseFor(1200)
		//   .changeDelay(75)
		//   .typeString("is alive.")
		//   .typeString(`<br>`)
		//   .pauseFor(500)
		//   .changeDelay(50)
		//   .typeString("digital life pulsates through it's code, ")
		//   .pauseFor(750)
		//   .typeString("orderly ")
		//   .pauseFor(1000)
		//   .typeString("and with purpose.")
		//   .pauseFor(1500)
		//   .typeString(`<br>`)
		//   .typeString("Errors, comments, and alas deletion save us from catastrophic mistakes.")
		//   .pauseFor(1250)
		//   .typeString(`<br>`)
		//   .typeString("...")
		//   .pauseFor(1000)
		//   .typeString(`<br>`)
		//   .typeString("But there is a place where deleted lines go.")
		//   .pauseFor(750)
		//   .typeString(`<br>`)
		//   .typeString("A place where only the 'bad' code remains...")
		//   .pauseFor(1250)
		//   .typeString("<div style='margin-top:10px;'>The darkness of the void awaits you...</div>")
		//   .pauseFor(1000)
		//   .typeString("<div class='introButton'>BeyondTheKeys(<span class='blinky'>_</span>)</div>")
		//   .start()
		  /////////////////////////////////////////////////////
		  
	})
	if(visible===true){
		return (<>
		<div className="intro-modal ">
			<div className="intro-modal_text-box ">
				<div id="app"></div>
			</div>
		</div>
	</>)	
	}else{return null}
	
}