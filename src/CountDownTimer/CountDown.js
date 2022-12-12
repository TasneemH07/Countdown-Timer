import React,{useState,useEffect} from 'react';
import './CountDown.css';
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import SpeedUpDown from './SpeedUpDown';

const CountDown = () => {
const [startTimer, setStartTimer] = useState(false)
const [pauseBtn, setPauseBtn] = useState(false)
const [minutes, setMinutes] = useState(0)
const [seconds, setSeconds] = useState(0)
const [input, setInput] = useState()
const [text, setText] = useState(" ")
const [MyStyleRed, setMyStyleRed] = useState()
const [fadeText, setFadeText] = useState({fade:'fadeIn'})
const [fade,setFade] = useState(false)
const [londonTime, setLondonTime] = useState()
const [newYorkTime, setNewYorkTime] = useState()
const [saltLakeCity, setSaltLakeTime] = useState()


function  startCountDown () {
  if(input>0){
    setMinutes(input);
    setSeconds(0);
    setStartTimer(true);
    if(!input){
      setMinutes(0);
      setSeconds(0);
      setStartTimer(false);
    }
  }
}

var timer;
useEffect(() => {
  if(startTimer){
  timer = setInterval(()=>{
      setSeconds(seconds-1)

    if(seconds===0){
      setMinutes(minutes-1)
      setSeconds(59)
    }

// When the countdown timer reaches 0, this text should change to: “Time’s up!”  
    if(minutes === 0 && seconds === 0){
      setText(`Time’s up! `)

// The time and date for when the countdown will reach 0:00 should be displayed for the local time in each office
    let LondonTime = new Date().toLocaleTimeString('en-us', { timeZone: 'Europe/London',weekday:"long",  month:"short", day:'numeric'}) 
    let NewYorkTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/New_york',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
    let SaltLakeTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/Boise',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
      setLondonTime(LondonTime)
      setNewYorkTime(NewYorkTime)
      setSaltLakeTime(SaltLakeTime)
      setMinutes(0)
      setSeconds(0)
    }

// When the countdown is within 20 seconds of ending, the countdown timer text should turn red
    if(minutes === 0 && seconds===20){
      const style = {
        color: "red",
      }
      setMyStyleRed(style)
    }

// At 10 seconds, the text should start blinking.
    if(minutes === 0 && seconds===10){
      setFadeText(useeffect)
      setFade(true)
          if(fadeText.fade === 'fadeIn' ){
            setFadeText({fade:'fadeOut'})
          }
          else{
            setFadeText({fade:'fadeIn'})
          }
        }
      
      },1000) //end of setInterval
    } //end of if(startTimer)
    return ()=> clearInterval(timer)

    }) //end of useEffect



// blinking_text Functionality
    var fadeInterval;
    var useeffect = useEffect(()=>{
        if(fade === true){
      fadeInterval = setInterval(()=>{
          if(fadeText.fade === 'fadeIn' ){
          setFadeText({fade:'fadeOut'})
        }
        else{
          setFadeText({fade:'fadeIn'})
        }
      },1000)
    }
      return () => clearInterval(fadeInterval)  
    })



// start_pause Functionality
    let pauseTimer = ()=>{  
      setStartTimer(!timer);
      if(pauseBtn===true){
          setPauseBtn(false)
        }
        else{
          setPauseBtn(true)
      }
    }  
  

function onChange(e){
  e.preventDefault()
  setInput(e.target.value)
  
}

  return (
    <>
    <div className='main'>

    <div>
    <label className='label'>Countdown:</label>

<input type="text" placeholder= ' (Min)' className='input' value={input} onChange={onChange}/>
<button className='btn' 
onClick={startCountDown}>START</button>
    </div>

<div>
<p id='text'>{text}</p>
<div className='heading' >
<h1 className={fadeText.fade} style={MyStyleRed}>{minutes<10? '0' + minutes:minutes}:{seconds<10? '0' + seconds:seconds }</h1>
</div>
</div>
<p className='icon' onClick={pauseTimer} >{pauseBtn?<FiPlayCircle/>:<FiPauseCircle/>}</p>

<div className='mainBtn'>
<SpeedUpDown startTimer={startTimer} setStartTimer={setStartTimer} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} setMyStyleRed={setMyStyleRed} useeffect={useeffect} setText={setText} setLondonTime={setLondonTime} setNewYorkTime={setNewYorkTime} setSaltLakeTime={setSaltLakeTime} />
</div>

<p style={{marginTop:"15px"}}>Est. Deployment Time:</p>

<div style={{marginTop:"5px",fontWeight:"bold"}}>
<p>London: <span style={{marginLeft:"44px",fontWeight:"bolder"}}>{londonTime}</span></p>
<p>New York: <span style={{marginLeft:"29px",fontWeight:"bolder"}}>{newYorkTime}</span></p>
<p>Salt Lake City: <span style={{fontWeight:"bolder"}}>{saltLakeCity}</span></p>
</div>
    </div>
    </>
  )
}

export default CountDown

