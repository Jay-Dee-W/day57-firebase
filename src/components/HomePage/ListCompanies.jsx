import { Link } from "react-router-dom"

export default function ListCompanies({ company }) {
    const { Name, Address, Revenue, Phone } = company
    let link = `/${Name}`
    return (

        <div className='card'>
            <Link to={link}>
                {/* company card */}
                <h2>{Name}</h2>
                <h3>Address</h3>
                <p>{Address}</p>
                <h3>Revenue</h3>
                <p>{Revenue}</p>
                <h3>Phone</h3>
                <p>{Phone}</p>
            </Link>
        </div>
    )
}