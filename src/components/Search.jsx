import React, { useState } from 'react'

const Search = ({onValue}) => {
    console.log(onValue);
    const [search, SetSearch] = useState('')
    const handleChange = (e) => {
        SetSearch(e.target.value)
    }
    const handleSubmit = (e) => {  //to prevent default submit
        console.log(search);
        e.preventDefault()
        SetSearch('')   //resetting search to empty
        onValue(search)
    }
    return (
        <form onSubmit={handleSubmit} className='row'>
            <div className="col-md-9">
                <input type="text"
                    className='form-control' placeholder='First Name'
                    aria-label='First name' value={search} onChange={handleChange} />
            </div>
            <div className="col-md-3">
                <button className='btn btn-primary' type='submit'>Search</button>
            </div>
        </form>
    )
}

export default Search