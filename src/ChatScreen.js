// import React from 'react'
import { Avatar } from '@material-ui/core';
import { Message } from '@material-ui/icons';
import React, { useState } from 'react';
import "./ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:'Jenna Fischer',
            image: "https://www.wallpaperhi.com/thumbnails/detail/20120229/jenna%20fischer%203024x4326%20wallpaper_www.wallpaperhi.com_97.jpg",
            message: "What's up?"
        },
        {
            name:'Jenna Fischer',
            image: "https://www.wallpaperhi.com/thumbnails/detail/20120229/jenna%20fischer%203024x4326%20wallpaper_www.wallpaperhi.com_97.jpg",
            message: "Can we meet?"
        },
        {
            message: "Yeah, sure."
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setInput("");
    }


    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH JENNA FISCHER ON 29/08/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image} 
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

           
            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    type="text" 
                    placeholder="Send a mesage" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
