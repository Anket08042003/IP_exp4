document.addEventListener('DOMContentLoaded', function() {
    function validateOrder() {
      const tagline = document.getElementById('tagline').value;
      const mobile = document.getElementById('mobile').value;
  
      if (tagline.length > 50) {
        alert('Tagline must be 50 characters or less.');
        return false;
      }
  
      if (!/^\d{9}$/.test(mobile)) {
        alert('Please enter a valid 9-digit mobile number.');
        return false;
      }
  
      return true;
    }
  
    function processOrder(event) {
      event.preventDefault();
  
      if (validateOrder()) {
        const tagline = document.getElementById('tagline').value;
        const color = document.getElementById('color').value;
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;
        const deliveryDate = document.getElementById('delivery_date').value;
        const deliveryDetails = document.getElementById('delivery_details').value;
  
        const receipt = `
          <h2>Order Receipt</h2>
          <p><strong>Tagline:</strong> ${tagline}</p>
          <p><strong>Color:</strong> ${color}</p>
          <p><strong>Size:</strong> ${size}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
          <p><strong>Delivery Details:</strong> ${deliveryDetails}</p>
          <p><strong>Date of Generation:</strong> ${new Date()}</p>
        `;
  
        document.getElementById('receipt').innerHTML = receipt;
      }
    }
  
    const orderForm = document.querySelector('form');
    orderForm.addEventListener('submit', processOrder);
  });
  