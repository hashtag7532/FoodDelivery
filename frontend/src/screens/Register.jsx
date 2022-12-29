import { useState } from 'react';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="block bg-[#ADD8E6] text-black w-fit h-[50px] p-[5px]"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="block bg-red-500 text-white w-fit h-[50px] p-[5px]"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="flex justify-center">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="block font-2xl text-black p-[5px]">Name</label>
		<input onChange={handleName} className="font-xl p-[5px] m-[2px]"
		value={name} type="text" />

		<label className="block font-2xl text-black p-[5px]">Email</label>
		<input onChange={handleEmail} className="font-xl p-[5px] m-[2px]"
		value={email} type="email" />

		<label className="block font-2xl text-black p-[5px]">Password</label>
		<input onChange={handlePassword} className="font-xl p-[5px] m-[2px]"
		value={password} type="password" />

		<button onClick={handleSubmit} className="text-black bg-red-500 border rounded-md font-xl block p-[5px] mx-[10px] my-auto" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
