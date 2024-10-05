import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
/* eslint-disable no-undef */
import express from 'express';
import * as Minio from 'minio';

// eslint-disable-next-line no-unused-vars
import * as database from './src/database/db.js';
import PhotoBooth from './src/models/PhotoBooth.js';

const app=express();
const port=5000;
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

const minioClient = new Minio.Client({
  endPoint: process.env.endPoint,
  port: 9000,
  useSSL: true,
  accessKey: process.env.accessKey,
  secretKey: process.env.secretKey,
})

app.post('/upload-image', async (req,res)=>{
  try{
    const {image_data} = req.body;
    const imageBuffer = Buffer.from(image_data.split('base64,')[1],'base64');

    const fileName = `custom-image-${Date.now()}-${Math.random()*1000}.png`;

    await minioClient.putObject(process.env.bucketName,fileName, imageBuffer, (err) => {
      if (err) {
        console.error('Error uploading image:',err);
        return res.status(500).send('Failed to upload image');
      }
    });

    const imageUrl = await minioClient.presignedUrl('GET', process.env.bucketName, fileName, 24*60*60);

    const photoObject = new PhotoBooth({photoUrl: imageUrl});

    await photoObject.save();

    res.status(200).send({imageUrl});

  }
  catch(error){
    console.error('Error uploading image:',error);
    res.status(500).send('Failed to upload image');
  }
});

/*app.post('/send-email',(req,res)=>{
  const { to_email,image_data }=req.body;

  if (!to_email || !image_data) {
    return res.status(400).send('Missing email or image data');
  }

  const transporter=nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'insaneonai@gmail.com',
      pass: 'shaf icfv bxpa zaqh',
    },
  });

  const mailOptions={
    from: 'insaneonai@gmail.com',
    to: to_email,
    subject: 'Your Captured Image with Custom Text',
    html: '<h3>Here is your photo with the custom text!</h3>',
    attachments: [
      {
        filename: 'custom-image.png',
        content: image_data.split('base64,')[1],
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
      console.error('Error sending email:',error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:',info.response);
    res.status(200).send('Email sent successfully');
  });
});*/

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});
