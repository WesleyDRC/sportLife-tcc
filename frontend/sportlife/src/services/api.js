import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const api = axios.create({
	baseURL,
	headers:{
		"Context-Type" : "application/json",
	}
});

export {api}
