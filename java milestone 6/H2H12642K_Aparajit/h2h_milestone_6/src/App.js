import React, { useState } from 'react';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const columns = [
  { field: 'slNo', headerName: 'Sl No', width: 100 },
  { field: 'customerOrderId', headerName: 'Customer Order Id', width: 200 },
  { field: 'salesOrg', headerName: 'Sales Org', width: 150 },
  { field: 'distributionChannel', headerName: 'Distribution Channel', width: 200 },
  { field: 'companyCode', headerName: 'Company Code', width: 150 },
  { field: 'orderCreationDate', headerName: 'Order Creation Date', width: 200 },
  { field: 'orderCurrency', headerName: 'Order Currency', width: 150 },
  { field: 'customerNumber', headerName: 'Customer Number', width: 150 },
  { field: 'amountInUSD', headerName: 'Amount in USD', width: 150 },
  { field: 'orderAmount', headerName: 'Order Amount', width: 150 },
];

const data = [
  {
    id: 1,
    slNo: 1,
    customerOrderId: 754349803,
    salesOrg: 3911,
    distributionChannel: 'United Arab Emirates',
    companyCode: 3290,
    orderCreationDate: '01-01-2022',
    orderAmount: 1405.54,
    orderCurrency: 'AED',
    customerNumber: 1210499770,
    amountInUSD: 619.28502,
  },
  {
    id: 2,
    slNo: 2,
    customerOrderId: 930253442,
    salesOrg: 2381,
    distributionChannel: 'Greece',
    companyCode: 3290,
    orderCreationDate: '01-01-2022',
    orderAmount: 1441.4835,
    orderCurrency: 'EUR',
    customerNumber: 1210351400,
    amountInUSD: 1739.815674,
  },
  {
    id: 3,
    slNo: 3,
    customerOrderId: 819741436,
    salesOrg: 3605,
    distributionChannel: 'Argentina',
    companyCode: 3290,
    orderCreationDate: '01-01-2022',
    orderAmount: 1065.33,
    orderCurrency: 'EUR',
    customerNumber: 1210124309,
    amountInUSD: 1207.622577,
  },
  {
    id: 4,
    slNo: 4,
    customerOrderId: 881355361,
    salesOrg: 3645,
    distributionChannel: 'Armenia',
    companyCode: 3470,
    orderCreationDate: '02-01-2022',
    orderAmount: 302.85,
    orderCurrency: 'EUR',
    customerNumber: 12311152,
    amountInUSD: 343.59342,
  },
  {
    id: 5,
    slNo: 5,
    customerOrderId: 821659852,
    salesOrg: 2470,
    distributionChannel: 'United States of America',
    companyCode: 3220,
    orderCreationDate: '02-01-2022',
    orderAmount: 8380.69,
    orderCurrency: 'EUR',
    customerNumber: 1230021722,
    amountInUSD: 9508.17216133333,
  },
  {
    id: 6,
    slNo: 6,
    customerOrderId: 957194828,
    salesOrg: 3150,
    distributionChannel: 'United States Minor Outlying Islands',
    companyCode: 3290,
    orderCreationDate: '02-01-2022',
    orderAmount: 545.85,
    orderCurrency: 'EUR',
    customerNumber: 1210183107,
    amountInUSD: 619.28502,
  },
  {
    id: 7,
    slNo: 7,
    customerOrderId: 806322513,
    salesOrg: 3396,
    distributionChannel: 'Serbia',
    companyCode: 3290,
    orderCreationDate: '02-01-2022',
    orderAmount: 545.85,
    orderCurrency: 'EUR',
    customerNumber: 12100499770,
    amountInUSD: 619.28502,
  },
  {
    id: 8,
    slNo: 8,
    customerOrderId: 922237131,
    salesOrg: 2353,
    distributionChannel: 'Turks and Caicos Islands',
    companyCode: 3290,
    orderCreationDate: '02-01-2022',
    orderAmount: 562.73,
    orderCurrency: 'EUR',
    customerNumber: 1210111951,
    amountInUSD: 638.435942666667,
  },
];

const theme = createTheme();

const DataGridComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleRefresh = () => {
    // Handle refresh logic...
  };

  const handleEdit = () => {
    // Handle edit logic...
  };

  const handleDelete = () => {
    // Handle delete logic...
  };

  const handlePredict = () => {
    // Handle predict logic...
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Handle search logic using the updated search term...
  };

  const handleAdvancedSearch = () => {
    // Handle advanced search logic...
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/add-data">Add Data</a>
        <a href="/analytics">Analytics View</a>
        <div className="topnav-search">
          <input
            type="text"
            placeholder="Search Customer Order ID"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleAdvancedSearch}
          >
            Advanced Search
          </Button>
        </div>
      </div>
      <div className="datagrid-container">
        <div className="buttons-container">
          <Button variant="contained" color="secondary" onClick={handleRefresh}>
            Refresh Data
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" onClick={handlePredict}>
            Predict
          </Button>
        </div>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
    </ThemeProvider>
  );
};

export default DataGridComponent;