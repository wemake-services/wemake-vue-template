// @flow

import faker from 'faker'
import { Factory } from 'rosie'

export const fakerFactory = new Factory()
  .option('seed', null)
  .option('locale', null)
  .option('faker', ['seed', 'locale'], (seed, locale) => {
    if (seed) {
      // TODO: remove `$FlowFixMe` line when this issue will be solved:
      // https://github.com/flow-typed/flow-typed/issues/2577
      // $FlowFixMe
      faker.seed(seed)
    }

    if (locale) {
      // TODO: remove `$FlowFixMe` line when this issue will be solved:
      // https://github.com/flow-typed/flow-typed/issues/2577
      // $FlowFixMe
      faker.setLocale(locale)
    }

    return faker
  })
