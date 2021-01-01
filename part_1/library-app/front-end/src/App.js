import React from 'react'
import {Browser as Router , Route , Link} from 'react-router-dom'
import Library from './Components/Library'

const App=()=> {
  return (
    <div>
      <Router>
        <Route path='/library'>  component={Library}   </Route>
      </Router>

      
    </div>
  )
}
export default App