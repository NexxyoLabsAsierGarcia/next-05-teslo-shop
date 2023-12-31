import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { initialData } from "@/database/products";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find here the best Teslo products'}>
      <>
        <Typography variant="h1" component="h1">Shop</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>All the products</Typography>

        {/* TODO: remove any */}
        <ProductList products={ initialData.products as any } />

      </>
    </ShopLayout>
  )
}
