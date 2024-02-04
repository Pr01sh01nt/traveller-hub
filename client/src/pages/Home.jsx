import React, {useState} from 'react'

const Home = () => {
  const [text, setText] = useState("a");

  setTimeout(()=>{

    
  },1000)

  return (
    <>
      <h1>
        {text}
        Welcome to VoyageLink!
      </h1>
      <div>
        Your ultimate platform for sharing and discovering unique travel experiences. Connect with fellow explorers, document your journeys, and get inspired for your next adventure.
      </div>
      <button>Join Us</button>
      <button>Learn More</button>

      <h2>Features Galore</h2>
      <div>Dive into VoyageLink's myriad of features designed to enrich your travel experiences, from story sharing to real-time interactions.</div>

      <h5>Easy Login</h5>
      <div>One-click access to enter the world where explorations and connections come alive almost instantly.</div>

      <h5>Live Chat</h5>
      <div>Engage instantly with the travel community for tips, friendships, and amazing collaborative experiences.</div>

      <h5>Post Trips</h5>
      <div>Easily share your latest travel adventures with stories, photos, and more, inspiring others to explore.</div>

    </>
  )
}

export default Home
