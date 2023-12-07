import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const SelectLang = () => {
    const [language, setLanguage] = React.useState("english");

    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
  
  return (
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
        <Typography fontWeight={700}>Select Language 
        {/* {bankInfo[0].bankName} */}
         </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={language}
            onChange={handleChange}
            autoWidth
            label="Language"
          >
            <MenuItem value={"english"}>English</MenuItem>
            <MenuItem value={"hindi"}>Hindi</MenuItem>
            <MenuItem value={"french"}>French</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}

export default SelectLang