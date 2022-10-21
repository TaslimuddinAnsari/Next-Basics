import {useRouter} from 'next/router';
 
function Review() {
    const router = useRouter();
    const { productId, reviewId} = router.query;

    return(
        <div style={{'textAlign': 'center'}}>
            <h2>Review {reviewId} for product {productId}</h2>
        </div>
    )
}
export default Review;