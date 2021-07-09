import {
  useEffect,
  useState
} from 'react'
import {
  useLocation,
  Link
} from 'react-router-dom'
import './Menu.css'
import './i18nConfig'
import { useTranslation } from 'react-i18next'
import LanguageMenu from './LanguageMenu'

const Menu = () => {
  const [target, setTarget] = useState('')
  const location = useLocation()
  const [menus, setMenus] = useState([''])
  let [sites, setSites] = useState([''])
  const { t } = useTranslation()

  useEffect(() => {
    const path = location.pathname
    setTarget(path.replace(/\/+/g, '/').substr(1).split('/')[0])
  }, [location])

  useEffect(() => {
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
        id="left-menu-container"
        className="container"
      >
        <div
          id="site-select-menu-container"
          className="container flex-column"
        >
          <span
            id="selected-site-select-menu"
          >
            {t(`sites.${target}.name`)}
          </span>
          <ul>
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
                    {t(`sites.${site}.name`)}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
      <div
        id="right-menu-container"
        className="container"
      >
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
                  {t(`sites.${target}.submenus.${menu}`)}
                </li>
              )
            })}
          </ul>
        </div>
        <LanguageMenu />
      </div>
    </div>
  )
}

export default Menu;

