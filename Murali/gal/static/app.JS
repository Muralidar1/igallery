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
