import React from "react";
import { Box, Button, TextField } from "@mui/material";

export const LoginPage: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			<Button variant="outlined">SIGN IN</Button>
		</Box>
	);
};
