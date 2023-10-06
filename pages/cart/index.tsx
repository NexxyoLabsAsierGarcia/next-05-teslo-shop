import { ShopLayout } from "@/components/layouts"
import { Card, Grid, Typography } from "@mui/material"

const CartPage = () => {
  return (
    <ShopLayout title="Cart" pageDescription="Teslo shopping cart">
        <Typography variant="h1" component="h1">
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* Cart list */}
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="su"></Card>
                </Grid>
            </Grid>
        </Typography>
    </ShopLayout>
  )
}

export default CartPage