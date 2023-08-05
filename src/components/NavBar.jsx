import logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <div className="row justify-content-center align-items-center">
            <div className='col-sm-12 col-md-4'>
                <img className='logo' src={logo}/>
            </div>
            <div className='col-xs-12 col-md-8 d-none d-md-block'>
                <h1>Property Quest</h1>
            </div>
            
        </div>
    )
}

export default NavBar