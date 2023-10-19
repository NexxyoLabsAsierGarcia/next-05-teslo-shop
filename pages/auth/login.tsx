import { AuthLayout } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import NextLink from "next/link";

const LoginPage = () => {
  return (
    <AuthLayout title={'Log in'}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component="h1">Log in</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant='filled' fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type='password' variant='filled' fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>Log in</Button>
          </Grid>
          <Grid item xs={12}>
            <NextLink href="/auth/register" passHref legacyBehavior>
              <Link underline='always' display="flex" justifyContent="end">Don&apos;t have an account?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage