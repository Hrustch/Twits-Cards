import React, { useState } from 'react'
import css from './TwitCard.module.css'
import img from '../../assets/picture1.png'

const TwitCard = (data) => {
const [tweetNum, setTweetsNum] = useState(data.tweets)
const [followerNum, setFollowerNum] = useState(data.followers)
  return (
    <div className={css.Card}>
        <img src={img} className={css.TopImg}/>

        <div className={css.AvatarSec}>
            <div className={css.Line}></div>
            <div className={css.AvatarLine}>
                <img className={css.Avatar} src={data.avatar} alt="avatar"/>
            </div>
        </div>

        <div className={css.Numbers}>
            <p>{tweetNum} TWEETS</p>
            <p>{followerNum} FOLLOWERS</p>
        </div>
        
    </div>
  )
}

export default TwitCard