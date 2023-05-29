import Typography from "@mui/material/Typography";

export function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			Creapo.com {new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
