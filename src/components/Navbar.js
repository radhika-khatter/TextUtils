import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const handleG=()=>{
      document.body.style.backgroundColor='#063e02';
      document.body.style.color='white';
  }
  const handleB=()=>{
    document.body.style.backgroundColor='#070176';
    document.body.style.color='white';
  }
  const handleC=()=>{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
  }
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutText">About</Link>
        </li>
      </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>*/}
      <div className={`btn-group ${props.visibility} mx-3`}  role="group" aria-label="Basic mixed styles example" >
      <button type="button" className="btn btn-success" onClick={handleG}>Green Theme</button>
      <button type="button" className="btn btn-primary" onClick={handleB}>Blue Theme</button>
      <button type="button" className="btn btn-secondary" onClick={handleC}>Black Theme</button>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
