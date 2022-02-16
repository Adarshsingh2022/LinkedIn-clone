
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./Feed.css";
import Post from "../Posts/Post";
import  db  from '../firebase';
import firebase from 'firebase/compat/app';
import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {selectUser} from '../features/userSlice';

     




function Feed() {

  const user = useSelector(selectUser);
  const [posts, setPost] = useState([ ]);
  //Using react Hook {useState}
  const [input, setInput] = useState();
   const submitPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
          name: user.displayName,
          description: "This is description",
          message: input,
          photoURL: user.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
   } 


   //Using react Hook {useEffect}

  useEffect(()=>{
      db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setPost(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      })

  },[])




  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={user.photoURL} />
          <form onSubmit={submitPost}>
            <input type="text" placeholder="Start a post" value={input} onChange={e=>setInput(e.target.value)} />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__options">
          <div className="option">
            <PhotoIcon style={{color: '#70b5f9'}}/>
            <span>Photo</span> 
          </div>

          <div className="option">
            <YouTubeIcon style={{color: '#7fc15e'}}/>
            <span>Video</span>
          </div>

          <div className="option">
            <TodayIcon style={{color: '#e7a33e'}}/>  
            <span>Event</span>
          </div>

          <div className="option">
            <AssignmentIcon style={{color: '#fc9295'}}/>
            <span>Write Article</span>
          </div>
        </div>
      </div>

{
  posts.map(({id, data : {name, description, message, photoURL}})=>{
    return  <Post key={id} name= {name}  description={description}  message={message}  photoURL={photoURL}/>
  })
}

     
      
    </div>
  );
}

export default Feed;
