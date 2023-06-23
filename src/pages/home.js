import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<Container>
			<Grid>
				<NavBar />
			</Grid>
			<Grid>
				<Grid xs={12}>amoo</Grid>
			</Grid>
			<Grid>
				<Grid xs={12}>akin</Grid>
			</Grid>
		</Container>
	);
}
