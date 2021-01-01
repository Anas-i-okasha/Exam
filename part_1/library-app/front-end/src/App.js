import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Library from './Components/Library'
import AddNewItem from './Components/AddNewItem'

const App=()=> {
  return (
    <div>
      <Router>
        <Library/>
        <Route path='/library'>  component={Library}   </Route>
        <Route path='/library/create_book'> component={AddNewItem} </Route>
      </Router>

      
    </div>
  )
}
export default App