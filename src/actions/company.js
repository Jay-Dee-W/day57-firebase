import db from '../firebaseConfig'
export const GET_COMPANIES = 'GET_COMPANIES'
export const CREATE_COMPANY = 'CREATE_COMPANY'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

export const getCompanies = async () => {
    let companies = []
    let ref = await db.ref('/company').on('value', snapshot => {
        let company = snapshot.val()
        companies.push(company)

    })
    return {
        type: GET_COMPANIES,
        payload: companies
    }
}

export const createCompany = (data) => {
    db.ref(`/company/${data.Name}`).set(data)
    return {
        type: CREATE_COMPANY,
        payload: data
    }
}

export const addEmployee = (data) => {

    return {
        type: ADD_EMPLOYEE,
        payload: data
    }
}
