import { CropFree } from '@material-ui/icons';
import React from 'react';
import Grid from '@material-ui/Core';
const products = [
    {id: 1, name:'BITCOIN', description: 'Runiing Shoes'}
    {id: 2 , name:'ETHERUM', description: 'HIGH STAKES'}
]

const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
{products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
<Product /> 
    </Grid>
))}
            </Grid>
        </div>
    )
}

export default Products
