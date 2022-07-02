function isLoggedReducer(state = false,action) {
    switch(action.type){
        case "signIn":
        return true;
        case "signOut":
        return false;
    }
}
export default isLoggedReducer