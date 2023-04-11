import bm from "./bm.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="div-wrapper">
            <img src={bm} className="App-logo" alt="logo" />

            <div className="div-link">
              <ul class="nav--link">
                <li class="nav--mvs">
                  <a class="nav__link" href="#movies">
                    Movies
                  </a>
                </li>

                <li class="nav--link">
                  <a class="nav--tv" href="#tv">
                    Tv shows
                  </a>
                </li>

                <li class="nav--link">
                  <a class="nav--people" href="#people">
                    People
                  </a>
                </li>

                <li class="nav--link">
                  <a class="nav--more" href="#more">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="div-primary">
            <ul class="nav--link">
              <li class="nav--plus">
                <a class="nav__link" href="#plus">
                  <i class="uil uil-plus-square"></i>
                </a>
              </li>

              <li class="nav--link">
                <a class="nav--in" href="#in">
                  Sign-in
                </a>
              </li>

              <li class="nav--link">
                <a class="nav--up" href="#up">
                  Sign-up
                </a>
              </li>

              <li class="nav--link">
                <a class="nav--src" href="#source">
                  <i class="uil uil-search"></i>
                </a>
              </li>

              <li class="nav--link">
                <a class="nav--humberger" href="#humberger">
                  <i class="uil uil-align-left"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
