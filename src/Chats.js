import React from 'react';
import './Chats.css';
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Jenna Fischer"
                message="What's up?"
                timestamp="20 minutes ago"
                profilePic="https://www.wallpaperhi.com/thumbnails/detail/20120229/jenna%20fischer%203024x4326%20wallpaper_www.wallpaperhi.com_97.jpg"
            />

            <Chat 
                name="Alison Brie"
                message="Hey!"
                timestamp="42 minutes ago"
                profilePic="https://c4.wallpaperflare.com/wallpaper/803/474/515/alison-brie-4k-in-hd-quality-wallpaper-preview.jpg"
            />

            <Chat 
                name="Dakota Johnson"
                message="Can we meet?"
                timestamp="1 hour ago"
                profilePic="https://c4.wallpaperflare.com/wallpaper/322/831/646/dakota-johnson-celebrities-girls-hd-wallpaper-preview.jpg"
            />

            <Chat 
                name="Lindsay Morgan"
                message="I like your vibe"
                timestamp="2 hours ago"
                profilePic="https://c4.wallpaperflare.com/wallpaper/233/563/669/brunette-lindsey-morgan-latinas-wallpaper-preview.jpg"
            />
        </div> 
    );
}

export default Chats;
