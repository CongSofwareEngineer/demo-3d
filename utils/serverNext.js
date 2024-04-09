export const generateMetaBase = ({
  dataBase,
  title = null,
  des = null,
  image = null,
  override = false,
  overrideImage = false
}) => {
  const dataClone = JSON.parse(JSON.stringify(dataBase))
  if (title) {
    dataClone.title = override ? title : `${dataClone.title.absolute} | ${title}`
    dataClone.openGraph.title = override ? title : `${dataClone.title.absolute} | ${title}`
    dataClone.openGraph.siteName = override ? title : `${dataClone.title.absolute} | ${title}`
    dataClone.twitter.title = override ? title : `${dataClone.title.absolute} | ${title}`
    dataClone.appleWebApp.title = override ? title : `${dataClone.title.absolute} | ${title}`
  }

  if (des) {
    dataClone.description = override ? des : `${dataBase.description} - ${des}`
    dataClone.openGraph.description = override ? des : `${dataBase.description} - ${des}`
    dataClone.twitter.description = override ? des : `${dataBase.description} - ${des}`
  }
  if (overrideImage && image) {
    dataClone.openGraph.images = [
      {
        url: image
      }
    ]
    dataClone.twitter.images = image
  }
  return dataClone
}

export function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
