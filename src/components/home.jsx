import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Salom, bu bosh sahifa</h1>
      <button onClick={() => navigate("/contact")}>Aloqa sahifasiga otish</button>
      <button onClick={() => navigate("/about")}>Biz haqimizda sahifasiga otish</button>
    </div>
  );
}


export default Home;
