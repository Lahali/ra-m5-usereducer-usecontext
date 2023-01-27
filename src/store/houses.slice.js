import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urls } from '../constants'

const getUrl = (page) => `${urls.houses}?_page=${page}&_limit=9`

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async (currentPage) => {
    const res = await fetch(getUrl(currentPage))
    const data = await res.json()
    return data
  },
)

const initialState = {
  reqStatus: {
    status: 'initial',
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: true,
  },
  houses: {
    byId: {},
    allIds: [],
    selectedCity: null,
    selectedType: null,
    types: [],
    cities: [],
  },
}

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setSelectedCity(state, action) {
      state.houses.selectedCity = action.payload
    },
    setSelectedType(state, action) {
      state.houses.selectedType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHouses.pending, (state) => {
      state.reqStatus.status = 'loading'
      state.reqStatus.isLoading = true
      state.reqStatus.isError = false
      state.reqStatus.isSuccess = false
    })
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.reqStatus.state = 'success'
      state.reqStatus.isSuccess = true
      state.reqStatus.isLoading = false
      state.reqStatus.isError = false
      if (action.payload && action.payload.length === 0) {
        state.reqStatus.hasData = false
      }
      action.payload.forEach((house) => {
        state.houses.byId[house.id] = house
        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)
        }
        if (!state.houses.types.includes(house.type)) {
          state.houses.types.push(house.type)
        }
        if (!state.houses.cities.includes(house.city)) {
          state.houses.cities.push(house.city)
        }
      })
    })
    builder.addCase(getHouses.rejected, (state) => {
      state.reqStatus.status = 'failed'
      state.reqStatus.isSuccess = false
      state.reqStatus.isLoading = false
      state.reqStatus.isError = true
    })
  },
})

export const { setSelectedCity, setSelectedType } = housesSlice.actions
export default housesSlice.reducer
