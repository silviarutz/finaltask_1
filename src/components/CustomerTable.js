import React  from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

function CustomerTable() {
    const [customer, setCustomer] = React.useState([])

    React.useEffect(()=>{
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }, [])

    const columns= [
        {field:'firstname', width: 150, sortable: true, filter: true},
        {field:'lastname', width: 150, sortable: true, filter: true},
        {field:'streetaddress', sortable: true, filter: true},
        {field:'postcode', width: 150, sortable: true, filter: true},
        {field:'city', width: 150, sortable: true, filter: true},
        {field:'email', sortable: true, filter: true},
        {field:'phone', sortable: true, filter: true}
    ]

    return(
        <div className="ag-theme-material" style={{height: 600, width: '90%', margin: 'auto'}}>
            <AgGridReact
                rowData={customer}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    )

}

export default CustomerTable