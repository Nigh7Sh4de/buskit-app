import * as Actions from './'

export function updateFilter(filter) {
  return {
    type: Actions.FILTER_UPDATED,
    filter,
  }
}