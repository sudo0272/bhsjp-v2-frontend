import { MdLanguage } from 'react-icons/md'
import languageNames from './locales/languageConfig.json'
import i18next from 'i18next'
import { useCookies } from 'react-cookie'

const LanguageMenu = () => {
  let languages = languageNames
  const [cookies, setCookie] = useCookies(['language'])

  languages.sort((a, b) => a[1] < b[1] ? -1 : a[1] === b[1] ? 0 : 1)

  return (
    <div
      className="container flex-column"
      id="language-menu-container"
    >
      <span
        id="language-icon"
      >
        <MdLanguage />
      </span>
      <ul>
        {languages.map(language => (
          <span
            key={language[0]}
          >
            <li
              onClick={() => {
                i18next.changeLanguage(language[0])
                setCookie('language', language[0])
              }}
            >
              <span>
                {language[1]}
              </span>
              <span>
                {language[2]}
              </span>
            </li>
          </span>
        ))}
      </ul>
    </div>
  )
}

export default LanguageMenu

