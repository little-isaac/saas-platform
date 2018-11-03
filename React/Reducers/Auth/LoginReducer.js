const LoginReducer = (state = {
showHidePassword : false
}, action) => {
	switch (action.type){
		case "SHOW_HIDE_PASSWORD" :
			state = {
                ...state,
                showHidePassword: !state.showHidePassword
            };
			break;
		case "VALIDATE_ADMIN_LOGIN" :

			break;
		case "DIRECT_ADMIN_LOGIN" :

			break;
	}
	return state;
};

export default LoginReducer;