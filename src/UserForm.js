import React, {useState} from 'react';

const UserForm = ()=> {
    const initialSate = {
        username : "",
        emailadress : "",
        password : ""
    }
    const [ formdata , setFormdata ] = useState(initialSate)
    const handleChange = e =>{
        const {name , value} = e.target;
        setFormdata(data => ({
            ...data,
            [name] : value
        }))
    }
    const handleSubmit = e => {
        e.preventDefualt()
        const {username , emailadress , password} = formdata;
        alert(`CREATED ${username} , Email : ${emailadress} , PASSWORD :  ${password}`)
        setFormdata(initialSate)
    }    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username : </label>
            <input 
            id='username' 
            type='text' 
            placeholder='username' 
            name = 'username'
            value={formdata.username} 
            onChange={handleChange} 
            />
            <label htmlFor='email'>Email : </label>
            <input 
            type="email" 
            id="email" 
            placeholder='email' 
            name = 'emailadress'
            value={formdata.emailadress} 
            onChange={handleChange} />
            <label htmlFor='password'>password :</label>
            <input
            type="password"
            id="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            />
            <button>Add me to list!</button>
            </form>
        </div>
    )
}

export default UserForm;