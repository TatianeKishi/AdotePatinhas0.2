import './Navbar.css';

function NavBar() {
  return (
    <div className='header'>
      <img src='/img/logo2.svg' className='header-logo'/>
      
      <ul className='Container'>
        <h1 to='/inicio' className='item'>INICIO</h1>
        <h1 to='/petDonation' className='item'>DOE UM BICHINHO</h1>
        <h1 to='/profile' className='item'>PERFIL</h1>
        <h1 to='/interests' className='item'>INTERESSES</h1>
        <h1 to='/supportUs' className='item'>NOS APOIE</h1>
      </ul>

    </div>
  )
}

export default NavBar

        