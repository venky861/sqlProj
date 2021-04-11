import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

 const Search = () => {
	 const [name , setName] = useState('')
	 const [data, setData] = useState('')

	 console.log(name)

	const submitHandler = async (event) =>{
		event.preventDefault()
		console.log('search clicked')
		const res = await axios.get(`/fetchTable/:${name}`)
		setData(res.data)
	}

	return (
			<form onSubmit={event=>submitHandler(event)}>
				<div className="row d-flex justify-content-center">
				<div className="col-md-9">
				<div className=" p-4 mt-3">
				<h2 className="heading text-center text-white p-3">Search for a client</h2>
				<div className="d-flex justify-content-center px-5">
				<div className="search">
				<input type="text" className="search-input" placeholder="Search..." name="" onChange={(e)=>setName(e.target.value)} />
				<button  className="search-icon" type='submit'> <i className="fa fa-search"></i> </button>
				</div>
				</div>
				</div>
				</div>
				</div>
            </form>  
           
	)
}


export default Search