

export default function Employees({Employees}) {
    console.log(Employees)
    
    return (
        <div className='Container'>
        {Employees.map( Employee => {
            return (
                <>
                <p>{Employee.Name}</p>
                <p>{Employee.Address}</p>
                </>
            )
        })}
        </div>
    )
}