import React from 'react'
import "./Widget.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        <div className="widget">
            <div className="widget__input">
                <SearchIcon className="widget__searchIcon"/>
                <input placeholder="Search Twitter" type="text"></input>
            </div>

            <div className="widget_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1334138279822643200"}></TwitterTweetEmbed>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BCCI"
                options={{weight: 400}}
                ></TwitterTimelineEmbed>
                <TwitterShareButton
                 url={"https://facebook.com/cleverprogrammer"}
                 options={{text: "#React is awesome", via:"cleverpragrammer"}}
                ></TwitterShareButton>
            </div>
        </div>
    )
}

export default Widget
