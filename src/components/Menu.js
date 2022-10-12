import { AppBar, Toolbar, MenuItem, Typography } from "@mui/material";

const scrollDown = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export default function Menu({ menuSections }) {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#010638" }}>
      <Toolbar>
        {menuSections.map((page) => (
          <MenuItem
            key={page.displayName}
            onClick={() => scrollDown(page.sectionRef)}
          >
            <Typography textAlign="center">{page.displayName}</Typography>
          </MenuItem>
        ))}
      </Toolbar>
    </AppBar>
  );
}
