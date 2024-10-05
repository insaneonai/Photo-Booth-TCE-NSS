import mongoose from "mongoose";

const {Schema, model} = mongoose;

const photoBoothSchema = new Schema({
    photoUrl: {
        type: String,
        required: true
    }
}, {timestamps: true});

const PhotoBooth = model('PhotoBooth', photoBoothSchema);

export default PhotoBooth;