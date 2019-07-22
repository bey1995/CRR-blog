import React from 'react';
import imgSrc from '../../assets/images/pic10.jpg';

class Banner extends React.Component {
  render() {
    return (
      <section id="banner">
        <div className="content">
          <header>
            <h1>欢迎来到我的个人主页<br/>
              我是 CRR</h1>
            <p>这是我个人的前端学习博客，与你分享我和前端的点滴，和生活的碎片，和大大的快乐！</p>
          </header>
          <p>个人描述
          </p>
          <ul className="actions">
            <li><a href="#" className="button big">更多</a></li>
          </ul>
        </div>
        <span className="image object">
          <img src={imgSrc} alt='index image'/>
        </span>
      </section>
    );
  }
}

export default Banner;