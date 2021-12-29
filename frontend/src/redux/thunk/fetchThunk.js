import actions from './../actions/fetchActions';
import axios from 'axios';

export const getPersonsAsync = () => (dispatch, getState)=>{
	dispatch(actions.getPage({}));
	const {rowCount, currentPage} = getState().fetch;
	
	axios.post(`http://localhost:5001/persons?page=${currentPage}&limit=${rowCount}`, 
		{}).then((response, err)=>{
		if (err){
			dispatch(actions.getPageError(err));		
		}
		else{
			dispatch(actions.getPageSuccess(response.data));		
		}
	}).catch(err=>{
		dispatch(actions.getPageError(err.response));
	});
}