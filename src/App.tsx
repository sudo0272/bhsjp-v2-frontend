import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import { CookiesProvider } from 'react-cookie'

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route
            path="/home"
            exact={true}
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
