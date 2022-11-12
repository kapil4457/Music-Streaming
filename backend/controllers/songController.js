const Song = require("../models/songModels");


exports.newSong = (async(req,res,next)=>{
    try{
        const {
			title,
            songLink,
            artist,
            coverPoster
		} = req.body;
        const song = await Song.create({
            title,
            songLink,
            artist,
            coverPoster,
            uploaded : Date.now()

        });

        await res.status(200).send({success : true, song})


    }catch(err){
       await  res.status(500).send({success : true , message: err.message})
    }
})


exports.deleteSong = (async(req,res,next)=>{
    try{

         const data =await Song.findByIdAndDelete(req.body.id);
       await  res.status(500).send({success:false , data})
        }
    catch(err){
      await  res.status(500).send({success : false,message : err.message})

    }
})

exports.updateLikes = (async(req,res,next)=>{
try{
    const newData = {
        likes : req.body.likes,
    }
    const song = await Song.findById(req.body.id , newData , {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    await  res.status(200).json({ success: true , song});

    

}catch(err){
    await res.status(500).send({success:false,message:err.message})
}
})


exports.getAllSong = (async(req,res,next)=>{
try{
const allSongs = await Song.findById();

await res.status(200).json({success: true , allSongs})

}catch(err){
    await res.status(500).send({success:false,message:err.message})

}
})


exports.getSingleSong = (async(req,res,next)=>{
    try{
        const song = await Song.findById(req.body.id);

        await res.status(200).json({success :true , song});
    }catch(err){
        await res.status(500).send({success:false,message:err.message})

    }
})


exports.getAllSongsFromParticularSong = (async(req,res,next)=>{
    try{
        const songs = await Song.find({artist : {$in : [{name : req.body.name ,id : req.body.id}]}});
        await res.status(200).json({success : true , songs});
    }catch(err){
        await res.status(500).send({success:false , message:err.message})
    }
})