export const intlCurrencyFormatEn = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 0,
})

export const intlCurrencyFormatFr = new Intl.NumberFormat('fr-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 0,
})

export const intlNumberFormatEn = new Intl.NumberFormat('en-CA', {
  minimumFractionDigits: 0,
})

export const intlNumberFormatFr = new Intl.NumberFormat('fr-CA', {
  minimumFractionDigits: 0,
})

export const intlUtils = {
  formatCurrency: (value: number, locale?: string) => {
    if (locale === 'fr') return intlCurrencyFormatFr.format(value)
    return intlCurrencyFormatEn.format(value)
  },
  formatNumber: (value: number, locale?: string) => {
    if (locale === 'fr') return intlNumberFormatFr.format(value)
    return intlNumberFormatEn.format(value)
  },
}
