const initState = {
	setValue:{
		valueSearch:""
	},
    setDataAnime:{
        dataSearch:[],
        setData:[]
    }
}

export const SetForm = (state = initState, action) => {
	switch(action.type){
        
		case "SET_FORM_SEARCH":
            return{
                ...state,
                setValue:{
                    ...state.setValue,
                    [action.formType]: action.formValue
                }
            }
        case "SET_DATA_SEARCH":       
            return{
                ...state,
                setDataAnime:{
                    ...state.setDataAnime,
                    [action.formType]: action.formValue
                }
            }
        case "SET_DATA":
            return{
                ...state,
                setDataAnime:{
                    ...state.setDataAnime,
                    [action.formType]: action.formValue
                }
            }
		default:
		return state
	}
}