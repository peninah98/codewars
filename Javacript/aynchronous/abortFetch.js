const  fetchUsers = async ()=>{
  const response = await   fetch("https://jsonplaceholder.typicode.com/users",  { signal: AbortSignal.timeout(5000) })

}
fetchUsers()