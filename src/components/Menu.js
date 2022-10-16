import { useState } from "react";
import { AppBar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppMenu({ menuSections }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };
  const scrollDown = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#509512" }}>
      <Box display="flex" flexGrow={1}>
        <Button aria-haspopup="true" onClick={recordButtonPosition}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
        >
          {menuSections.map((page) => (
            <MenuItem
              key={page.displayName}
              onClick={() => scrollDown(page.sectionRef)}
            >
              <Typography textAlign="center">{page.displayName}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </AppBar>
  );
}
