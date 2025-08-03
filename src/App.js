import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useState} from 'react'

import LandingPage from './components/LandingPage/LandingPage'
import DoctorProfilePage from './components/DoctorProfilePage/DoctorProfilePage'
import DoctorProfileContext from './context/DoctorProfileContext'

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  return (
    <DoctorProfileContext.Provider value={{selectedDoctor, setSelectedDoctor}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/doctorProfilePage"
            component={DoctorProfilePage}
          />
        </Switch>
      </BrowserRouter>
    </DoctorProfileContext.Provider>
  )
}

export default App
