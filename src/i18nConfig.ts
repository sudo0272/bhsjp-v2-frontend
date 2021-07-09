import i18n, { Resource } from 'i18next'
import en_ca from './locales/en_ca.json'
import en_us from './locales/en_us.json'
import ko_kr from './locales/ko_kr.json'
import ko_kp from './locales/ko_kp.json'
import ja_jp from './locales/ja_jp.json'
import { initReactI18next } from 'react-i18next'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
let language: string

language = cookies.get('language')

if (language === undefined) {
  language = 'ko_kr'
  cookies.set('language', 'ko_kr')
}

const translations: Resource = {
  en_ca: { translation: { ...en_ca } },
  en_us: { translation: { ...en_us } },
  ko_kr: { translation: { ...ko_kr } },
  ko_kp: { translation: { ...ko_kp } },
  ja_jp: { translation: { ...ja_jp } }
} as const;

i18n
.use(initReactI18next)
.init({
  lng: language,
  resources: {
    ...translations
  }
})

