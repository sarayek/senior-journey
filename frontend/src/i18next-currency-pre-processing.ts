import { PostProcessorModule } from 'i18next'

const currencyFormatEn = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 0,
})
const currencyFormatFr = new Intl.NumberFormat('fr-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 0,
})

export const currencyPostProcessor: PostProcessorModule = {
  name: 'currency',
  type: 'postProcessor',
  process: (value, key, options, translator) => {
    // regex matches: [[999.99]]
    const regexp = /\[\[(\d+(\.\d+)?)\]\]/g
    if (value.search(regexp) > -1) {
      const numberFormat = options.lng === 'fr' ? currencyFormatFr : currencyFormatEn
      return value.replace(regexp, (x) => {
        const number = parseFloat(x.replace('[[', '').replace(']]', ''))
        return numberFormat.format(number)
      })
    }
    return value
  },
}
