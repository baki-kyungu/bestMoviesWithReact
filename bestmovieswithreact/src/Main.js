import "./App.css";
import shezam from "./shezam.jpeg";

function Main() {
  const data = [
    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 15, 2023",
      imgSrc: { shezam },
    },

    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },

    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },
    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },
    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },
    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },
    {
      id: 1,
      title: "Shazam! Fury of the Gods",
      date: "March 13, 2023",
      imgSrc: { shezam },
    },
    // Ajoutez ici les 7 autres objets qui représentent les informations que vous voulez afficher
  ];

  return (
    <div className="Main">
      <section className="Section-inner-content">
        <div className="Text-container">
          <h1>Welcome.</h1>
          <h2 className="Title-scd">
            All movies, TV shows and people to discover. Explore now.
          </h2>

          <div className="btns">
            <input
              className="search"
              placeholder="Search for a movie, tv show, person......"
            ></input>
            <button className="btn">Search</button>
          </div>
        </div>
      </section>

      <section className="Section-trding-content">
        <div className="Div-column">
          <div className="Div-column-header">
            <h3 className="Trending">Trending</h3>
            <div className="Div-selector">
              <div className="Div-anchor">
                <h4 className="Today">today</h4>
              </div>
              <h3 className="week">This week</h3>
            </div>
          </div>

          <div className="Div-trending-scroller">
            <div className="Div-column-content">
              {/* La méthode map() est utilisée ici pour afficher 8 Divs ayant la classe 'Div-card' avec les mêmes informations */}
              {data.map((item) => (
                <div key={item.id} className="Div-card">
                  <div className="options">
                    <button className="gliphicons">
                      <i class="uil uil-ellipsis-h"></i>
                    </button>
                  </div>
                  <div className="Div-image">
                    <img src={shezam} className="Card-img" alt="" />
                  </div>
                  <div className="Div-content">
                    <div className="Outer-ring">
                      <div className="User-score-chart">
                        <div className="Percent">
                          <span className="Icon"></span>
                        </div>
                      </div>
                    </div>
                    <h5 className="Title-fifth">{item.title}</h5>
                    <p className="date">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <img className="Pseudo" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
