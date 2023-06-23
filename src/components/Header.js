import React,{Component} from 'react';
import HeaderLink from './header/HeaderLink';
import HeaderDrop from './header/HeaderDrop';
import HeaderSearch from './header/HeaderSearch';
import '../sass/main.css';


class Header extends Component {
    
     render(){
       
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">logo web site</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Settings</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                   <HeaderLink link="about us"/>
                   <HeaderLink link="acount"/>
                   <HeaderLink link="link"/>
                   <HeaderDrop task="your tasks"/>
                  </ul>
                  <HeaderSearch/>
                </div>
              </div>
            </div>
          </nav>
        )
     }
}
export default Header;

