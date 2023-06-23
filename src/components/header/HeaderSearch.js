import React,{Component} from 'react';



class HeaderSearch extends Component {
    
     render(){
       
        return (
            <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
             </form>
        )
     }
}
export default HeaderSearch;
