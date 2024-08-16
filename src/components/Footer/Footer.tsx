import React from "react";
import { Box, Link, Typography } from "@mui/material";

export const Footer: React.FC = () => {
	return (
		<Box sx={{ textAlign: "center", backgroundColor: "#000000", marginTop: "auto",width:'100%' }}>
			<Typography variant="caption" display="block" color="white">
			<Link href="/privacy-policy" className="link-white">Política de Privacidad</Link> |
			<Link href="/legal-notice" className="link-white">Aviso Legal</Link> |
			<Link href="/cookie-policy" className="link-white">Política de Cookies</Link>
            </Typography>
			<Typography variant="caption" display="block" sx={{ marginTop: 1 }} color="white">
				&copy; 2024 Gift Genious ®
			</Typography>
		</Box>
	);
};
