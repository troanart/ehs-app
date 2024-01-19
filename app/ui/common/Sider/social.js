import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Social() {
  return (
    <Stack className="flex flex-row w-[100px] gap-5 justify-center items-center flex-wrap">
      <IconButton aria-label="GitGub">
        <GitHubIcon sx={{ fill: "white", scale: "1.4" }} />
      </IconButton>
      <IconButton aria-label="facebook">
        <FacebookIcon sx={{ fill: "white", scale: "1.4" }} />
      </IconButton>
      <IconButton aria-label="x">
        <XIcon sx={{ fill: "white", scale: "1.4" }} />
      </IconButton>
      <IconButton aria-label="instagram">
        <InstagramIcon sx={{ fill: "white", scale: "1.4" }} />
      </IconButton>
      <IconButton aria-label="telegram">
        <TelegramIcon sx={{ fill: "white", scale: "1.4" }} />
      </IconButton>
    </Stack>
  );
}
