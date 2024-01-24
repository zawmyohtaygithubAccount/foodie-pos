import { configureStore } from "@reduxjs/toolkit";
import menuCateSlice from "./slices/menuCateSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    menuCate: menuCateSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
