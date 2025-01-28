
const nav1 = `<nav class='navbar navbar-expand-lg navbar-light'>
<div class='container-fluid'>
    <a href='index.html' class='navbar-brand'>
        <img src='KIIT-Full-Logo-Left.png' alt='Logo' width='380' height='50'>
    </a>
    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
    </button>
    <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav ms-auto'>
            <li class='nav-item'><a href='index.html' class='nav-link'>Home</a></li>
            <li class='nav-item dropdown'>
                <a href='#' class='nav-link dropdown-toggle' id='navbarDropdown' role='button'
                    data-bs-toggle='dropdown' aria-expanded='false'>Services</a>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li><a class='dropdown-item' href='register.html'>Register Student</a></li>
                    <li><a class='dropdown-item' href='courses.html'>Manage Courses</a></li>
                    <li><a class='dropdown-item' href='attendance.html'>Attendance</a></li>
                    <li><a class='dropdown-item' href='grades.html'>Grades</a></li>
                    <li><a class='dropdown-item' href='reports.html'>Reports</a></li>
                </ul>
            </li>
            <li class='nav-item'><a href='about-us.html' class='nav-link'>About</a></li>
            <li class='nav-item'><a href='contactus.html' class='nav-link'>Contact</a></li>
            <li class='nav-item'>
                <button id='loginButton' class='btn btn-primary'>Log In</button>
            </li>
        </ul>
    </div>
</div>
</nav>`

export  default nav1 ;