import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
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
            path="/"
            exact
          >
            <Redirect
              to="/home"
            />
          </Route>
          <Route
            path="/home"
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
