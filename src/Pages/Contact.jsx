import React,{useState} from 'react'

const Contact = () => {
  const [form,setForm]=useState({
    name : '',
    gender:'',
    email : '',
    password : '',
    department:''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    alert('Form submitted!')
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name"/><br />
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}/><br />
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange}/> Male<br />
        <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange}/> Female<br />
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange}/><br />
        <label>Department:</label>
        <input type="text" name="department" value={form.department} onChange={handleChange}/><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
