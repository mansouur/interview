import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './index.css';

const useStyles = makeStyles({
  btn: {
    color: '#fff',
    minWidth: 90,
    textTransform: 'capitalize',
    border: '1.7px solid #232f3f',
    justifyContent: 'right',
    fontSize: 12,
    '&:hover': {
      border: '1.7px solid white',
    },
  },
  phrase: {
    marginLeft: 10,
    minWidth: 265,
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [toggleNav, setToggleNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleWindowChange = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowChange);
    return () => {
      window.removeEventListener('resize', handleWindowChange);
    };
  }, []);
  return (
    <nav className="nav">
      <button onClick={handleToggle} className="responsivebutton">
        <i class="fa fa-bars ico" style={{ fontSize: '16px' }}></i>
      </button>
      {(toggleNav || screenWidth > 707) && (
        <ul className="navItems">
          <li className="listItem" style={{ minWidth: 32 }}>
            <i
              class="fa fa-bars"
              style={{ fontSize: '12px', marginRight: '8px', color: '#FFF' }}
            ></i>
            All
          </li>
          <li className="listItem"> Sell </li>
          <li className="listItem">Buy Again</li>
          <li className="listItem">Today's Deals</li>
          <li className="listItem">Fashion</li>
          <li className="listItem">Best Sellers</li>
          <li className="listItem">Customer Service</li>
          <li className="listItem">Home Services</li>
          <li className="listItem">Automative</li>
          <li className="listItem">Gift Cards</li>
          <li className="listItem">Sports &amp; Outdoors</li>
          <li className="listItem history" style={{ minWidth: 50 }}>
            Browsing History <ArrowDropDownOutlinedIcon fontSize="inherit" />
          </li>
          <li className="listItem">Pet Sublies</li>
          <li className="listItem">Baby</li>
          <li className="listItem">Home</li>
        </ul>
      )}
      <div className="alexa">
        <Typography className={classes.phrase}>
          Introducing Echo devices with Alexa
        </Typography>
        <Button size="medium" className={classes.btn}>
          Shop now
          <ArrowRightOutlinedIcon fontSize="inherit" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
