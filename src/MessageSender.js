import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase/compat/app';


const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // for the function of enter button 
        
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        });



        setInput('');
        setImageUrl('');


    };
    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's On your mind, ${user.displayName}?`}

                    />


                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className='messageSender__input'
                        placeholder={"input URL (Optional)"}

                    />


                    <button className='messageSender__input ' onClick={handleSubmit} type='submit'>
                        hidden submit
                    </button>

                </form>
            </div>



            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <CollectionsIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;