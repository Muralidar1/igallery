# Ex.08 Design of Interactive Image Gallery
## Date:14/05/25

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
gallery.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Image Gallery</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js">
  </script>
</head>
<body style="background-image:url('bg.jpg');
             background-size: cover; background-repeat: no-repeat; background-attachment: fixed;">

 <h1 align="center" style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;color:darkcyan;">Wings of Wonder</h1>
  <div class="gallery">
    <br><br><br>
    <div><img src="1.jpeg" alt="Image 1" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="2.jpeg"Image 2" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="3.jpeg" alt="Image 3" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="4.jpg" alt="Image 4" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="5.jpeg" alt="Image 5" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="6.jpg" alt="Image 6" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="7.jpg" alt="Image 7" class="gallery-item" onclick="openModal(this)"></div>
    <div><img src="8.jpg" alt="Image 8" class="gallery-item" onclick="openModal(this)"></div>    
  </div>

  
  <div id="imageModal" class="modal" onclick="closeModal()">
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImage">
  </div>

</body>
</html>
```
style.css
```
body {
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  margin: 0;
  padding: 0;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  justify-content: center;
}

.gallery-item {
  height: auto;
  cursor: pointer;
  border: 2px solid white;
  transition: transform 1s;
  display: flex;
  margin: auto;
}

.gallery-item:hover {
  transform: scale(0.8);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
```
app.JS
```
 function openModal(image) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modal.style.display = "flex";
  modalImg.src = image.src;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
}

```
## OUTPUT:
![alt text](<Screenshot (8).png>)
 ![alt text](<Screenshot (9).png>) 
 ![alt text](<Screenshot (10).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
