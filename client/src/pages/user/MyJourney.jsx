import React, { useState } from 'react'
import axios from 'axios';
import journeycss from './User.module.css'


axios.defaults.withCredentials = true;

const MyJourney = () => {
  const [journeyData, setJourneyData] = useState({  placeOfJourney:"", description: "" , type:"public", images:[]});
  


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
      console.log("I Length", event.target.files);
      let img = [];

      img = Object.values(event.target.files);  // returns array
      console.log("I img", img);
      console.log(typeof (img));
      console.log(img);

      
      setJourneyData({...journeyData, images: img});
      
     
    }
    else if(event.target.name === "typeOfPost")
    {
      setJourneyData({...journeyData, type:event.target.value});
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      
      const formData = new FormData();
      for(const key in journeyData)
      {
        console.log(key, journeyData[key]);
        if(key !== "images")
        formData.append(key, journeyData[key]);
        else journeyData[key].map((image)=>{formData.append(key, image);});
        
      }
     
     
      console.log('saving...');
      const res = await axios.post("http://localhost:3001/user/myjourney", formData);
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }

  }


  return (
    <>
      <h1>
        Write your travel Expreinces
      </h1>
      <div className={journeycss.form}>
        <form onSubmit={handleSubmit}  >
          <div className={journeycss.formContent}>
            <label htmlFor='placeOfJourney'>Place of Journey: </label><input id="placeOfJourney" name="placeOfJourney" type="text" onChange={handleChange}  value={journeyData.placeOfJourney}  required />
          </div>

          <div className={journeycss.formContent}>
            <label htmlFor='journeyImage'>Add Journey images : </label>

              {journeyData.images.map((image) =><img key={image.size} src={URL.createObjectURL(image)} alt="choosed images" height={50} width={50} />)}
  
              <input id="journeyImage" type="file" name="images" accept=".jpg, .jpeg, .png" onChange={handleChange} multiple /> 
            </div>
             


          <div className={journeycss.formContent}>
            <label htmlFor='description'>Description : </label><textarea id="description" name="description" value={journeyData.description} onChange={handleChange} required />
          </div>

         
          <div className={journeycss.formContent}>
            Select type of Post : 
            <div>

            <input type = "radio" id = "private" name = "typeOfPost" value = "private" checked = {journeyData.type==="private"} onChange={handleChange} required/><label htmlFor= "private">Private</label>
            <input type = "radio" id = "public" name = "typeOfPost" value = "public" checked = {journeyData.type==="public"} onChange={handleChange}/><label htmlFor="public" >Public</label>
            </div>
          </div>

          <div className={journeycss.formContent}>
            <button type="submit">Save Journey</button>
          </div>

        </form>
      </div>

    </>
  )
}

export default MyJourney;
