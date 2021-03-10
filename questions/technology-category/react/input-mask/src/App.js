import React, { useState } from 'react';
import Input from './Input';
const cities = require('./cities.json');

function App() {

   const [hint, setHint] = useState('')

   const handleChange = (e) => {

      let hint = ''

      if (e.target.value == '') {
         hint = ''
      } else {
         hint = cities.find(city => city.startsWith(e.target.value) ? city : '') 
      }
      setHint(hint)
   }


   return <div>
      <Input handleChange={handleChange} hint={hint} />
   </div>
}

export default App;
