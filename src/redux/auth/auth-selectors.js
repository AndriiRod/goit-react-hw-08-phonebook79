export const selectUserName = state => state.auth.user.name;
export const selectUserStatus = state => state.auth.isLoggedIn;
export const selectRefreshingStatus = state => state.auth.isRefreshing;
