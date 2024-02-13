import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";
import { Box, Button, TextField, Typography, ImageList, ImageListItem, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import editformcss from '../../pages/user/User.module.css'


const cldImage = new Cloudinary({ cloud: { cloudName: "dpsjn9leb" } });


axios.defaults.withCredentials = true;


export const EditForm = ({ data: { placeOfJourney = "", description = "", type = "public", _id = "" } }) => {
  const [journeyData, setJourneyData] = useState({ placeOfJourney: placeOfJourney, description: description, type: type, _id: _id });

  const handleChange = (event) => {
    if (event.target.name === "placeOfJourney")
      setJourneyData({ ...journeyData, placeOfJourney: event.target.value });
    else if (event.target.name === "description")
      setJourneyData({ ...journeyData, description: event.target.value });
    else if (event.target.name === "typeOfPost") {
      setJourneyData({ ...journeyData, type: event.target.value });
    }

  }
  console.log(journeyData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/editpost", journeyData);
      console.log(response, "edited");

    } catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      <Box component="div">
        <Typography sx={{ textAlign: "center", mb: 4, mt: 2 }} variant="h3">My Journey</Typography>
        <Box component="div">
          <Box component="form" onSubmit={handleSubmit} className={editformcss.form}>


            <Box component="div" className={editformcss.formContent}>
              <label htmlFor='placeOfJourney'>Place of Journey: </label><TextField className={editformcss.input} variant="filled" id="placeOfJourney" name="placeOfJourney" type="text" onChange={handleChange} value={journeyData.placeOfJourney} required />
            </Box>


            <Box component="div" className={editformcss.formContent}>
              <label htmlFor='description'>Description : </label><TextField className={editformcss.input} variant="filled" multiline id="description" name="description" value={journeyData.description} onChange={handleChange} required />
            </Box>

            <Box component="div" className={editformcss.formContent}>
              Select type of Post :
              <RadioGroup name="typeOfPost" value={journeyData.type} onChange={handleChange} >
                <FormControlLabel value="private" control={<Radio />} label="Private" />
                <FormControlLabel value="public" control={<Radio />} label="Public" />
              </RadioGroup>
            </Box>


            <div>
              <Button variant="contained" sx={{ mb: 1 }} type="submit" endIcon={<EditIcon />}>Make Edit</Button>
            </div>

          </Box>


        </Box>

      </Box>
    </>
  )
}


export const EditImage = ({ id }) => {
  const selectedImageId = useRef([]);
  const [images, setImages] = useState({ ids: [], addImages: [] });
  const [isUploading, setIsUploading] = useState(false);
  // const imageTag = useRef(null);

  console.log("edit image rendered");


  const VisuallyHiddenInput = styled('input')({
    opacity: 0,
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    // whiteSpace: 'nowrap',
    width: 1,
  });



  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/user/getimages", { params: { _id: id } });
        console.log("fetched iamges");
        console.log(data);
        setImages({ ...images, ids: data });
      } catch (err) {
        console.log(err);
      }

    }
    getImages();
  }, [])

  const handleClick = (event) => {
    console.log(event.target, "event occured");

    let opacity = event.target.style.opacity;
    
    if(opacity==1)event.target.style.opacity = 0.5;
    else event.target.style.opacity = 1;

    const imageId = event.target.getAttribute("imageId");

    if (selectedImageId.current.find((id) => id === imageId) === undefined)
      selectedImageId.current.push(imageId);
    else selectedImageId.current = selectedImageId.current.filter((id) => id !== imageId);

    console.log(selectedImageId.current);

  }

  const handleDelete = async () => {

    try {
      const response = await axios.post("http://localhost:3001/user/deleteimages", { imageId: selectedImageId.current, _id: id });
      console.log(response, "image deleted");
      const imagesAfterDeletion = images.ids.filter((picture) => selectedImageId.current.find((image) =>  image === picture.imageId) !== undefined ? false : true);
      selectedImageId.current=[];
      setImages({ ...images, ids: imagesAfterDeletion });


    } catch (err) {
      console.log(err);
    }

  }
  const handleAdd = async () => {
    if (images.addImages.length === 0) return;
    console.log("handle add runs")
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("_id", id);
      images.addImages.map((images) => { formData.append("file", images) });
      const { data } = await axios.post("http://localhost:3001/user/addimages", formData);
      console.log(data, "image added");


      setImages({ addImages: [], ids: [...images.ids, ...data] });
      setIsUploading(false);
    } catch (err) {
      console.log(err);
    }


  }

  const handleChange = (event) => {

    setImages({ ...images, addImages: Object.values(event.target.files) });
  }

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box className={editformcss.imageContainer} component="div" sx={{ maxHeight: 200, overflowY: 'auto' }}>

          <ImageList variant="masonry" gap={8}>
            {images.ids?.map((image) =>
              <ImageListItem sx = {{cursor : "pointer"}} key={image.size}>
                {console.log(image,"&&&&&&&&&&&")}
                {/* <img loading="lazy" src={`${image.imageURL}`} imageId={image.imageId} style={{opacity:1}} className={editformcss.cloudImage} alt="IMAGES" width={100}/> */}
                <AdvancedImage style={{opacity:1}} className={editformcss.cloudImage} alt="IMAGES" cldImg={cldImage.image(image.imageId)} width={100} onClick={handleClick} imageId={image.imageId} plugins = {[lazyload()]}/>
              </ImageListItem>
            )}
          </ImageList>

        </Box>

        <Button variant="contained" sx={{ mb: 1, mt: 1 }} color="error" onClick={handleDelete} startIcon={<DeleteIcon />}> DELETE IMAGES</Button>


        <Box className={editformcss.addImageContainer} component="div" sx={{ maxWidth: "45vw", maxHeight: "40vw", overflowY: 'auto' }}>

          <ImageList variant="masonry" gap={8}>
            {images.addImages?.map((image) =>
              <ImageListItem key={image.size}>
                <img src={URL.createObjectURL(image)} alt="choosed images" />
              </ImageListItem>
            )}
          </ImageList>

        </Box>

        <Button component="label" sx={{ mb: 1 }} variant="contained" startIcon={<AddAPhotoIcon />}>
          ADD MORE IMAGES
          <VisuallyHiddenInput type="file" multiple name="images" accept=".jpg, .jpeg, .png" onChange={handleChange} />
        </Button>

        <LoadingButton sx={{ mb: 1 }} loading={isUploading} startIcon={<CloudUploadIcon />} color="secondary" loadingPosition="start" variant="contained" onClick={handleAdd}><span>UPLOAD IMAGES</span></LoadingButton>
      </StyledEngineProvider>
    </>
  )

}