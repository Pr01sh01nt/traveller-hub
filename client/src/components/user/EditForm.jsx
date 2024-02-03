import React , {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import { Cloudinary} from "@cloudinary/url-gen";
import {
    AdvancedImage,
    lazyload,
    responsive,
    accessibility,
    placeholder
  } from "@cloudinary/react";
  
  
  
  const cldImage = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});


axios.defaults.withCredentials = true;


export const EditForm = ({data:{placeOfJourney="", description="", type="public", _id=""}}) => {
    const [journeyData, setJourneyData] = useState({  placeOfJourney:placeOfJourney, description:description , type:type, _id:_id});
    
    const handleChange = (event)=>{
        if (event.target.name === "placeOfJourney")
        setJourneyData({ ...journeyData, placeOfJourney: event.target.value });
      else if (event.target.name === "description")
        setJourneyData({ ...journeyData, description: event.target.value });
      else if(event.target.name === "typeOfPost")
      {
        setJourneyData({...journeyData, type:event.target.value});
      }
      console.log(journeyData);

    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/user/editpost", journeyData);
            console.log(response, "edited");

        }catch(err)
        {
            console.log(err);
        }
        
    }

    return (
    <>
        
         <form onSubmit={handleSubmit}  >
          <div >
            <label htmlFor='placeOfJourney'>Place of Journey: </label><input id="placeOfJourney" name="placeOfJourney" type="text" onChange={handleChange}  value={journeyData?.placeOfJourney}  required />
          </div>


          <div >
            <label htmlFor='description'>Description : </label><textarea id="description" name="description" value={journeyData?.description} onChange={handleChange} required />
          </div>

         
          <div>
            Select type of Post : 
            <div>
            <input type = "radio" id = "private" name = "typeOfPost" value = "private" checked = {journeyData?.type==="private"} onChange={handleChange} required/><label htmlFor= "private">Private</label>
            <input type = "radio" id = "public" name = "typeOfPost" value = "public" checked = {journeyData?.type==="public"} onChange={handleChange}/><label htmlFor="public" >Public</label>
            </div>
          </div>

          <div>
            <button type="submit">Make Edit</button>
          </div>

        </form>
    </>
  )
}


export const EditImage = ({ id})=>{
    const selectedImageId = useRef([]);
    const [images, setImages] = useState({ids:[], addImages:[]});
    const imageTag = useRef(null);

    console.log("edit image rendered");

    useEffect(()=>{
        const getImages = async()=>{
          try{
            const {data} = await axios.get("http://localhost:3001/user/getimages", {params : {_id:id}});
            console.log("fetched iamges");
            console.log(data);
            setImages({...images, ids : data});
          }catch(err){
            console.log(err);
          }

        }
        getImages();
    }, [])

    const handleClick = (event)=>{
        console.log(event.target, "event occured");
        const imageId = event.target.getAttribute("imageId");

        if(selectedImageId.current.find((id)=>id===imageId) === undefined)
        selectedImageId.current.push(imageId);
        else selectedImageId.current = selectedImageId.current.filter((id)=>id!==imageId);

        console.log(selectedImageId.current);   

      }

    const handleDelete = async()=>{
        
        try{
            const response = await axios.post("http://localhost:3001/user/deleteimages", {imageId : selectedImageId.current, _id : id});
            console.log(response, "image deleted");
            const imagesAfterDeletion = images.ids.filter((picture)=>selectedImageId.current.find((image)=>image === picture) !== undefined ? false : true);
            setImages({...images, ids: imagesAfterDeletion});

        }catch(err){
            console.log(err);
        }

    }
    const handleAdd = async()=>{
      console.log("handle add runs")
      try{
        const formData = new FormData();
        formData.append("_id", id);
        images.addImages.map((images)=>{formData.append("file", images)});
        const {data} = await axios.post("http://localhost:3001/user/addimages", formData);
        console.log(data, "image added");
        
        imageTag.current.value = "";
        setImages({ addImages:[], ids : [...images.ids, ...data]});

    }catch(err){
        console.log(err);
    }
  

    }

    const handleChange = (event)=>{
      console.log(imageTag.current.value);
      setImages({...images, addImages : Object.values(event.target.files)});
    }

    return (
        <>
           {images.ids?.map((image)=><AdvancedImage alt="data" cldImg={cldImage.image(image)} height={200} width={200} plugins={[lazyload()]} onClick={handleClick} imageId = {image} />)}
            <button onClick = {handleDelete}> DELETE SELECTED IMAGES</button>

            {images.addImages?.map((image)=><img src={URL.createObjectURL(image)} height={100} width={100}/>)}

            <input type="file" name="images" accept=".jpg, .jpeg, .png" multiple  onChange={handleChange} ref={imageTag}/>
            <button onClick = {handleAdd}>ADD MORE IMAGES</button>
        
        </>
    )

}