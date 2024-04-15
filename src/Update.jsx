import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setValues(res.data))
    .catch(err => console.log(err))
  }, [])

  function handleUpdate(e) {
    e.preventDefault()
    axios.put('http://localhost:3000/users/'+id, values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form action="" onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e => setValues({...values, name: e.target.value})} value={values.name} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' 
            onChange={e => setValues({...values, email: e.target.value})} value={values.email}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='Phone'>Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone' 
            onChange={e => setValues({...values, phone: e.target.value})} value={values.phone}/>
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update