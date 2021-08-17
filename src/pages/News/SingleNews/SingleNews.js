//global dependencies
import React from 'react';
//components
import HeaderContainer from "../../../components/Header/HeaderContainer";
import Footer from "../../../components/Footer/Footer";
//styles
import './styles.scss';
import news1 from '../../../assets/images/news/single-news1.jpg';
import news2 from '../../../assets/images/news/single-news2.jpg';
import news3 from '../../../assets/images/news/single-news3.jpg';

const SingleNews = () => {

  return (
    <>
      <HeaderContainer black/>
      <section className="alone-section">
        <div className="wrapper">
          <div className="news-single">
            <div className="news-single__title">
              <h2>
                Norway – home of slow TV, mountain
                hiking an techy wearables?
              </h2>
              <ul>
                <li>
                  <p>Date</p>
                  <p>mars 9, 2021</p>
                </li>
                <li>
                  <p>Category</p>
                  <p>Development</p>
                </li>
                <li>
                  <p>Author</p>
                  <p>Hege Thoresen</p>
                </li>
              </ul>
            </div>
            <div className="main-photo">
              <img src={news1} alt="новость"/>
            </div>
            <div className="news-single__content news-container">
              <p className="news-single__content-title">
                The creative Norwegian agency Involve, in Oslo, has renewed its deal with Havas. An important step for both parties, with a goal of a bigger impact in the Scandinavian market – and not least – the Norwegian market. A market and a people, which is maybe a bit different than you would think.
              </p>
              <div className="news-single__content-item">
                <p>
                  With this reinvigoration of the deal comes great promise of future collaborations, which will make a meaningful difference to brands seeking a position in the Norwegian market. A market full of surprises and an audience connected like no other.
                </p>
                <p>
                  The Scandinavian market and target audience is often seen as one. But for those of you who have researched it more or for those of you who have launched their brands here, it is well known that this isn’t quite the whole truth. Norwegians, Swedes and Danes share a lot of similarities, and a close friendship, both politically and culturally. A strong connection and shared heritage. We even speak the same language. But there are some major differences in consumer behavior, culture and mindset.
                </p>
                <p>
                  We won’t even start calling ourselves experts in the Swedish and Danish market, so we’ll let our loving neighbors tell their own stories, if they want to. But if you have the time, dear reader, sit down and let us tell you a bit about our market and consumers. Not a truly deep dive in, but maybe some things that might actually pique your interest. Let’s do this.
                </p>
              </div>
              <img className="news-single__content-img" src={news2} alt="news"/>
              <div className="news-single__content-item">
                <p>The Norwegians. The original Vikings ruling the oceans (sorry, Denmark). Those frostbitten, reserved people way up north. Those wool-wearing people who eat those absurdly strange dishes, like lutefisk and Smalahove. More accurate description; jelly-like cod pickled in lye and sheep heads on your plate, with teeth, eyes and all. Yes, we know… so maybe we’re sometimes a bit over the top creative and old fashioned when it comes to our traditional foods, but the Norwegian market is way up there when it comes to modern trends. We love to spend our money on quality products. And we love being first in line when it comes to technology. And, we’ve got money to burn.</p>
                <p>
                  Norwegians are, as you might have heard, a very active people. We love exploring and staying fit. Norway is surrounded by magical natural scenery, even in the biggest cities. Most of us just can’t get enough of the outdoors, summer and winter alike. We buy expensive, quality sports products and outdoor gear, to both keep us warm and look good, and Norwegians actually represent 20 % of global cross-country ski sales.
                  And that is with a total Norwegian population of just about 5,5 million… In a country roughly the same size as Germany with its 82 million people. So… we have enough free space to hike in and explore, to say the least.
                </p>
              </div>
              <img className="news-single__content-img" src={news3} alt="news"/>
              <div className="news-single__content-item">
                <p>
                  We love nature. It’s in our culture and in our blood. And most of us are born with skis on our feet, rumor says. Fact is that 80 % have been hiking in forests or mountains the last year. No wonder Norway has won more gold medals in the Winter Olympics than any other nation. Quite annoying for the Swedes!
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>
      <Footer/>
    </>

  );
};

export default SingleNews;