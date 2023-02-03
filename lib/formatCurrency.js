export const formatToLEK = (price) => {
  const formatToLEK = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'LEK',
    maximumSignificantDigits: 3,
  })
  return formatToLEK.format(price)
}
