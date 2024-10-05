
# TCE NSS Photo Booth

Our team has developed an Photo Booth Web Application designed to capture and share selfies effortlessly. Users can take photos directly through the web interface, which are then instantly sent to socail platforms. The application provides a simple, user-friendly interface and ensures quick image delivery, making it perfect when you smile...

**Note: This is a part of Fork'n Roll Challenge 2024 (Coders Club TCE)**

The original Repository we are challenged with is : https://github.com/CodersClubIT/Photo-Booth

## Video Demo Link

https://tinyurl.com/TCE-NSS-Photo-Booth

## Features (inc Improvements)

- **Improved User Interface** (Added Carrousel Sliders, TypeWritter Effects, Clean and Neat Color Palette and Fonts).
- **Responsiveness** (The application now supports displays of various resolutions notably mobile phones, tablets, laptops and desktops).
- **Smile to Capture** (The original repo had a button onclick to capture this is replaced with a smile to capture functionality).
- **Photo Frames** (Added options to choose photo frames of choice within the application)
- **Multiple Social Handles** (Users can now share their photgraphs on multiple social medias).
- **Bucket Storage && DBMS** (DBMS and Bucket storage are integrated to store user images and their other metadata for future references and contacts).

## Run Locally

Clone the project

```bash
  git clone https://github.com/insaneonai/Photo-Booth-TCE-NSS.git
```

Go to the project directory

```bash
  cd Photo-Booth-TCE-NSS
```

Install dependencies

```bash
  npm install
```

Setup .env (visit: https://play.min.io:9443/ with credentials minioadmin:minioadmin for more...)

```bash
endPoint=YOUR MINIO ENDPOINT (eg: play.min.io)
accessKey=YOUR MINIO ACCESS KEY (eg: N2NMiv88bp196V2dOJAF)
secretKey=YOUR MINIO SECRET KEY (eg: YF6XoDgbOcaIMIyOsN0av6d0zz0xyTF15ieUPtSM)
bucketName=BUCKET NAME (eg: nss-images)
```

Setup CONSTANTS.js

```bash
DB_URL="YOUR MONGO DB URL SRV"
```

Start the vite app

```bash
  npm run dev
```

Start the server

```bash
  node server.js
```


## 🚀 About Us
Team Name: Sokar Squad 🤡

![alt text](/public/about-us.jpg)

Members: 
- Thayumanavan
- Kaushik ram
- Pradeep
- Jeyadevan


