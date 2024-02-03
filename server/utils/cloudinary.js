const cloudinary = require('cloudinary').v2;
const fs = require('fs');

 cloudinary.config({ 
    cloud_name: 'dpsjn9leb', 
    api_key : '848929862227836',
    api_secret: 'BomH9b0kOTeBa5NnlppKSJ4GlNc',
    secure: true,
  
  });


  exports.upload = async(localImageFilePath)=>{
    try{
      console.log(localImageFilePath, "localImange");
      if(localImageFilePath)
      {
        const result = await cloudinary.uploader.upload(localImageFilePath, {resource_type:  'image'});
        console.log(result);
        
        
      fs.unlink(localImageFilePath,(err)=>{
        if(err) throw err;
        console.log("TemproryImageFile deleted");
      })        
        
        
        return result.public_id;


      }
      else throw new Error("Cloudinary upload failed");

    }catch(err){

      fs.unlink(localImageFilePath,(err)=>{
        if(err) throw err;
        console.log("Unkown File deleted");
      })
      console.log(err);
      return err;
    }
  }



  exports.delete = async(imageId)=>{

    try{
      const result = await cloudinary.uploader.destroy(imageId, {
        resource_type: "image",
    });
      console.log(result, "Cloudinary deleted");
      return result;
      
    }
    catch(err){
      console.log(err);
      return err;
    }
  }
  console.log(cloudinary.config());