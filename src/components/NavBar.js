import { Typography } from "@mui/material";
const NavBar = () => {
	return (
		<div>
			<Typography variant="h2" textAlign="start">
				Creapo.
			</Typography>
			<ul>
				<li>SignIn</li>
				<li>SignUp</li>
				<li>Gallery</li>
				<li>About</li>
			</ul>
		</div>
	);
};

export default NavBar;
