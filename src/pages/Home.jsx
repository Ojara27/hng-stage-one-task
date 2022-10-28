import React from 'react'
import Button from '../components/button/Button'
import profileImg from '../images/profile.jpg'
import slackIcon from '../images/slack.png'
import githubIcon from '../images/github.png'
import Zuri  from '../images/zuri.png'
import I4G from '../images/I4G.png'
 function Home() {
  return (
    <>
    <div className='container'>
        <div className="profile-section">
            <div className="profile__imgCon">
                <img 
                    src={profileImg} 
                    alt="" 
                    id='profile__img'
                />
            </div>

            <div className="profile__name">
                <h1 id='twitter'>Ojara</h1>
                <h3 id='slack' style={{display:'none'}}>Ojara</h3>
            </div>
        </div>
        <Button
            link='https://twitter.com/FavourOkereke14'
            title='Twitter'
            id='twitter'
        />

        <Button
            link='https://training.zuri.team/'
            title='Zuri Team'
            id='btn__zuri'
        />

        <Button
            link='https://books.zuri.team/'
            title='Zuri Books'
            id='books'
        />

        <Button
            link='https://books.zuri.team/python-for-beginners?ref_id=Ojara'
            title='Python Books'
            id='book__python'
        />

        <Button
            link='https://background.zuri.team'
            title='Background Check'
            id='pitch'
        />

        <Button
            link='https://books.zuri.team/design-rules'
            title='Design Books'
            id='book__design'
        />

        <div className="social__links">
            <div className="slack_link">
                <a href="">
                    <img 
                        src={slackIcon}
                        alt=""
                    />
                </a>
            </div>

            <div className="gitHub__link">
               <a href="https://github.com/Ojara27/hng-stage-one-task">
                    <img 
                        src={githubIcon}
                        alt=""
                    />
               </a>
            </div>
        </div>

        <div className="sponsor-links">
            <img 
                src={Zuri}
                alt="" 
            />

            <p>HNG Internship 9 Frontend Task</p>

            <img 
                src={I4G}
                alt="" 
            />
        </div>
    </div>    
    </>
  )
}

export default Home