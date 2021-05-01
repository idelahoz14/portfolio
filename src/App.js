import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hola mundo</h2>
        <nav className="App-navbar">
          <ul className="App-nav">
          <li className="App-navitem">
              <a className="App-navlink" href="#">Home</a>
            </li>
            <li className="App-navitem">
              <a className="App-navlink" href="#About-us">About us</a>
            </li>
            <li className="App-navitem">
              <a className="App-navlink" href="#">Our community</a>
            </li>
            <li className="App-navitem">
              <a className="App-navlink" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <section id="About-us" className="section-about-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About us</h2>
            <p className="section-tagline">EVERYTHING ABOUT US</p>
          </div>
          <div className="section-body">
            <div className="col-1">
              <p>Who are we</p>
              <p>Our culture</p>
              <p>How we work</p>
            </div>
          </div>
          <div className="section-footer">
            <a href="#" class="button">Learn more about us</a>
          </div>
        </div>
      </section>

      <footer className="App-footer">
        <p>Esta app es una prueba</p>
      </footer>
    </div>
  );
}

export default App;
