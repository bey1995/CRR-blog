import React from 'react'
import Header from '../Header/index';
import Banner from '../Banner/index';
import ArticleNavigator from '../ArticlesNavigator/index';
import SiderBar from '../SiderBar/index';

class Home extends React.Component{

  render () {
    return(
     <div id='wrapper'>
       <div id='main'>
         <div className='inner'>
           <Header/>
           <Banner/>
           <ArticleNavigator/>
         </div>
       </div>
       <div id='siderbar'>
         <SiderBar/>
       </div>
     </div>
    );
  }
}

export default Home;