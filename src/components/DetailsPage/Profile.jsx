

export default function Profile({Company}) {
    console.log(Company )
   
    return (
        <div className='Container'>
            <p>{Company[0].Address}</p>
            <p>{Company[0].Revenue}</p>
            <p>{Company[0].Phone}</p>
            <p>{Company[0].Employees}</p>
        </div>
    )
}