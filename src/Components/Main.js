import React, {useState} from 'react';
import hero from '../assets/hero.svg';
import { Link, useHistory } from 'react-router-dom';

const Main = () => {
  const [joined, setJoined] = useState("");
  const history = useHistory();

  const join = (e) => {
    e.preventDefault();

    if (joined !== "") {
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
      history.push(`/thanks/${joined}`, date);
    }
  }

  return(
    <React.Fragment>
      <header>
        <img src={hero} alt="bg-page"/>
        <div>
          <h1>We build &amp; design <br/> web applications.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem voluptatum necessitatibus asperiores temporibus aut, ut atque facilis dolorem corporis.</p>
          <Link to="/contact">Get in touch</Link>
        </div>
      </header>
      <main>
        <section className="services">
          <h2>Why we should work together?</h2>
          <div className="service-container">
            <div className="service-card service-one"></div>
            <div className="service-description">
              <h3>SEO Friendly Apps.</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis voluptatem accusamus voluptates ducimus debitis voluptas tempore esse rem, ullam blanditiis quisquam, aspernatur doloribus dicta sit pariatur. Officia, eius officiis numquam explicabo neque cumque ipsa enim libero totam nihil quos rerum alias! Est molestias minima culpa minus repellendus consequatur ut temporibus optio incidunt? Reiciendis iusto a nobis distinctio vero accusamus!
              </div>
            </div>
          </div>
          
          <div className="service-container">
            <div className="service-card service-two"></div>
            <div className="service-description">
              <h3>Clear &amp; Optimized Code.</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis voluptatem accusamus voluptates ducimus debitis voluptas tempore esse rem, ullam blanditiis quisquam, aspernatur doloribus dicta sit pariatur. Officia, eius officiis numquam explicabo neque cumque ipsa enim libero totam nihil quos rerum alias! Est molestias minima culpa minus repellendus consequatur ut temporibus optio incidunt? Reiciendis iusto a nobis distinctio vero accusamus!
              </div>
            </div>
          </div>

          <div className="service-container">
            <div className="service-card service-three"></div>
            <div className="service-description">
              <h3>Support 24/7.</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis voluptatem accusamus voluptates ducimus debitis voluptas tempore esse rem, ullam blanditiis quisquam, aspernatur doloribus dicta sit pariatur. Officia, eius officiis numquam explicabo neque cumque ipsa enim libero totam nihil quos rerum alias! Est molestias minima culpa minus repellendus consequatur ut temporibus optio incidunt? Reiciendis iusto a nobis distinctio vero accusamus!
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2>Join our newsletters to get the latest trends.</h2>
          <form className="newsletter" onSubmit={join}>
            <input type="email" placeholder="Type your email here" onChange={(e) => setJoined(e.target.value)} />
            <input type="submit" value="Join Now!" />
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Main;