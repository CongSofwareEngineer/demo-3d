import { flattenMessages } from '@/utils/function'
import MessageEN from 'public/assets/lang/en.json'
export const WHITE_LIST_REDUX = [
  'local',
  'userAmin'
]

export const SLICES = {
  intl: 'intl',
  language: 'language',
  local: 'local'
}

export const QUEY_KEY = {
  userData: 'userData',
  language: 'language',
  dataSizeScreen: 'dataSizeScreen',
  heightBgFrame: 'heightBgFrame',
  local: 'local',
  preLoadHome: 'preLoadHome',
  preLoadOurService: 'preLoadOurService',
  preLoadPortfolio: 'preLoadPortfolio',
  preLoadAboutAt: 'preLoadAboutAt',
  preLoadContactUs: 'preLoadContactUs',
  dataPosterBanner: 'dataPosterBanner'
}

export const LOCALE_KEY = {
  EN: 'en',
  VN: 'vi'
}

export const LOCALE_DATA = {
  [LOCALE_KEY.EN]: {
    locale: LOCALE_KEY.EN,
    messages: flattenMessages(MessageEN)
  },
  [LOCALE_KEY.VN]: {
    locale: LOCALE_KEY.VN,
    messages: flattenMessages(MessageEN)
  }
}

export const TYPE_BANNER = {
  ourService: 'ourService',
  aboutUs: 'aboutUs',
  contact: 'contact',
  profile: 'profile',
  tree: 'tree'
}

export const TYPE_OPTION_BANNER_2 = {
  character: 'character',
  gameArt: 'gameArt',
  branding: 'branding'
}

export const PAGE_EX = {
  ourService: 'ourService',
  portfolio: 'portfolio',
  aboutUs: 'aboutUs',
  home: 'home',
  contactAt: 'contactAt'
}

export const OBSERVER_KEY = {
  ...PAGE_EX,
  loadBgFrame: 'loadBgFrame',
  loadingFistPage: 'loadingFistPage',
  loadContentFrame: 'loadContentFrame',
  loadVideoBanner2: 'loadVideoBanner2',
  loadingPageOurServer: 'loadingPageOurServer',
  loadingPageContact: 'loadingPageContact',
  loadingPageAboutUs: 'loadingPageAboutUs',
  loadingPageProfile: 'loadingPageProfile',
  clickBtnFrame: 'clickBtnFrame'

}

export const TYPE_SCROLL_PAGE = {
  toTop: 'toTop',
  toBottom: 'toBottom'
}

export const COLOR = {
  greenMain: '#00FFCE',
  blueMain: '#1146c0'
}

export const MENU_SORTER = {
  animation: 'Animation',
  gameArt: 'Game Art',
  characterDesign: 'Character Design',
  visual: 'Visual & Design'
}

export const REQUEST_TYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export const LOCAL_STORAGE = {
  listItemSorted: 'listItemSorted'
}
