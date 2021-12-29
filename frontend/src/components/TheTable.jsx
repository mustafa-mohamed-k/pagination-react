import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {getPersonsAsync} from './../redux/thunk/fetchThunk';

export default function TheTable(){

	const  dispatch = useDispatch();

	const {persons, currentPage, rowCount} = 
		useSelector((state)=>state.fetch);

	useEffect(()=>{
		//get the persons when page is first loaded
		dispatch(getPersonsAsync());
	}, [dispatch]);

	useEffect(()=>{
		dispatch(getPersonsAsync());
	}, [currentPage, rowCount, dispatch]);


	return <React.Fragment>
		<Table  striped bordered hover style={{marginTop: "5px"}} >
			<thead>
				<tr>
					<th>#</th>
					<th style={{width: "30%"}} >First name</th>
					<th style={{width: "30%"}} >Last name</th>
					<th>Phone number</th>
				</tr>
			</thead>
			<tbody style={{textAlign: "left"}} >
				{persons?.map((item, index)=>{
					return <tr key={item.id}>
						<td style={{textAlign: "center"}} >{index + 1}</td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.phone}</td>
					</tr>
				})}
			</tbody>
		</Table>
	</React.Fragment>

};