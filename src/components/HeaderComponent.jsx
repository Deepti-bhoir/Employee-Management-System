import React,{Component} from 'react'

class HeaderComponent extends Component{
constructor(props){
    super(props)

    this.state = {

    }

}

render(){
    return(
        <div>
        <header>
            <nav className="navbar-expand-expand-md navbar-dark bg-dark">
            <div><a href="Deepti_Employee-Management-System/employee" className="navbar-brand">Employee Management System</a>
            </div>
            </nav>
        </header>
        </div>
        )
    }
}

export default HeaderComponent