export const CREATE_PERSON = 'CREATE_PERSON'

export const createPerson = (data) => {
    return{
        type: CREATE_PERSON,
        payload : data
    }
}