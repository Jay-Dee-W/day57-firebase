//import actions
import { ADD_EMPLOYEE, CREATE_COMPANY, GET_COMPANIES } from "../actions/company";


//set initialState

let initialState = {
    Companies: []
}


//export reducer 
export default function companyReducer( state = initialState, action) {
    let companies  =  state.Companies 
    switch (action.type) {
        //create new company
        case GET_COMPANIES:
            console.log(action.payload)
            return state
        case CREATE_COMPANY:
             companies.push(action.payload)
            return { ...state , Companies : companies }
        case ADD_EMPLOYEE:
            let updateCompanies  = []
            companies.forEach(company => {
             if(   company.Name === action.payload ){
                 company.Employees = company.Employees + 1
             }
             updateCompanies.push(company)   

            })
            
            
            return {...state, Companies : updateCompanies }
            
        default :
            return state
    }
}

