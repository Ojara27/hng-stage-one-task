import React from 'react'
import Button from '../components/button/Button'
import profileImg from '../images/profile.jpg'
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
                <h1>Ojara</h1>
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
    </div>    
    </>
  )
}

export default Home