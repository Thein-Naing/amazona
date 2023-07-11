import '../Style/Header.css';
import amazon from '../images/amazon.png';
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {auth} from "../screens/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import {useStateValue} from "../Context/StateProvider";

const Header = () => {

  const [{basket}, dispatch] = useStateValue();

  const[user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const handleAuthentication = async() => {
    if (user) {
      auth.signOut()
    }
  }


  return (
    <div className="header">
      <Link to='/'>
      <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt='amazona' />
      </Link>
      <div className="header_search">

        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {/* <Link to='/login'> */}
        <Link to={!user && '/login'}>
        <div
        onClick={handleAuthentication}
        className="header_option">
          {/* <span className="header_optionOne">Hi Guest</span> */}
        <span className="header_optionOne">Hi {!user ? "Guest" : user?.email}</span>
        {/* <span className="header_optionTwo">Sign in</span> */}
        <span className="header_optionTwo">{user ? "Sign Out" : "Sign In"}</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <Link to='/checkout'>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon  />
          <span className="header_optionTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
