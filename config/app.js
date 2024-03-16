import { flattenMessages } from '@/utils/function'
import MessageEN from 'public/assets/lang/en.json'
export const WHITE_LIST_REDUX = [
  'local'
]

export const SLICES = {
  intl: 'intl',
  language: 'language',
  local: 'local'
}

export const QUEY_KEY = {
  userData: 'userData',
  language: 'language',
  local: 'local'
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
  profile: 'profile'
};

export const TYPE_OPTION_BANNER_2 = {
  character: 'character',
  gameArt: 'gameArt',
  branding: 'branding'
};
