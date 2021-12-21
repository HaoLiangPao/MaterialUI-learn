import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Button
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// Icons
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// Checkbox
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

function CheckboxExample() {
	const [checked, setChecked] = React.useState(true);

	return (
		// Form Controller Lable is a must for Checkbox labels
		<FormControlLabel
			label='Testing'
			control={
				<Checkbox
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					// color='primary'
					// Special settings
					inputProps={{
						"aria-label": "secondary checkbox",
					}}
					// Checking with icons
					icon={<DeleteIcon />}
					checkedIcon={<SaveIcon />}
				/>
			}
		/>
	);
}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<TextField
					variant='filled'
					type='date'
					id='text1'
					label='text1'
					value={"123"}
					placeholder='placeholder'
					onChange={(e) => alert(123)}
				/>
				<CheckboxExample></CheckboxExample>
				{/* We can remove setting to each button and save everything into a button group */}
				<ButtonGroup variant='contained' color='default' aria-label=''>
					<Button
						// Basic Setting
						variant='contained'
						color='secondary'
						// Advanced Settings
						// disabled
						size='large'
						onClick={() => alert("hello")}
						href='#'
						// Custom Syling
						// style={{
						// 	fontSize: 24,
						// }}
						startIcon={<SaveIcon />}
						// endIcon={<SaveIcon />}
					>
						SAVE
					</Button>
					<Button
						variant='contained'
						color='primary'
						startIcon={<DeleteIcon />}
					>
						DISCARD
					</Button>
				</ButtonGroup>
				<ButtonGroup variant='contained' color='default' aria-label=''>
					<Button startIcon={<SaveIcon />}>SAVE</Button>
					<Button startIcon={<DeleteIcon />}>DISCARD</Button>
				</ButtonGroup>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
