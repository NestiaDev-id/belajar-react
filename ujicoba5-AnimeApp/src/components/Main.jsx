import { useState } from "react";

export default function Main() {
    const [animes, setAnimes] = useState(animesData);
    const [selectedAnime, setSelectedAnime] = useState(animes[0]);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <main className="main">
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
            {isOpen1 ? '–' : '+'}
          </button>
          {isOpen1 && (
            <ul className="list list-anime">
              {animes?.map((anime) => (
                <li key={anime.mal_id} onClick={() => handleSelectedAnime(anime.mal_id)}>
                  <img src={anime.image} alt={`${anime.title} cover`} />
                  <h3>{anime.title}</h3>
                  <div>
                    <p>
                      <span>{anime.year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="box">
          <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
            {isOpen2 ? '–' : '+'}
          </button>
          {isOpen2 && (
            <div className="details">
              <header>
                <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
                <div className="details-overview">
                  <h2>{selectedAnime.title}</h2>
                  <p>
                    {selectedAnime.year} &bull; {selectedAnime.score}
                  </p>
                </div>
              </header>
              <section>
                <p>
                  <em>{selectedAnime.synopsis}</em>
                </p>
              </section>
            </div>
          )}
        </div>
      </main>
    )
}