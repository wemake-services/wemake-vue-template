// @flow

export type Item = {
  id: number,
  name: string
};

export type State = {
  count: number,
  item: ?Item
}; // without ; it breaks sublime syntax

export default function (): State {
  return {
    count: 0,
    item: null
  }
}
