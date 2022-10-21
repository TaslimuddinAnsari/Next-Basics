import {useRouter} from 'next/router';

function DetailsOfElement(){

    const router = useRouter();
    const {DetailsOfEle} = router.query // same as file Names

    return(
        <div style={{'textAlign':'center'}}>
            <h3>Details of Elements {DetailsOfEle}</h3>
        </div>
    )
}

export default DetailsOfElement;