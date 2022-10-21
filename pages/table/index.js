
import axios from 'axios';
function myTable({ userList }) {

  return (
    <>
      <div style={{'textAlign':'center'}}>
        <h2>User list</h2>
        <table border='1' style={{'textAlign':'center'}}>
          <thead >
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>

            {
              userList.data.map((ele, i) => <tr key={i}>
                <td>{ele.first_name}</td>
                <td>{ele.last_name}</td>
                <td>{ele.email}</td>
                <td><img src={ele.avatar} alt="avatar" width='50' height='50' /></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default myTable;

export async function getStaticProps() {
  const { data } = await axios.get('https://reqres.in/api/users');

  return {
    props: {
      userList: data
    }
  }
}
