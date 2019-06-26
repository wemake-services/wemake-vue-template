// This is a definition of domain model for `comments` context.

import * as ts from 'io-ts'

/**
 * Runtime type, that can be used for schema validation.
 *
 * We call them "models", because they are exchanged between client and server.
 * @see https://github.com/gcanti/io-ts
 * @see https://github.com/aeirola/io-ts-promise
 */
export const RawComment = ts.type({
  'id': ts.number,
  'body': ts.string,
  'email': ts.string,
})

// Static TypeScript type, that can be used as a regular `type`:
export type RawCommentType = ts.TypeOf<typeof RawComment>
