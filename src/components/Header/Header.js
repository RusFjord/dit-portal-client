import { AppBar, Typography } from "@mui/material";
import Logo from "../Logo/Logo";

import "./Header.css";

function Header(props) {
  const { title } = props
  return (
    <AppBar position="static" className="app-nav-bar">
      <Logo />
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </AppBar>
  );
}

export default Header;
