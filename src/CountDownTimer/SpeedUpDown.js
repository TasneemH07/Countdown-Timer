import React,{useState,useEffect} from 'react';

const SpeedUpDown = (props) => {
const [click1,setClick1] = useState(false)
const [click2,setClick2] = useState(false)
const [click3,setClick3] = useState(false)

const {seconds,setSeconds,startTimer,setStartTimer,minutes,setMinutes,setMyStyleRed,setText,setLondonTime,setNewYorkTime,setSaltLakeTime} = props

    function speedX1(){
        setClick1(true)
      }
      function speedX2(){
        setClick2(true)
        }
        function speedX3(){
          setClick3(true)
        }
      
      useEffect(() => {
    //SPEED_1X_FUNCTIONALITY
            if(startTimer && click1 ){
              var interval1 = setInterval(() => {
                  setSeconds(seconds-1);
              }, 1000);
              return ()=> clearInterval(interval1)
            }

    //SPEED_1.5X_FUNCTIONALITY
                  if(startTimer && click2 ){
                var interval2 = setInterval(() => {
                  setSeconds(seconds-1);
                  if(minutes==0 && seconds == 0){
                    setMinutes(0)
                    setSeconds(0)                  
                   setStartTimer(false)
                  }
                  //RedText_Functionality
                  if(minutes === 0 && seconds===20){
                      const style = {
                          color: "red",
                        }
                        setMyStyleRed(style)
                    }
            //TimeUp_Functionality
                    if(minutes === 0 && seconds === 0){
                        setText(`Time’s up! `)
            //The time and date for when the countdown will reach 0:00 should be displayed for the local time in each office
                let LondonTime = new Date().toLocaleTimeString('en-us', { timeZone: 'Europe/London',weekday:"long",  month:"short", day:'numeric'}) 
                let NewYorkTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/New_york',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
                let SaltLakeTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/Boise',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
                    setLondonTime(LondonTime)
                    setNewYorkTime(NewYorkTime)
                    setSaltLakeTime(SaltLakeTime)
                    setMinutes(0)
                    setSeconds(0)
                    }
                }, 700);
                return ()=> clearInterval(interval2)
              }  

    //SPEED_2X_FUNCTIONALITY
                        if(startTimer && click3){
                  var interval3 = setInterval(() => {
                      setSeconds(seconds-1);
                      if(minutes==0 && seconds == 0){
                        setMinutes(0)
                        setSeconds(0)                  
                       setStartTimer(false)
                      }
            //RedText_Functionality
                      if(minutes === 0 && seconds===20){
                        const style = {
                          color: "red",
                        }
                        setMyStyleRed(style)
                      }
            //TimeUp_Functionality
                  if(minutes === 0 && seconds === 0){
                    setText(`Time’s up!`)
            //The time and date for when the countdown will reach 0:00 should be displayed for the local time in each office
                let LondonTime = new Date().toLocaleTimeString('en-us', { timeZone: 'Europe/London',weekday:"long",  month:"short", day:'numeric'}) 
                let NewYorkTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/New_york',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
                let SaltLakeTime = new Date().toLocaleTimeString('en-us', { timeZone: 'America/Boise',weekday:"long",  month:"short", day:'numeric',hourCycle:'h12'}) 
                    setLondonTime(LondonTime)
                    setNewYorkTime(NewYorkTime)
                    setSaltLakeTime(SaltLakeTime)
                    setMinutes(0)
                    setSeconds(0)
                  }
                    }, 400);
                  return ()=> clearInterval(interval3)

                }  
    })
      


  return (
    <div>
    <div className='mainBtn'>
<button className="btn1" onClick={speedX1}>1X</button>
<button className ="btn2" onClick={speedX2}>1.5X</button>
<button className ="btn3" onClick={speedX3}>2X</button>
</div>
    </div>
  )
}

export default SpeedUpDown