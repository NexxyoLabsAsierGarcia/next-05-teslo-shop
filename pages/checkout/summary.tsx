import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";

const SummaryPage = () => {
  return (
    <ShopLayout title="Order resume" pageDescription="Order resume">
      <>
        <Typography variant="h1" component="h1">Order resume</Typography>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="summary-card">
              <CardContent>
                <Typography variant="h2">Resume (3 products)</Typography>
                <Divider sx={{ my: 1 }} />

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
                  <Button color="secondary" className="circular-btn" fullWidth>Confirm Order</Button>
                </Box>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default SummaryPage;