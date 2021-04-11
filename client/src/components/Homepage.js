import React from 'react'
import axios from 'axios'
import {useEffect,useState,} from 'react'
import { Table, Button , Pagination  } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Loader from './Loader'
import queryString from "query-string"
import {Link} from 'react-router-dom'


const Homepage = () => {
	
	const [data, setData] = useState([])
	const [searchData, setSearchData] = useState([])
	const [query , setQuery] = useState('')
	const [request, setRequest] = useState(true)
	const [loading,setLoading] = useState(false)
	const [pages, totalPagesCount] = useState(Number)
	const [pagee, setPagee] = useState(Number)
	const [changePage,setChangePage] = useState(Number)

	const { page  } = queryString.parse(window.location.search)


	let pageNumber = 1

	useEffect(() => {
		
		setChangePage(page)

			const fetchData = async () =>{
			const res = await axios.get(`/fetchTable/${changePage}`)
			//console.log('raw data', res.data)
			setData(res.data.queriedData)
			setPagee(res.data.page)
			totalPagesCount(res.data.pages)
		}
		fetchData()
	}, [changePage,page])

	useEffect(()=>{
		console.log('query',query)
		setChangePage(page)
		const fetchDataQuery = async () =>{
			try{
				if(query.length >0 ){
				//	console.log('first',`/fetchTable/${query}/${changePage}`)
					const res = await axios.get(`/fetchTable/${query}/${changePage}`)
					setData(res.data.queriedData)
					setPagee(res.data.page)
					totalPagesCount(res.data.pages)
				}
				
			}catch(err){
				console.log('error is',err)
			}
		}
		fetchDataQuery()
	},[request,changePage,page ])

	//console.log('totalPageCount' , pages)
	//console.log('data',data)

	const submitHandler = async (event) =>{
		event.preventDefault()
		setLoading(true)
		try{
			setChangePage(pageNumber)
		//	console.log(pageNumber)
		//	console.log(`/fetchTable/${query}/${pagee}`)
		//	console.log('query length' , query.length)
			if(query.length >0 ){
				const res = await axios.get(`/fetchTable/${query}/${pageNumber}`)
				//console.log(res.data)
				setData(res.data.queriedData)
				setPagee(res.data.page)
				totalPagesCount(res.data.pages)
				setLoading(false)
				setRequest(!request)
			}else{
				const res = await axios.get(`/fetchTable/${pageNumber}`)
				//console.log(res.data)
				setData(res.data.queriedData)
				setPagee(res.data.page)
				totalPagesCount(res.data.pages)
				setLoading(false)
				setRequest(!request)
			}
			
		}catch(error){
			console.log('this is the error' , error)
		}
		
	}

	const clearHandler =async () =>{
		console.log(`/fetchTable/${pageNumber}`)
		const res = await axios.get(`/fetchTable/${pageNumber}`)
			//console.log('raw data', res.data)
			setData(res.data.queriedData)
			setPagee(res.data.page)
			totalPagesCount(res.data.pages)
			setLoading(false)
			setRequest(!request)
	}

	//console.log('searched data is' , searchData)
	//console.log('whole table data is', data)

	return (
		<div>
				{loading && <Loader />}
				<form onSubmit={event=>submitHandler(event)}>
				<div className="row d-flex justify-content-center">
				<div className="col-md-9">
				<div className=" p-1 mt-1">
				<h2 className="heading text-center text-white p-3">Search for a client</h2>
				<div className="d-flex justify-content-center px-5">
				<div className="search">
				<input type="text" className="search-input" placeholder="Search..." name="" onChange={(e)=>setQuery(e.target.value)} />
				<button  className="search-icon" type='submit'> <i className="fa fa-search"></i> </button>
				<Link to={'/'} className='p-2 text-light ' onClick={clearHandler}>Clear</Link>
				</div>
				</div>
				</div>
				</div>
				</div>
            </form>  
			{
				data.length > 0 ? (
					<>
					<Table striped bordered responsive className='table-sm text-white'>
						<thead className='text-center text-white p-2 m-2'>
							<tr>
								<th className='p-3'>ID</th>
								<th className='p-3'>CommServName</th>
								<th className='p-3'>ClientName</th>
								<th className='p-3'>AgentName</th>
								<th className='p-3'>InstanceName</th>
								<th className='p-3'>BackupsetName</th>
								<th className='p-3'>subclientName</th>
								<th className='p-3'>Content</th>
								<th className='p-3'>SchedBackupType</th>
								<th className='p-3'>schedPattern</th>
								<th className='p-3'>SchedBackupDay</th>
								<th className='p-3'>SchedBackupTime</th>
								<th className='p-3'>PolicyName</th>
								<th className='p-3'>CopyName</th>
								<th className='p-3'>RetentionDays</th>
								<th className='p-3'>RetentionCycles</th>
							</tr>
						  </thead>
						  
						  <tbody className='text-center'>
						{
							data.map((d)=>(
								<tr key={d.id}>
									<td>{d.id}</td>
									<td>{d.CommServName}</td>
									<td>{d.ClientName}</td>
									<td>{d.AgentName}</td>
									<td>{d.InstanceName}</td>
									<td>{d.BackupsetName}</td>
									<td>{d.subclientName}</td>
									<td>{d.Content}</td>
									<td>{d.SchedBackupType}</td>
									<td>{d.schedPattern}</td>
									<td>{d.SchedBackupDay}</td>
									<td>{d.SchedBackupTime}</td>
									<td>{d.PolicyName}</td>
									<td>{d.CopyName}</td>
									<td>{d.RetentionDays}</td>
									<td>{d.RetentionCycles}</td>
								</tr>
							))
						
						 } 
						  
						  </tbody>	
					</Table>
					<Pagination>
						{[...Array(pages).keys()].map((x) => (
						<LinkContainer
							to={query ? `/fetchTable/?name=${query}&page=${x+1}` :`/fetchTable/?page=${x+1}`}
						>
							<Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
						</LinkContainer>
						))}
      				</Pagination>
					
					</>)
					: <h4 className='text-center text-white'>No data returned from database</h4>
			}
		</div>
	)
}


export default Homepage 