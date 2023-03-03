export const formatToLEK = (price) => {
  const formatToLEK = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'LEK',
    maximumSignificantDigits: 3,
  })
  return formatToLEK.format(price)
}

export const formatDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
