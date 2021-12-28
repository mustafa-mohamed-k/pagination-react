import {GET_PAGE} from './types';
import axios from 'axios';

const initialState = {
	comments: [],
	pageCount: 30,
	currentPage: 1,
}

const fetchReducer = (state=initialState, action)=>{
	switch (action.type){
		case GET_PAGE:
			//payload should contain the current page and the page count
			break;
		default:
			return {...state}
	}
};

export default fetchReducer;