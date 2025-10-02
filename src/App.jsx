
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SlugPage from "./assets/slug";


const mockData = [
  {
    id: 1,
    title: "salom nmadr",
    slug: "salom nmadr",
    image: "/src/assets/R.jpg"
  },
  {
    id: 2,
    title: "salom nmadr",
    slug: "salom nmadr",
    image: "/src/assets/W.jpg"
  },
  {
    id: 3,
    title: "salom nmadr",
    slug: "salom nmadr",
    image: "/src/assets/R.jpg"
  },
  {
    id: 4,
    title: "salom nmadr",
    slug: "salom nmadr",
    image: "/src/assets/W.jpg"
  },
];

function App() {
  return (
    <Router>
      <div>
        <h1>Kurslar Royxati</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {mockData.map((item) => (
            <li key={item.id} style={{ marginBottom: "20px" }}>
              <Link to={`/courses/${item.slug}`}>
                <img src={item.image} alt={item.title} width="150" />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>

        <Routes>
          <Route path="/courses/:slug" element={<SlugPage data={mockData} />} />
        
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;

