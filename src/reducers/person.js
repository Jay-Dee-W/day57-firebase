//import actions
import { CREATE_PERSON } from '../actions/person'

//set initialState
let initialState = {
    People: [
        {
            Name: 'Test Person',
            Address: 'Person Address',
            Company: 'testName'
        }
    ]
}

//export reducer 
export default function personReducer(state = initialState, action) {
    switch (action.type) {
       
        case CREATE_PERSON:
            console.log('create-person')
            let people = state.People
           people.push(action.payload) 
            return {...state, People : people}
        default:
            return state
    }
}
