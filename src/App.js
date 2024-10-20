import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {

const [step, setStep] = useState(1);
const [isOpen, setIsOpen] = useState(true);

  function handelPrevious(){
    if (step > 1)  {
      setStep(step - 1);
    }
  }
  function handelNext(){
    if (step < 3){
      setStep(step + 1);
    }
  }
  function handelToggle(){
    setIsOpen(!isOpen)
  }

  return <>
    <button onClick={handelToggle} className="close">&times;</button>
     {isOpen &&( <div className="steps">
        <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
         </div>
        <p className="message">Step {step}: {messages[step -1]} </p>
        <div className="buttons">
          <Button handleClick={handelPrevious} backgroundColor={'#7950f2'} color={'#fff'} text={'Pevious'}/>
          <Button handleClick={handelNext} backgroundColor={'#7950f2'} color={'#fff'} text={'Nex'}/>
        </div>
    </div>)}
  </>

}


function Button ({handleClick, backgroundColor, color, text}){
  return (<button onClick={handleClick} style={{backgroundColor: backgroundColor, color: color}}>{text}</button>
)
}

export default App;
