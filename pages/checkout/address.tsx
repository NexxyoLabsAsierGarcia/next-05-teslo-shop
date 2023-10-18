import { ShopLayout } from '@/components/layouts'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddressPage = () => {
  return (
    <ShopLayout title="Address" pageDescription="Confirm destination address">
      <>
        <Typography variant="h1" component="h1">Address</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Surname" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address 2 (optional)" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Postal Code" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Select variant="filled" label="Country" value={1}>
                <MenuItem>Spain</MenuItem>
                <MenuItem>UK</MenuItem>
                <MenuItem>France</MenuItem>
                <MenuItem>Italy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone" variant="filled" fullWidth />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button color="secondary" className="circular-btn" size="large">Check Order</Button>
        </Box>
      </>
    </ShopLayout>
  )
}

export default AddressPage