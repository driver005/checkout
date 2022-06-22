import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { reducers } from "@reducers/index";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const bindMiddleware = (middleware: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

// creating store
export const store = createStore(
    reducers,
    initalState,
    bindMiddleware(middleware)
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);