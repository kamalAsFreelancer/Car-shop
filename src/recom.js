const recommendedCars = [
    {
      image: '../img/Audi.jpeg',
      name: 'Hyundai i20',
      details: '2021 • 20,000 km • Petrol • NPR 25 Lakhs',
    },
    {
      image: '../img/ford.jpeg',
      name: 'Honda City',
      details: '2019 • 35,000 km • Diesel • NPR 22 Lakhs',
    }
  ];
  
  const container = document.querySelector('.car-grid');
  recommendedCars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p>${car.details}</p>
      <button>View Details</button>
    `;
    container.appendChild(card);
  });
  