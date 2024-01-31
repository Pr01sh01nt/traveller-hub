import React, { useState } from 'react'
import axios from 'axios';
import journeycss from './User.module.css'


axios.defaults.withCredentials = true;

const MyJourney = () => {
  const [journeyData, setJourneyData] = useState({ description: "" });
  const [images, setImages] = useState([]);


  console.log("render of textarea");


  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.files);
    if (event.target.name === "placeOfJourney")
      setJourneyData({ ...journeyData, placeOfJourney: event.target.value });
    else if (event.target.name === "description")
      setJourneyData({ ...journeyData, description: event.target.value });
    else if (event.target.name === "images") {
      const length = event.target.files.length;
      let img = [];

      img = Object.values(event.target.files);
      console.log(img);
      console.log(typeof (img));
      console.log(img);
      setImages(img);

    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      // upoloading images
      let imageId = [];
      for (let i = 0; i < images.length; i++) {
        const formData = new FormData();
        formData.append("file", images[i]);
        formData.append("upload_preset", "kl5e3smj");
        console.log(images[i]);
        const res = await axios.post("https://api.cloudinary.com/v1_1/dpsjn9leb/image/upload", formData, { withCredentials: false });

        //if the cloudinary server sends the bad request then uploaded images should be deleted
        console.log(res.data);
        console.log(res.data.public_id);
        imageId.push(res.data.public_id);
        console.log("imageId length/imgrid", imageId);
      }
        console.log({...journeyData, imageId}, "i am journey");


      // saving to database
      const res = await axios.post("http://localhost:3001/user/myjourney", {...journeyData, imageId});
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      <h1>
        Write your current travel Expreinces
      </h1>
      <div className={journeycss.form}>
        <form onSubmit={handleSubmit}>
          <div className={journeycss.formContent}>
            <label htmlFor='placeOfJourney'>Place of Journey: </label><input id="placeOfJourney" name="placeOfJourney" type="text" onChange={handleChange} required /></div>

          <div className={journeycss.formContent}>
            <label htmlFor='journeyImage'>Journey images : </label>

            {images.length != 0 && 
              images.map((image) => {
                const path = URL.createObjectURL(image);
                console.log(path);
                return (
                <>
                <img key={image.size} src={path} alt="choosed images" height={50} width={50} />
             
                </>
                
                )})}
            
            
            <input id="journeyImage" type="file" name="images" accept=".jpg, .jpeg, .png" onChange={handleChange} multiple /> </div>

          <div className={journeycss.formContent}>
            <label htmlFor='description'>Description : </label><textarea id="description" name="description" value={journeyData.description} onChange={handleChange} required /></div>

          <div className={journeycss.formContent}>
            <button type="submit">Save Journey</button></div>
        </form>
      </div>

    </>
  )
}

export default MyJourney;
