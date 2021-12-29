import actionTypes from './../types';

const initialState = {
	persons: [], //the persons being displayed on the page
	rowCount: 30, //the number of persons to show at a time
	currentPage: 1, //the current page that is being viewed
	totalPersons: 0, //the total number of persons available
	message: null, //the message to show to the user
}

const fetchReducer =  (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.GET_PAGE:
			return {
				...state,
				persons : [],
				totalPersons : 0,
			}
		case actionTypes.GET_PAGE_SUCCESS:
			return {
				...state,
				persons: action.data.persons,
				totalPersons: action.data.total,
			};
		case actionTypes.GET_PAGE_ERROR:
			return {
				...state,
				persons : [],
				message : 'Failed',
				totalPersons: 0,
			}
		case actionTypes.SET_ROW_COUNT:
			return {
				...state,
				rowCount: action.count,
				currentPage: 1,
			}
		case actionTypes.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page,
			}
		default:
			return state;
	}
};

export default fetchReducer;