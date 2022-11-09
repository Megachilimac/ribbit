import { Box, List, ListItemText, Typography } from "@mui/material";

export default function DevTeam() {
  return (
    <Box sx={{ bgcolor: "#509512", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 8 }}
      >
        Dev Team
      </Typography>
      <div style={{ textAlign: "center" }}>
        <List
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <ListItemText>
            <Typography variant="h4" color="white">
              Pierre - W4CKX
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4" color="white">
              Ahmet - Aicodix GmbH
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4" color="white">
              Neil - K2LL
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h4" color="white">
              Jason - KE0CCI
            </Typography>
          </ListItemText>
        </List>
      </div>
    </Box>
  );
}
