import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class Table extends React.Component{

    getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTable: {
            paper: {
              boxShadow: "none",
            },
          }
        }
      })

    render(){
        const { beers } = this.props;
        const columns = ["Name", "Alcohol By Volume", "Style", "Ounces","id","image"];
        const options = { print: false, download: false, filter: false, responsive: 'scroll', selectableRows: false };

    return(
        <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
            title={"Beer List"}
            data={beers.map(item =>
                {
                    return [
                        item.name,
                        item.abv,
                        item.style,
                        item.ounces,
                        item.id,
                        <img src='data:image/jpeg;base64,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' alt="shahid" height="100px" width="100px"/>,
                        
                    ]
                })}
            columns={columns}
            options ={ options }
      />
      </MuiThemeProvider>
    )
    }
}

export default Table;