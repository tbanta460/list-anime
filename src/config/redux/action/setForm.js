export const setSearchValue = (formType, formValue) => {
	return {
		type: "SET_FORM_SEARCH", formType, formValue
	}
}
export const setDataSearch = (formType, formValue) => {
	return {
		type: "SET_DATA_SEARCH", formType, formValue
	}
}
export const setMainData = (formType, formValue) => {
	return {
		type: "SET_DATA", formType, formValue
	}
}



export const getDataAnimes = async () => {
	return await fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => data)
            .catch(error => error)
}