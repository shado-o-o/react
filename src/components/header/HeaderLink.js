import React,{Component} from 'react';



class HeaderLink extends Component {
    
     render(){
       
        return (
            <li className="nav-item">
            <a className="nav-link" href="#">{this.props.link}</a>
            </li>
        )
     }
}
export default HeaderLink;

