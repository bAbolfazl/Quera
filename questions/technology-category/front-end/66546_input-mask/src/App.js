import React, { useState } from 'react';

import Input from './Input'

import CITIES from './cities.json'

function App() {
   const [hint, setHint] = useState('')

   const handleChange = (value) => {

      const realValue = value.target.value
      
      
      const sug = realValue ? CITIES.find(city => city.startsWith(realValue)) : null
      
      setHint(sug)
      // console.log(hint)
   }

   return <div>{
      
      // console.log(hint)
      }
      <Input handleChange={value => handleChange(value)} hint={hint} />
   </div>
}

export default App;
