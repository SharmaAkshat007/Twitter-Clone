import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebasedb"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [url, setUrl] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Akshat Sharma",
            username: "akshat007",
            verified: true,
            text: tweetMessage,
            image: url ,
            avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F08%2Fcat-meme-2.jpg&f=1&nofb=1",
        });

        setTweetMessage("")
        setUrl("")
    };

    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F08%2Fcat-meme-2.jpg&f=1&nofb=1"/>
                    <input  onChange = {e => setTweetMessage(e.target.value)} value = {tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <input onChange={e => setUrl(e.target.value)} value = {url} placeholder="Enter image URL..." className="tweetBox__imageInput" type="text"></input>
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )

}

export default TweetBox
