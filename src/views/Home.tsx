import './Home.css'
import './master.css'
import '../controllers/i18nConfig'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div
      className="container"
    >
      <div
        className="title"
      >
        {t(`sites.home.welcome`)}
      </div>
    </div>
  )
}

export default Home

