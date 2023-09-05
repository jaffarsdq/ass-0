import {  useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

  return (
    <button onClick={handleClick}>Profile</button>
  )
}

export default Profile