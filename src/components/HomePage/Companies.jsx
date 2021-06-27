import { useDispatch, useSelector} from "react-redux";
import ListCompanies from "./ListCompanies";

import { useEffect } from "react";
import { getCompanies } from "../../actions/company";

export default function Companies() {
//get companies object from redux store
let {Companies}  = useSelector(state => state.companyReducer)
let dispatch = useDispatch()

useEffect(()=>{
    // dispatch(getCompanies())
     // eslint-disable-next-line
},[])

    return (
        <div className='Container'>
            <h1>Companies</h1>
            {/* check if companies object not empty */}
            {Companies.length !== 0 ? 
                // map through Companies object return one company card per company 
                Companies.map(company => <ListCompanies company={company} /> )
                // return message "no companies" 
                :<message>There are currently no companies to review</message>
            }
        </div>
    )
}