import React from "react";
import '../styles/castlist.css'
const CastList = ({ cast }) => {
  return (
    <div className="cast-list">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div key={actor.id} className="cast-card">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : "https://via.placeholder.com/150"
              }
              alt={actor.name}
              className="cast-image"
            />
            <div className="cast-info">
              <p><strong>{actor.name}</strong></p>
              <p><em>Character: {actor.character}</em></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
