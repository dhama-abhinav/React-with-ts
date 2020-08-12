import React from 'react'
 import { AgGridReact } from 'ag-grid-react';
 import 'ag-grid-community/dist/styles/ag-grid.css';
 import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGridTableExample : React.FC = ()=>{
    const data = [
        {name : 'abhi',age : 24},
        {name : 'nazz',age : 28},
        {name : 'sunny',age : 27},
        {name : 'abeer',age : 22}
    ]

    const columns = [
        {
            headerName :"Name" , field :'name' ,checkboxSelection :true,floatingFilter:true,flex:1
        },
        {
            headerName :"Age" , field :'age',sortable :true,editable:true,filter:true,floatingFilter:true
        }
    ]
    const defaultColumnDef ={
        sortable :true,editable:true,filter:true
    }
    // const onGridReady =()=>{
    //     <div>
    //         <button>export</button>
    //     </div>
    // }
    return (
        <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '600px' }}
        >
            <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColumnDef}
           // onGridReady={onGridReady}
            >
            </AgGridReact>
        </div>
    )
}

export default AgGridTableExample