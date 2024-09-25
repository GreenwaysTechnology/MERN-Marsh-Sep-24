import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'


const initialState = {
    entities: [],
    loading: false,
}

//thunk middleware
const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})

//slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }

})

const postReducer = postSlice.reducer


//create store object
const appStore = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(logger))
})
///////////////////////////////////////////////////////////////////////////////////////
//React component layer

const Post = () => {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <h2>Blog Posts</h2>
            {entities.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}


const App = () => {
    return <Provider store={appStore}>
        <Post />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
