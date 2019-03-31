import faker from 'faker'
import { Factory } from 'rosie'

export interface FakerFactoryType {
  seed: number | null;
  locale: string | null;
  faker: typeof faker;
}

export const fakerFactory = new Factory<FakerFactoryType>()
  .option('seed', null)
  .option('locale', null)
  .option('faker', ['seed', 'locale'], (seed, locale) => {
    if (seed) {
      faker.seed(seed)
    }

    if (locale) {
      faker.setLocale(locale)
    }

    return faker
  })
