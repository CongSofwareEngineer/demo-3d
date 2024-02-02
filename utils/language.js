import ReduxServices from '@/Redux/service'
import { SLICES } from '@/config/app'
import { FormattedMessage, createIntl, createIntlCache } from 'react-intl'

export const translate = (languageId, isFormatText = false, valueObj = {}, defaultMessage = ' ') => {
  if (isFormatText) {
    return (
      <FormattedMessage
        id={languageId}
        defaultMessage={defaultMessage}
        values={
          valueObj
        }
      />
    )
  } else {
    const cache = createIntlCache()
    const { locale, messages } = ReduxServices.getReduxDataByKey(SLICES.language)
    const intl = createIntl({
      locale,
      messages
    }, cache)
    return intl.formatMessage({ id: languageId, defaultMessage })
  }
}
