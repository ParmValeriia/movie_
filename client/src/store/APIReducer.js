import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from "../store/api"

const initialState = {
    loading: false,
    movies: [],
    error: null
}

const APIReducer = createSlice({
    name: "API",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getMovies.pending, (state)=>{
            state.loading = true,
            state.error = null
        })
         builder.addCase(getMovies.rejected, (state,actions)=>{
            state.loading = false,
            state.error = actions.error.message
        })
         builder.addCase(getMovies.fulfilled, (state, actions)=>{
            state.loading = false,
            state.movies = actions.payload

        })
         builder.addCase(searchMovies.pending, (state)=>{
            state.loading = true,
            state.error = null
        })
         builder.addCase(searchMovies.rejected, (state,actions)=>{
            state.loading = false,
            state.error = actions.error.message
        })
         builder.addCase(searchMovies.fulfilled, (state, actions)=>{
            state.loading = false,
            state.movies = actions.payload

        })
    }
});

export const getMovies = createAsyncThunk("api/getMovies", async(data)=>{
    let response = await api.get("/movies",{
        params: data
    })
    return response.data
})

export const searchMovies = createAsyncThunk("api/searchMovies", async(data)=>{
    let response= await api.get("/search", {params: data})
    return response.data
})

export const { } = APIReducer.actions

export default APIReducer.reducer