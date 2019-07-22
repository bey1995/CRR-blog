import React from 'react'

class Header extends React.Component{
  render () {
    return(
      <header id="header">
        <span className="page-index-sign"><strong>每天学习前端一点点，除了休息日，嘻嘻~</strong> by CRR</span>
        <ul className="icons">
          <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
        </ul>
      </header>
    );
  }
}

export default Header;