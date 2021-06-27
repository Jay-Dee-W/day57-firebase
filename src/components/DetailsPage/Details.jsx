import { useSelector } from "react-redux"
import Profile from './Profile'
import Employees from './Employees'

export default function Details(props) {
  
    const companyName = props.location.pathname.substring(1)
  

    let {Companies}  = useSelector(state => state.companyReducer)
   
    const Company = Companies.filter(company => {
        console.log( company.Name, companyName  )
       return company.Name === companyName } )
   
    const {People} = useSelector(state => state.personReducer )
    const employees = People.filter( person => {
        
        return person.Company === companyName 
        })
    console.log( 'company', Company, 'employees', employees)
    return (
        <>
        <Profile Company={Company} />
        <Employees Employees={employees} />
        </>
    )
}