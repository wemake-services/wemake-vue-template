import faker from 'faker'
import rosie from 'rosie'

export interface FakerFactoryType {
  seed: number | null
  locale: string | null
  faker: typeof faker
}

export const fakerFactory = new rosie.Factory<FakerFactoryType>()
  .option('seed', undefined)
  .option('locale', undefined)
  .option('faker', ['seed', 'locale'], (seed, locale) => {
    if (seed) {
      faker.seed(seed)
    }

    if (locale) {
      faker.setLocale(locale)
    }

    return faker
  })
