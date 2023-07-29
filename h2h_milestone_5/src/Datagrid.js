
import React from 'react';
import './Datagrid.css';

class Datagrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
    };
  }

  handleRowSelect = (id) => {
    const { selectedRows } = this.state;
    const index = selectedRows.indexOf(id);

    if (index === -1) {
      selectedRows.push(id);
    } else {
      selectedRows.splice(index, 1);
    }

    this.setState({ selectedRows });
  };

  render() {
    const data = [
      {
        SlNo: 1,
        customerOrderId: 754349803,
        salesOrg: 3911,
        distributionChannel: 'United Arab Emirates',
        companyCode: 3290,
        orderCreationDate: '01-01-2022',
        orderAmount: 1405.54,
        orderCurrency: 'AED',
        customerNumber: 1210499770,
        amountinUSD: 619.28502,
      },
      {
        SlNo: 2,
        customerOrderId: 930253442,
        salesOrg: 2381,
        distributionChannel: 'Greece',
        companyCode: 3290,
        orderCreationDate: '01-01-2022',
        orderAmount: 1441.4835,
        orderCurrency: 'EUR',
        customerNumber: 1210351400,
        amountinUSD: 1739.815674,
      },
      {
        SlNo: 3,
        customerOrderId: 819741436,
        salesOrg: 3605,
        distributionChannel: 'Argentina',
        companyCode: 3290,
        orderCreationDate: '01-01-2022',
        orderAmount: 1065.33,
        orderCurrency: 'EUR',
        customerNumber: 1210124309,
        amountinUSD: 1207.622577,
      },
      {
        SlNo: 4,
        customerOrderId: 881355361,
        salesOrg: 3645,
        distributionChannel: 'Armenia',
        companyCode: 3470,
        orderCreationDate: '02-01-2022',
        orderAmount: 302.85,
        orderCurrency: 'EUR',
        customerNumber: 12311152,
        amountinUSD: 343.59342,
      },
      {
        SlNo: 5,
        customerOrderId: 821659852,
        salesOrg: 2470,
        distributionChannel: 'United States of America',
        companyCode: 3220,
        orderCreationDate: '02-01-2022',
        orderAmount: 8380.69,
        orderCurrency: 'EUR',
        customerNumber: 1230021722,
        amountinUSD: 9508.17216133333,
      },
      {
        SlNo: 6,
        customerOrderId: 957194828,
        salesOrg: 3150,
        distributionChannel: 'United States Minor Outlying Islands',
        companyCode: 3290,
        orderCreationDate: '02-01-2022',
        orderAmount: 545.85,
        orderCurrency: 'EUR',
        customerNumber: 1210183107,
        amountinUSD: 619.28502,
      },
      {
        SlNo: 7,
        customerOrderId: 806322513,
        salesOrg: 3396,
        distributionChannel: 'Serbia',
        companyCode: 3290,
        orderCreationDate: '02-01-2022',
        orderAmount: 545.85,
        orderCurrency: 'EUR',
        customerNumber: 12100499770,
        amountinUSD: 619.28502,
      },
      {
        SlNo: 8,
        customerOrderId: 922237131,
        salesOrg: 2353,
        distributionChannel: 'Turks and Caisco Islands',
        companyCode: 3290,
        orderCreationDate: '02-01-2022',
        orderAmount: 562.73,
        orderCurrency: 'EUR',
        customerNumber: 1210111951,
        amountinUSD: 638.435942666667,
      },
      // Add more data rows here
    ];

    return (
      <div>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={data.length === this.state.selectedRows.length}
                  onChange={() =>
                    this.setState((prevState) => {
                      if (prevState.selectedRows.length === data.length) {
                        return { selectedRows: [] };
                      } else {
                        return { selectedRows: data.map((row) => row.customerOrderId) };
                      }
                    })
                  }
                />
              </th>
              <th>Sl. No</th>
              <th>Customer Order ID</th>
              <th>Sales Org</th>
              <th>Distribution Channel</th>
              <th>Company Code</th>
              <th>Order Creation Date</th>
              <th>Order Amount</th>
              <th>Order Currency</th>
              <th>Customer Number</th>
              <th>Amount in USD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.customerOrderId}>
                <td>
                  <input
                    type="checkbox"
                    checked={this.state.selectedRows.includes(row.customerOrderId)}
                    onChange={() => this.handleRowSelect(row.customerOrderId)}
                  />
                </td>
                <td>{row.SlNo}</td>
                <td>{row.customerOrderId}</td>
                <td>{row.salesOrg}</td>
                <td>{row.distributionChannel}</td>
                <td>{row.companyCode}</td>
                <td>{row.orderCreationDate}</td>
                <td>{row.orderAmount}</td>
                <td>{row.orderCurrency}</td>
                <td>{row.customerNumber}</td>
                <td>{row.amountinUSD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Datagrid;
