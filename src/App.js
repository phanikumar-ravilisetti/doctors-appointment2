import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import ContentPage from './components/ContentPage/ContentPage'
import CmsPage from './components/CmsPage/CmsPage'
import HeadingContext from './context/HeadingContext'

function App() {
  const [heading, setHeading] = useState('')

  return (
    <HeadingContext.Provider value={{heading, setHeading}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContentPage} />
          <Route exact path="/cms" component={CmsPage} />
        </Switch>
      </BrowserRouter>
    </HeadingContext.Provider>
  )
}

export default App
