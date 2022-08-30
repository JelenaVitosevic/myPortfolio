import React from 'react'
import Layout from '../../components/layouts/Layout'
import styles from './Resume.module.css'
import { FaArrowDown, FaDownload, FaUpload } from 'react-icons/fa'
import jelena from '../../components/images/avatars/Jelena3.png'


function ResumePage() {

  const onButtonClick = () => {
    fetch('JelenaVitosevic_CV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'JelenaVitosevic_CV.pdf';
        alink.click();
      })
    })
  }

  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headContainer}>
          <div className={styles.textWrapper}>
            <h1 className={styles.dev}> 
              <span className={styles.white}>{'<!'}</span> <span className={styles.pink}>DOCTYPE</span> <span className={styles.yellow}>cv</span> <span className={styles.white}>{'>'}</span>
            </h1>
            <br></br>
            <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>cv</span>  <span className={styles.yellow}>position</span> <span className={styles.white}>=</span> <span className={styles.red}>"FRONTEND DEVELOPER"</span>
              <span className={styles.white}>{'>'}</span>
            </p>
            <br></br>
            <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>head</span>
              <span className={styles.white}>{'>'}</span>
            </p>
            <br></br>
            <div className={styles.uvuci}>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>name</span>
                <span className={styles.white}>{'>'}</span>
                <span>JELENA VITOSEVIC</span>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>name</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <br></br>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>about me</span>
                <span className={styles.white}>{'>'}</span>
                <br></br>
                <div className={styles.uvuci}>
                  <span>Self-taught frontend developer based in Belgrade.</span>
                </div>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>about me</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <br></br>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>mobile</span>
                <span className={styles.white}>{'>'}</span>
                <span>063 104 6982</span>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>mobile</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>email</span>
                <span className={styles.white}>{'>'}</span>
                <span>vitosevicjelena83997@gmail.com</span>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>email</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>GitHub</span>
                <span className={styles.white}>{'>'}</span>
                <span>https://github.com/JelenaVitosevic</span>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>GitHub</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <br></br>
              <p className={styles.info}>
                <span className={styles.white}>{'<'}</span>
                <span className={styles.pink}>interests</span>
                <span className={styles.white}>{'>'}</span>
              </p>
              <div className={styles.uvuci}>
                <p className={styles.info}>
                  <span>In my free time, you can find me in nature, in the gym or in the kitchen. A chef for family and friends who dreams of one day being the author of an app with delicious and healthy recipes. {':)'}</span>
                </p>
              </div>
              <p className={styles.info}>
                <span className={styles.white}>{'</'}</span>
                <span className={styles.pink}>interests</span>
                <span className={styles.white}>{'>'}</span>
              </p>
            </div>
            <br></br>
            <p className={styles.info}>
              <span className={styles.white}>{'</'}</span>
              <span className={styles.pink}>head</span>
              <span className={styles.white}>{'>'}</span>
            </p> 
          </div>  
          <div className={styles.pinkContentWrapper}>
            <div className={styles.imgWrapper}>
              <img src={jelena} alt="" className={styles.avatar}/>
            </div>
            <div className={styles.iconWrapper}>
              
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button} onClick={onButtonClick}>download<FaDownload className={styles.icon}/></button>
            </div>
          </div>
      </div>  

      <div className={styles.bodyContainer}>
        <p className={styles.info}>
            <span className={styles.white}>{'<'}</span>
            <span className={styles.pink}>body</span>
            <span className={styles.white}>{'>'}</span>
        </p>
        <br></br>
        <div className={styles.uvuci}>
          <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>experiences</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <div className={styles.uvuci}>
            <p className={styles.tag}>
                <span className={styles.white}>Developed from scratch full stack Pomodoro timer app using React and Express.js</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>Developed Feedback app using React</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>Developed Github Finder app to find Github users using React and Github REST API</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>'Developed Password checker app (for checking the number of uppercase letters, lowercase letters, numbers, and special characters) in vanilla JavaScript, vanilla React without JSX, vanilla React with JSX, React with Create React App and Express.js'</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>Developed static landing page for clients in the Bus transportation industry.</span>
            </p>
          </div>
          <p className={styles.info}>
              <span className={styles.white}>{'</'}</span>
              <span className={styles.pink}>experiences</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <br></br>
          <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>education</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <div className={styles.uvuci}>
            <p className={styles.tag}>
                <span className={styles.yellow}>Zemun Gymnasium </span>
                <br></br>
                <span>2012-2015  Natural Sciences and Mathematics Department</span>
            </p>
            <br></br>
            <p className={styles.tag}>
                <span className={styles.yellow}>FACULTY OF SPORT AND PHYSICAL EDUCATION | UNIVERSITY OF BELGRADE </span>
                <br></br>
                <span>2016-2021  Physical education and sport, conditioning preparation</span>
            </p>
            <br></br>
            <p className={styles.tag}>
                <span className={styles.white}>Learning frontend development from November 2021.</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.yellow}>MQSoft bootcamp april-september 2022.</span>
            </p>
          </div>
          <p className={styles.info}>
              <span className={styles.white}>{'</'}</span>
              <span className={styles.pink}>education</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <br></br>
        
          <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>skills</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <div className={styles.uvuci}>
            <p className={styles.tag}>
                <span className={styles.white}>Html</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>CSS</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>JavaScript</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>ReactJS</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>'Express.js(beginner level)'</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>Git GitHub</span>
            </p>
          </div>
          <p className={styles.info}>
              <span className={styles.white}>{'</'}</span>
              <span className={styles.pink}>skills</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <br></br>


          <p className={styles.info}>
              <span className={styles.white}>{'<'}</span>
              <span className={styles.pink}>languages</span>
              <span className={styles.white}>{'>'}</span>
          </p>
          <div className={styles.uvuci}>
            <p className={styles.tag}>
                <span className={styles.white}>Serbia Native</span>
            </p>
            <p className={styles.tag}>
                <span className={styles.white}>'English (Listening C1, Reading C1, Spoken Interaction B1/B2)'</span>
            </p>
          </div>
          <p className={styles.info}>
              <span className={styles.white}>{'</'}</span>
              <span className={styles.pink}>languages</span>
              <span className={styles.white}>{'>'}</span>
          </p>
        </div>
        <br></br>
        <p className={styles.info}>
            <span className={styles.white}>{'</'}</span>
            <span className={styles.pink}>body</span>
            <span className={styles.white}>{'>'}</span>
        </p>
        <br></br>
        <p className={styles.info}>
            <span className={styles.white}>{'</'}</span>
            <span className={styles.pink}>html</span>
            <span className={styles.white}>{'>'}</span>
        </p>
      </div>
    </div>
  </div>
  </Layout>
  )
}

export default ResumePage