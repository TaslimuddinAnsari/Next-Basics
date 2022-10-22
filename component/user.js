function User({user}) {
    return(
        <div style={{'textAlign':'center'}}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
    )
}

export default User