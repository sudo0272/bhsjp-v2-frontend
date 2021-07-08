import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'

const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
