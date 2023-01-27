import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  pagination: {
    currentPage: 1,
    pageRows: 10,
  },
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_PAGE_ROWS: 'SET_PAGE_ROWS',
  SET_PAGINATION: 'SET_PAGINATION',
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

    default:
      return state
  }
}
