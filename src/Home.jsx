import {  useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/profile')
    }

  return (
    <button onClick={handleClick}>home</button>
  )
}

export default Home