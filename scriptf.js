// Toggle Description and Ingredients
const toggleTitles = document.querySelectorAll('.toggle-title');

toggleTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Find the next sibling element (toggle-content)
    const content = title.nextElementSibling;

    // Toggle the 'active' class and show/hide content
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Open and Close Modal
const openModalBtn = document.getElementById('AddToCart');
const modal = document.getElementById('orderModal');
const closeModalBtn = document.getElementById('closeModal');

// Open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// When clicking outside the modal content, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Quantity Buttons
let quantity = 1;
const quantityInput = document.getElementById('quantity');
const increaseQuantityBtn = document.getElementById('increaseQuantity');
const decreaseQuantityBtn = document.getElementById('decreaseQuantity');

increaseQuantityBtn.addEventListener('click', () => {
  quantity++;
  quantityInput.value = quantity;
});

decreaseQuantityBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

// Handle Form Submission
const pickupForm = document.getElementById('pickupForm');
pickupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;

  // Validate time selection (must be between 9 AM and 6 PM)
  const time = new Date(`2024-01-01T${pickupTime}`);
  const startTime = new Date('2024-01-01T09:00');
  const endTime = new Date('2024-01-01T18:00');
  
  if (time < startTime || time > endTime) {
    alert('Pickup time must be between 9:00 AM and 6:00 PM.');
    return;
  }

  // Generate Random Order Number (6 digits)
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  // Display Receipt
  document.getElementById('orderNumber').textContent = orderNumber;
  document.getElementById('receiptDate').textContent = pickupDate;
  document.getElementById('receiptTime').textContent = pickupTime;
  document.getElementById('receiptQuantity').textContent = quantity;
  document.getElementById('receiptTotal').textContent = (quantity * 250).toFixed(2); // Assuming price is ₱250 per item

  // Show the receipt and hide the form
  document.getElementById('receipt').style.display = 'block';
  pickupForm.style.display = 'none';
});
