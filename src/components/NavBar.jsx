import logo from '../assets/logo.png'
const NavBar = () => {
    return (
        <div className="row align-items-center">
            <div className='col-4'>
                <img className='logo' src={logo}/>
            </div>
            <div className='col-8'>
                <h1>Property Quest</h1>
            </div>
            
        </div>
    )
}

export default NavBar