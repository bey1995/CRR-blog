import React from 'react'

class ArticleNavigator extends React.Component{
  render () {
    return(
      <section>
        <header className="major">
          <h2>文章集合</h2>
        </header>
        <div className="posts">
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic01.jpg" alt=""/></a>
            <h3>ES6</h3>
            <p>details.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic02.jpg" alt=""/></a>
            <h3>HTML</h3>
            <p>details.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic03.jpg" alt=""/></a>
            <h3>CSS</h3>
            <p>details.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic04.jpg" alt=""/></a>
            <h3>React</h3>
            <p>details.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic05.jpg" alt=""/></a>
            <h3>UI组件库</h3>
            <p>details.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
          <article>
            <a href="#" className="image"><img src="../../assets/images/pic06.jpg" alt=""/></a>
            <h3>插件</h3>
            <p>使用感良好的小插件</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default ArticleNavigator;