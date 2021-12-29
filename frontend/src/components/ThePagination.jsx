import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector, useDispatch} from 'react-redux';
import actions from './../redux/actions/fetchActions';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function ThePagination(){

	const {rowCount, currentPage, totalPersons} = useSelector((state)=>state.fetch);
	const dispatch = useDispatch();


	function setRowCount(evt, count){
		evt.preventDefault();
		dispatch(actions.setRowCount(count));
	}

	function setCurrentPage(page){
		dispatch(actions.setCurrentPage(page));
	}

	//determine the pagination links to display
	let paginationItems = [];
	let firstEllipsis = false;
	let lastEllipsis = false;
	let numPages = 0;
	if (totalPersons > 0 && rowCount > 0){
		numPages = parseInt(totalPersons / rowCount);
		if (numPages > 10){
			//show only the page numbers that are close to the current page	
			if (currentPage > 1){
				// firstEllipsis = true;
			}
			if (currentPage < rowCount){
				lastEllipsis = true;
			}
			//show at most 10 page links that are close to the current page
			let i = Math.max(1, currentPage - 3);
			let count = 0;
			while (i <= currentPage && count < 5){
				firstEllipsis = true;
				let j = i;
				paginationItems.push(<Pagination.Item key={i} onClick={()=>setCurrentPage(j)} active={i===currentPage}>{i}</Pagination.Item>);
				i += 1;
				count += 1;
			}
			
			while (i < numPages && count < 10){
				let j = i;
				paginationItems.push(<Pagination.Item key={i} onClick={()=>setCurrentPage(j)} active={i===currentPage}>{i}</Pagination.Item>);
				i += 1;
				count += 1;	
			}

		}
		else{
			//show all the page numbers since they are a few anyway
			for (let i = 1; i <= numPages; i++){
				paginationItems.push(<Pagination.Item key={i} onClick={()=>setCurrentPage(i)} active={i===currentPage}>{i}</Pagination.Item>);
			}
		}
	}

	return <React.Fragment>
		<Container style={{marginTop: "20px"}}>
			<Row>
			<Col>
			<DropdownButton  size="sm" id="dropdown-basic-button" title={`${rowCount} rows`} variant="secondary">
				<Dropdown.Item href="#" onClick={(evt)=>setRowCount(evt, 10)} >10</Dropdown.Item>
				<Dropdown.Item href="#" onClick={(evt)=>setRowCount(evt, 30)} >30</Dropdown.Item>
				<Dropdown.Item href="#" onClick={(evt)=>setRowCount(evt, 50)} >50</Dropdown.Item>
				<Dropdown.Item href="#" onClick={(evt)=>setRowCount(evt, 100)} >100</Dropdown.Item>
				<Dropdown.Item href="#">All</Dropdown.Item>
			</DropdownButton>
			</Col>
			<Col>
			<Pagination size="sm" >
				<Pagination.First disabled={currentPage===1} onClick={()=>dispatch(actions.setCurrentPage(1))} />
				{firstEllipsis && <Pagination.Ellipsis />}
				{paginationItems}
				{lastEllipsis && <Pagination.Ellipsis />}
				<Pagination.Last disabled={currentPage===numPages} onClick={()=>dispatch(actions.setCurrentPage(numPages))} />
			</Pagination>
			</Col>
			</Row>
		</Container>
	</React.Fragment>
}