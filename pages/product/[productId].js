import {useRouter} from 'next/router';

function ProductDetails() {
    
    const router = useRouter();
    const {productId} = router.query;
    console.log(productId);

    return(
        <div style={{'textAlign':'center'}}>
            <h1>Details of Product {productId}</h1>
        </div>
    )
}
export default ProductDetails;