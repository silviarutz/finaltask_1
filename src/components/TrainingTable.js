import React  from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import dayjs from 'dayjs'

function TrainingTable() {
    const [training, setTraining] = React.useState([])

    React.useEffect(()=>{
        fetch('https://customerrest.herokuapp.com/gettrainings', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => setTraining(data))
        .catch(err => console.error(err))
    }, [])

    const columns= [
        {   
            field:'date', 
            sortable: true, 
            filter: true,
            cellRenderer: params => {
                return dayjs(params.value).format('MM/DD/YYYY h:mm A') 
                }
        },
        {
            field:'duration', 
            sortable: true, 
            filter: true
        },
        {
            field:'activity', 
            sortable: true, 
            filter: true
        },
        {
            headerName:"Firstname",
            field:'customer.firstname', 
            sortable: true, 
            filter: true,
        },
        {
            headerName:"Lastname",
            field:'customer.lastname', 
            sortable: true, 
            filter: true,
        }    
    ]

    return(
        <div className="ag-theme-material" style={{height: 600, width: '90%', margin: 'auto'}}>
            <AgGridReact
                rowData={training}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    )

}

export default TrainingTable
