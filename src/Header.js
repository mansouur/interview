import logo from './logo.png';
import arabic from './uae.png';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <div className="location">
        <span className="deliver">deliver to Munther</span> <br />
        <i
          class="fa fa-map-marker"
          style={{ fontSize: '20px', padding: '0px 3px' }}
        ></i>
        Sharjah
      </div>
      <div className="search-container">
        <div className="searchmenu">
          All
          <ArrowDropDownOutlinedIcon fontSize="inherit" />
        </div>
        <input
          type="text"
          className="searchbar"
          placeholder=" "
          name="search"
        />
        <div className="searchIcon">
          <i class="fa fa-search" style={{ paddingTop: 10 }}></i>
        </div>
      </div>
      <div className="language">
        <img src={arabic} className="arabic" alt="arabic" />
        <ArrowDropDownOutlinedIcon
          fontSize="inherit"
          style={{ marginBottom: 12 }}
        />
      </div>
      <div className="greeting">
        <span className="hello">Hello, Munther</span> <br />
        Account &amp; Lists
        <ArrowDropDownOutlinedIcon fontSize="inherit" />
      </div>
      <div className="returns">
        <p style={{ padding: 0, margin: 0 }}>
          Returns <br />
          &amp; Orders
        </p>
      </div>
      <div className="cartdiv">
        <span className="cartcounter">0</span>
        <br />
        <div className="cartcontainer">
          <ShoppingCartOutlinedIcon
            className="cart"
            style={{ margin: 0, padding: 0 }}
          />
          <span className="cartname" style={{ margin: 0, padding: 0 }}>
            Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
