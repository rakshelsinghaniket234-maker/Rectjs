
function Complete() {
  
  const user = JSON.parse(localStorage.getItem("userdata"))

  return (
    <>
      <h1>Welcome {user?.name}</h1>
      <h2>welcome</h2>
    </>
  )
}

export default Complete
