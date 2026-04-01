import * as React from "react"
import "../styles/mainStyles.css"
import whiteLogo from '../images/logo.png';
import icon from '../images/icon.png';
import banner from '../images/banner.png';
import fsCover from '../images/fs cover.jpg';
import fsPages from '../images/fs pages.jpg';
import fsLogo from '../images/fsLogoR.png';
import hloLogo from '../images/hloLogo.png';
import ifLogo from '../images/if-logo.png';

import hloCover from '../images/hlo cover.jpg';
import wwCover from '../images/ww cover.jpg';
import ifCover from '../images/if cover1.jpg';

import profile from '../images/profile.jpg';


import fs1 from '../images/FS01_003.jpg';
import fs2 from '../images/FS01_004.jpg';
import fs3 from '../images/FS04_002.jpg';
import fs4 from '../images/FS04_003.jpg';
import fs5 from '../images/FS04_025.jpg';
import fs6 from '../images/FS04_026.jpg';

import hlo1 from '../images/hlo/hlo1.jpg';
import hlo2 from '../images/hlo/hlo2.jpg';
import hlo3 from '../images/hlo/hlo3.jpg';
import hlo4 from '../images/hlo/hlo4.jpg';
import hlo5 from '../images/hlo/hlo5.jpg';
import hlo6 from '../images/hlo/hlo6.jpg';

import ww1 from '../images/ww/ww1.jpg';
import ww2 from '../images/ww/ww2.jpg';
import ww3 from '../images/ww/ww3.jpg';
import ww4 from '../images/ww/ww4.jpg';
import ww5 from '../images/ww/ww5.jpg';
import ww6 from '../images/ww/ww6.jpg';


import if1 from '../images/if/if1.jpg';
import if2 from '../images/if/if2.jpg';
import if3 from '../images/if/if3.jpg';
import if4 from '../images/if/if4.jpg';
import if5 from '../images/if/if5.jpg';
import if6 from '../images/if/if6.jpg';

import uh from '../images/illustrations/uh.jpg';
import dd from '../images/illustrations/darla.jpg';
import mr from '../images/illustrations/maxineRed.jpg'

const links = [
]

const IndexPage = () => {
  return (
    <main>
      <h1>Ezequiel Espinoza Diaz</h1>
      <div className="introduction">
        <div className="main-card">
            <img className="main-logo" src={whiteLogo} alt="Ezequiel Espinoza Diaz Logo"></img>
              <div className="header-desc-container">

                <img className="main-pic" src={profile}/>
          
                <p>Hello! My name is Ezequiel Espinoza Diaz, I am a comic artist and illustrator based in Washington D.C. I currently study Graphic Design at the University of the District of Columbia.
I love creating character driven stories that focus on flaws and the struggles that come with overcoming those inner problems. I enjoy experimenting artistically to create unique art and typography that matches the mood and feeling the story calls for. 
</p>
              </div>
        </div>
        
        
      </div>
      
      {/* <img className="banner" src={banner} alt="Main Banner Art"></img> */}
      <h2 className="section-header">Comics and Sequential Art</h2>
      
      <section className="comicSection">
        <div className="comicInnerContainer">
          <div className="comicMainContent">
            <img className="comic-cover" src={fsCover}></img>
            <div className="comic-text">
              <img src={fsLogo} alt="FireStarter Comic Logo Red"/>
                <p className="comicDesc">
              My comic FireStarter is an ongoing series that focuses on a young woman’s struggle to overcome the death of her mother through trials of violence and a desire for love. FireStarter is drawn in black and white with red accents at certain story points and blends elements of American comics and Japanese Manga.            </p>
            </div>
            
          </div>

            <div className="comic-gallery">
              <img src={fs1}></img>
              <img src={fs2}></img>
              <img src={fs3}></img>
              <img src={fs4}></img>
              <img src={fs5}></img>
              <img src={fs6}></img>
            </div>
            <a href="https://www.ezequielespinoza.com/firestarter/0/0" target="_blank">
            <button className="read-button fs-button">Read Full Series Here</button>
            </a>        </div>
      </section>

      <section className="comicSection hlo-section">
        <div className="comicInnerContainer">
          <div className="comicMainContent hlo-content">
            <img className="comic-cover" src={hloCover}></img>
            <div className="comic-text hlo-text">
                <img id="hlo-logo" src={hloLogo} alt="Hearts like Ours Logo"/>
                <p className="comicDesc">
A short comic centered around the complex friendship between a girl seeking friendship, and another who won’t admit she’s seeking the same thing. Hearts Like Ours is a mixed media project that involves collage, photography, and a mishmash of different digital art styles to create a scrapbook like feel.               </p>
            </div>
            
          </div>

            <div className="comic-gallery hlo-gallery">
              <img src={hlo1}></img>
              <img src={hlo2}></img>
              <img src={hlo3}></img>
              <img src={hlo4}></img>
              <img src={hlo5}></img>
              <img src={hlo6}></img>
            </div>

            <a href="https://www.ezequielespinoza.com/one-shots/13/0" target="_blank">
            <button className="read-button hlo-button">Read Full Series Here</button>
            </a>
        </div>
      </section>



      {/* <section className="comicSection">
        <div className="comicInnerContainer">
          <h3 className="comicQuote">A fiery woman's quest for revenge.</h3>
          <div className="comicMainContent">
            <img className="comic-cover" src={wwCover}></img>
            <div className="comic-text">
              <h2>Whispered Wishes</h2>
                <p className="comicDesc">
              My comic FireStarter is an ongoing series that focuses on a young woman’s struggle to overcome the death of her mother through trials of violence and a desire for love. FireStarter is drawn in black and white with red accents at certain story points and blends elements of American comics and Japanese Manga.            </p>
            </div>
            
          </div>

            <div className="comic-gallery">
              <img src={ww1}></img>
              <img src={ww2}></img>
              <img src={ww3}></img>
              <img src={ww4}></img>
              <img src={ww5}></img>
              <img src={ww6}></img>
            </div>

            <p>Insert Gallery Here</p>
            <button>Read More</button>
        </div>
      </section> */}

      <section className="comicSection if-section">
        <div className="comicInnerContainer">
          <div className="comicMainContent">
            <img className="comic-cover" src={ifCover}></img>
            <div className="comic-text if-text">
                <img className="if-logo" src={ifLogo} alt="Isolated Fears Logo"/>
                <p className="comicDesc">
A 6 page comic centered around friendship and an unspoken loneliness that has created an awkward rift between the women’s unspoken desires for closeness. Isolated Fears is an experiment in color and how it can help communicate stories and character emotions.
                </p>
              </div>
            
          </div>

            <div className="comic-gallery">
              <img src={if1}></img>
              <img src={if2}></img>
              <img src={if3}></img>
              <img src={if4}></img>
              <img src={if5}></img>
              <img src={if6}></img>
            </div>
            <a href="https://www.ezequielespinoza.com/one-shots/11/0" target="_blank">
            <button className="read-button if-button">Read Full Series Here</button>
            </a>
        </div>
      </section>

        <h2 className="section-header">Illustrations</h2>
        <section className="illustration-section">
          <div className="comic-gallery illus-gallery">
            <img src={uh}></img>
            <img src={dd}></img>
            <img src={mr}></img>
          </div>
        </section>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Ezequiel Espinoza Diaz</title>
