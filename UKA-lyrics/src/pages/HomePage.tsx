function HomePage () {
  return (
    <>
      <div id="sidebar">
        <div>
          <h1>Homepage</h1>
        </div>
        <nav>
              <a href={`/artists`}>Artists</a>
              <a href={`/favourites`}>Favourites</a>
          </nav>
      </div>
    </>
  );
}

export default HomePage;