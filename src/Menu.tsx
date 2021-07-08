import {
  useEffect,
  useState
} from 'react'
import {
  useLocation,
  Link
} from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  const [target, setTarget] = useState('')
  const location = useLocation()
  const [menus, setMenus] = useState([''])
  let [sites, setSites] = useState([''])

  useEffect(() => {
    const path = location.pathname
    setTarget(path.replace(/\/+/g, '/').substr(1).split('/')[0])
  }, [location])

  useEffect(() => {
    console.log(`target: "${target}"`)

    const sitesExceptTarget = [
      'home',
      'community',
      'profile',
      'account',
      'about'
    ].filter(site => site !== target)

    setSites([target, ...sitesExceptTarget])

    switch (target) {
      case 'home':
        setMenus([
          'hi',
          'www'
        ])

        break

      default:
        setMenus([])
    }
  }, [target])

  return (
    <div id="top-bar"
      className="container"
    >
      <div
        className="menu-container container flex-column"
      >
        <span
          className="selected-menu"
        >
          {target}
        </span>
        <ul
          className="unselected-menu-container"
        >
          {sites
            .filter(site => site !== target)
            .map((site, siteIndex) => {
            return (
              <Link
                to={'/' + site}
                key={siteIndex}
              >
                <li
                >
                  {site}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      <div
        id="site-menu-container"
      >
        <ul
          className="container"
        >
          {menus.map((menu, menuIndex) => {
            return (
              <li
                key={menuIndex}
              >
                {menu}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu;

