import { useEffect, useState } from "react";

export function useTimer() {
  // ...
  const [seconds, setSeconds] = useState(0)
  // const [paused, setpaused] = useState(false)
  // let paused = false

  // useEffect(() => { updateSeconds() })

  const interval = () => setInterval(() => {
    setSeconds(prev => prev + 1)
  }, 1000);



  useEffect(() => {
    // console.log(paused)
    // interval()

    // return () => clearInterval(interval);

    interval()


    // stop = () => {
    //   // setpaused(prev => !prev)
    //   // clearInterval(interval)
    //   // console.log(paused)
    //   alert('hi')
    // }

    // stop()
  }, []);
  // const updateSeconds = () => {  
  //   setInterval(() => {
  //     setSeconds(prev => prev + 1)
  //   }, 1000);
  // }

  const stop = () => {
    alert('hi')
    clearInterval(interval.)
  }

  const reset = () => {
    setSeconds(0)
  }


  // updateSeconds()


  return { seconds, reset, stop }
  // {
  // seconds: seconds,
  // reset
  // }
}

// default useTimer()