import User from "../component/user";

function userList({users}) {
    return (
        <div style={{'textAlign':'center'}}>
        <h2>User List </h2>
        {
            users.map( user =>{
                return(
                    <div key={user.id}>
                        <User user={user} />
                    </div>
                )
            })
        }
        </div>
    )
}

export default userList;
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)
    return {
        props: {
            users: data,
        }
    }
    // returns props at build time (return object)
}