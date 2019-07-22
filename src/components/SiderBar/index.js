import React from 'react'

class SideBar extends React.Component{
  componentDidMount() {

  }

  toggleSideBar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('sidebar').toggleClass('inactive');
  };

  render () {
    return(
      <div id="sidebar" className='inactive'>
        <a href='#sidebar' className='toggle' onClick={this.toggleSideBar}>Toggle</a>

        <div className="inner" >
          <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search"/>
            </form>
          </section>
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><a href="index.html">Homepage</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li>
                <span className="opener">Submenu</span>
                <ul>
                  <li><a href="#">Lorem Dolor</a></li>
                  <li><a href="#">Ipsum Adipiscing</a></li>
                  <li><a href="#">Tempus Magna</a></li>
                  <li><a href="#">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="#">Etiam Dolore</a></li>
              <li><a href="#">Adipiscing</a></li>
              <li>
                <span className="opener">Another Submenu</span>
                <ul>
                  <li><a href="#">Lorem Dolor</a></li>
                  <li><a href="#">Ipsum Adipiscing</a></li>
                  <li><a href="#">Tempus Magna</a></li>
                  <li><a href="#">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="#">Maximus Erat</a></li>
              <li><a href="#">Sapien Mauris</a></li>
              <li><a href="#">Amet Lacinia</a></li>
            </ul>
          </nav>

          <footer id="footer">
            <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a
              href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>
        </div>

      </div>
    );
  }
}

export default SideBar;