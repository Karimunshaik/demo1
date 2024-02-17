import ReactDOM from 'react-dom';


function App() {
  return (
    <div>
      <div className="topbar">
        <div className="topbar-left">
          <i className="logo fas fa-igloo"></i>
          <h1>Igloo</h1>
        </div>
        <div className="topbar-center">
          <div className="topbar-search">
            <i className="search-icon fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="topbar-right">
          <div className="line-container">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-top">
          <div className="menu-search">
            <i className="search-icon fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="menu-center">
          <div className="menu-item">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-paper-plane"></i>
            <span>Pages</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-user-friends"></i>
            <span>Groups</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-users"></i>
            <span>People</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-bullhorn"></i>
            <span>Updates</span>
          </div>
        </div>
        <div className="menu-bottom">
          <div className="menu-bottom-user">
            <img src="https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <span>John Doe</span>
          </div>
          <i className="far fa-question-circle"></i>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
