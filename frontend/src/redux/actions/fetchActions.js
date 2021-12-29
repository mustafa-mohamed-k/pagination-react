import actionTypes from './../types';

const getPage = (data)=>{
	return {
		type: actionTypes.GET_PAGE,
		data,
	};
};

const getPageSuccess = (data)=>{
	return {
		type: actionTypes.GET_PAGE_SUCCESS,
		data,
	};
};

const getPageError = (data)=>{
	return {
		type: actionTypes.GET_PAGE_ERROR,
		data,
	};
};

const setRowCount = (data)=>{
	return {
		type: actionTypes.SET_ROW_COUNT,
		count: data,
	}
}

const setCurrentPage = (data)=>{
	return {
		type: actionTypes.SET_CURRENT_PAGE,
		page: data,
	}
}

const actions = {
	getPage,
	getPageSuccess,
	getPageError,
	setRowCount,
	setCurrentPage,
}

export default actions;