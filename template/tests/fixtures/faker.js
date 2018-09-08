// @flow

import faker from 'faker'
import { Factory } from 'rosie'

export const fakerFactory = new Factory()
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
