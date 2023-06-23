import React,{Component} from 'react';



class HeaderDrop extends Component {
    
     render(){
       
        return (
            <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {this.props.task}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
            </li>
        )
     }
}
export default HeaderDrop;

