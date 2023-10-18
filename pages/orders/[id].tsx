import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";

const OrderPage = () => {
  return (
    <ShopLayout title="6519651 Order resume" pageDescription="Order resume">
      <>
        <Typography variant="h1" component="h1">Order: ABC123</Typography>

        {/* <Chip
          sx={{ my: 2 }}
          label="Payment pending"
          variant="outlined"
          color="error"
          icon={ <CreditCardOffOutlined/> }
        /> */}
        <Chip
          sx={{ my: 2 }}
          label="Order already payed"
          variant="outlined"
          color="success"
          icon={ <CreditScoreOutlined/> }
        />

        <Grid container>
          <Grid item xs={12} sm={7}>
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="summary-card">
              <CardContent>
                <Typography variant="h2">Resume (3 products)</Typography>
                <Divider sx={{ my:1 }} />

                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Shipping Address</Typography>
                  <NextLink href="/checkout/address" passHref legacyBehavior>
                    <Link underline="always">Edit</Link>
                  </NextLink>
                </Box>

                <Typography>Name Surname</Typography>
                <Typography>321 somewhere</Typography>
                <Typography>Imagineland, IS15</Typography>
                <Typography>USA</Typography>
                <Typography>+1 54 654 1 684</Typography>

                <Divider sx={{ my: 1 }}></Divider>

                <Box display="flex" justifyContent="end">
                  <NextLink href="/cart" passHref legacyBehavior>
                    <Link underline="always">Edit</Link>
                  </NextLink>
                </Box>

                <OrderSummary />

                <Box sx={{ mt: 3 }}>
                  {/* TODO */}
                  <h1>PAY</h1>
                  
                  <Chip
                    sx={{ my: 2 }}
                    label="Order already payed"
                    variant="outlined"
                    color="success"
                    icon={ <CreditScoreOutlined/> }
                  />
                </Box>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default OrderPage;