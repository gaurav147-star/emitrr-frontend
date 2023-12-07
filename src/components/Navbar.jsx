import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import GppGoodIcon from "@mui/icons-material/GppGood";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const navigate = useNavigate();

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    console.log(index);
    console.log(path);
    navigate(path);
  };

  return (
    <>
      <Box
        sx={{
          width: 280,
          bgcolor: "white",
          borderRadius: "0px 40px 40px 0px",
          height: "auto",
        }}
      >
        <Box sx={{ width: "100%", width: 240, margin: "auto" }}>
          <Typography
            variant="h4"
            p={4}
            fontWeight={700}
            color="#4C49ED"
            fontFamily="Hanken Grotesk"
          >
            Learner
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0, "/")}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1, "/leaderboard")}
            >
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2, "/progress")}
            >
              <ListItemIcon>
                <DonutSmallIcon />
              </ListItemIcon>
              <ListItemText primary="Progress Report" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
