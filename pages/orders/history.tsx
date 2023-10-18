import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },
  { 
    field: 'paid',
    headerName: 'Paid',
    description: 'Info if it is paid or not',
    width: 200,
    renderCell: ( params: GridRenderCellParams) => {
      return (
        params.row.paid
          ? <Chip color="success" label="Paid" variant='outlined' />
          : <Chip color="error" label="Not Paid" variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'View Order',
    width: 200,
    renderCell: ( params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
          <Link underline='always'>{`Order: ${params.row.id}`}</Link>
        </NextLink>
      )
    },
    sortable: false
  }
];

const rows = [
  { id: 1, paid: false, fullname: 'Jose Mª Aznar' },
  { id: 2, paid: true, fullname: 'Mariano Rajoy' },
  { id: 3, paid: false, fullname: 'Pedro Sánchez' },
  { id: 4, paid: true, fullname: 'Miquel Izeta' },
  { id: 5, paid: true, fullname: 'Andoni Ortuzar' },
  { id: 6, paid: true, fullname: 'Joseba Asirón' },
  { id: 7, paid: false, fullname: 'Albert Rivera' },
];

const HistoryPage = () => {
  return (
    <ShopLayout title={'Orders Historic'} pageDescription={'Client recent orders history'}>
      <>
        <Typography variant='h1' component="h1">Orders history</Typography>

        <Grid>
          <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid
              columns={columns}
              rows={rows}
              initialState={{
                pagination: { 
                  paginationModel: { pageSize: 10 } 
                },
              }}
              pageSizeOptions={ [5, 10, 25] }
            ></DataGrid>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default HistoryPage