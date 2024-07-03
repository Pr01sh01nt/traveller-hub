import React, { useState } from 'react'
import axios from 'axios';
import journeycss from './User.module.css'
import { Box, Button, TextField, Typography, ImageList, ImageListItem, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';



axios.defaults.withCredentials = true;

const VisuallyHiddenInput = styled('input')({
  opacity: 0,
  height: 1,
  position: 'absolute',
  bottom: 0,
  left: 0,
  // whiteSpace: 'nowrap',
  width: 1,
});

const MyJourney = () => {
  const [journeyData, setJourneyData] = useState({ placeOfJourney: "", description: "", type: "public", images: [] });
  const [isSaving, setIsSaving] = useState(false);

  // console.log(journeyData);


  // console.log("render of textarea");


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
      // console.log("I Length", event.target.files);
      let img = [];

      img = Object.values(event.target.files);  // returns array
      // console.log("I img", img);
      // console.log(typeof (img));
      // console.log(img);


      setJourneyData({ ...journeyData, images: img });


    }
    else if (event.target.name === "typeOfPost") {
      setJourneyData({ ...journeyData, type: event.target.value });
    }
  }

  const handleSubmit = async (event) => {
    setIsSaving(true);
    event.preventDefault();
    try {

      const formData = new FormData();
      for (const key in journeyData) {
        // console.log(key, journeyData[key]);
        if (key !== "images")
          formData.append(key, journeyData[key]);
        else journeyData[key].map((image) => { formData.append(key, image); });

      }


      // console.log('saving...');
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/myjourney`, formData);
      setJourneyData({ placeOfJourney: "", description: "", type: "public", images: [] });
      setIsSaving(false);
      // console.log(res.data);

    } catch (err) {
      // console.log(err);
    }

  }


  return (
    <>
      <StyledEngineProvider injectFirst>
        <Typography variant="h3">
          Write your travel Expreinces
        </Typography>
        <Box component="div" className={journeycss.form}>
          <Box component="form" onSubmit={handleSubmit}  >

            <Box component="div" className={journeycss.formContent}>
              <label htmlFor='placeOfJourney'>Place of Journey: </label><TextField className={journeycss.input} variant="filled" id="placeOfJourney" name="placeOfJourney" type="text" onChange={handleChange} value={journeyData.placeOfJourney} required />
            </Box>

            <Box component="div" className={journeycss.formContent}>
              <label htmlFor='journeyImage'>Add Journey images : </label>

              <Box component="div" sx={{ maxWidth: 250, maxHeight: 200, overflowY: 'auto' }} className={journeycss.imageList}>

                <ImageList variant="masonry" gap={8}>
                  {journeyData.images.map((image) =>
                    <ImageListItem key={image.size}>
                      {/* {console.log(image)} */}
                      <img src={URL.createObjectURL(image)} alt="choosed images" />
                    </ImageListItem>
                  )}
                </ImageList>

              </Box>



              <Button component="label" variant="contained" startIcon={<AddAPhotoIcon />}>
                Add Images
                <VisuallyHiddenInput type="file" multiple name="images" accept=".jpg, .jpeg, .png" onChange={handleChange} />
              </Button>



            </Box>



            <Box component="div" className={journeycss.formContent}>
              <label htmlFor='description'>Description : </label><TextField className={journeycss.input} variant="filled" multiline id="description" name="description" value={journeyData.description} onChange={handleChange} required />
            </Box>


            <Box component="div" className={journeycss.formContent}>
              Select type of Post :
              <RadioGroup name="typeOfPost" value={journeyData.type} onChange={handleChange} >
                <FormControlLabel value="private" control={<Radio />} label="Private" />
                <FormControlLabel value="public" control={<Radio />} label="Public" />
              </RadioGroup>
            </Box>

            <Box component="div" className={journeycss.formContent}>
              <LoadingButton loading={isSaving} startIcon={<SaveIcon />} color="primary" loadingPosition="start" variant="contained" type="submit"><span>Save Journey</span></LoadingButton>
                  
            </Box>

          </Box>
        </Box>

      </StyledEngineProvider>

    </>
  )
}

export default MyJourney;
