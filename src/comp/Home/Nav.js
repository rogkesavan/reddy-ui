import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function Nav() {
  return (
    <nav className='df gap-8 px-8 py-4 bg-slate-300'>
      <img className='w-40' src={logo} alt="Dr.Reddy logo" />

      <Link className='ml-auto' to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>

      <Link className='ml-auto' to='/login'>
        <button>
          Login
        </button>
      </Link>

      <Link to='/signup'>
        <button className=''>
          Signup
        </button>
      </Link>
    </nav>
  )
}

export default Nav