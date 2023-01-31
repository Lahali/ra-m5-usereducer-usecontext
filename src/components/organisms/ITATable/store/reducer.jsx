import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  pagination: {
    currentPage: 1,
    pageRows: 10,
  },
  sortedBy: null,
  sortDirection: false,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_PAGE_ROWS: 'SET_PAGE_ROWS',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_SORTED_BY: 'SET_SORTED_BY',
  SET_TABLE_SORTED: 'SET_TABLE_SORTED',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_CURRENT_PAGE:
      return createNextState(state, (draft) => {
        draft.pagination.currentPage = action.payload
      })

    case Actions.SET_PAGE_ROWS:
      return createNextState(state, (draft) => {
        draft.pagination.pageRows = action.payload
      })

    case Actions.SET_PAGINATION:
      return createNextState(state, (draft) => {
        draft.pagination = action.payload
      })

    case Actions.SET_SORTED_BY:
      return createNextState(state, (draft) => {
        draft.sortedBy = action.payload
      })

    case Actions.SET_TABLE_SORTED: {
      const { data } = state
      const { sortedBy, columnId, sortDirection } = action.payload

      const dataArray = Object.values(data)

      const sortedData = dataArray.sort((a, b) => {
        if (sortDirection === true) {
          return a[sortedBy] > b[sortedBy] ? 1 : -1
        }
        if (sortDirection === false) {
          return a[sortedBy] < b[sortedBy] ? 1 : -1
        }
        return 0
      })

      return createNextState(state, (draft) => {
        draft.data = sortedData
        draft.sortedBy = columnId
        draft.sortDirection = sortDirection
      })
    }

    default:
      return state
  }
}
