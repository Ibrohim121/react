
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function SlugPage({ data }) {
  const { slug } = useParams();
  const navigate = useNavigate(); 
  const item = data.find((d) => d.slug === slug);

  if (!item) return <h2>Ma'lumot topilmadi</h2>;

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} width="300" />
      <p>Slug: {item.slug}</p>

      
      <button onClick={() => navigate("/")}>
        Ortga qaytish
      </button>
    </div>
  );
}

export default SlugPage;

