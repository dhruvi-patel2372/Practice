import React from "react";

const Nav = () => {
    return (
        <>
            {/* {/* <div className="row"> */}
                {/* <div className="col">  */}
        <nav className="navbar">
         <div className="container-fluid">
      {/* <a class="navbar-brand">Navbar</a> */}
      <svg id="i-folder-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M4 28 L28 28 30 12 14 12 10 8 2 8 Z M28 12 L28 4 4 4 4 8" />
</svg>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <circle cx="14" cy="14" r="12" />
    <path d="M23 23 L30 30"  />
</svg>
        <button class="btn btn-outline-success" type="submit">My Account</button>
      </form>
      </div>
</nav>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Software Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">CRM Software</a></li>
            <li><a class="dropdown-item" href="#">Project Management</a></li>
            <li><a class="dropdown-item" href="#">Email Marketing</a></li>
            <li><a class="dropdown-item" href="#">Email Marketing</a></li>
            <li><a class="dropdown-item" href="#">Human Resources</a></li>
          </ul>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Software Application</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Submit Your App</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default Nav;