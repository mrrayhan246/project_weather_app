// ==============================
// 🌦️ WEATHER APP SCRIPT
// Author: Rayhan
// Description: Handles country & city selection dynamically
// ==============================

// ✅ Country list with ISO codes
const countries = [
  { code: 'BD', name: 'Bangladesh' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'IN', name: 'India' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'CN', name: 'China' },
  { code: 'BR', name: 'Brazil' },
  { code: 'ZA', name: 'South Africa' },
];

// ✅ Cities grouped by country code
const citiesByCountry = {
  BD: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Rangpur', 'Barisal', 'Mymensingh'],
  US: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  CA: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  GB: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
  AU: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  IN: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
  DE: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart'],
  FR: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
  JP: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya', 'Fukuoka'],
  CN: ['Beijing', 'Shanghai', 'Shenzhen', 'Guangzhou', 'Chengdu'],
  BR: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
  ZA: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
};

// ==============================
// 🧭 Populate the Country Dropdown
// ==============================
function populateCountries() {
  const countrySelect = document.getElementById('country');
  countrySelect.innerHTML = ''; // Clear previous options

  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });

  // Load cities for the first country automatically
  updateCities();
}

// ==============================
// 🏙️ Update Cities when Country Changes
// ==============================
function updateCities() {
  const countrySelect = document.getElementById('country');
  const citySelect = document.getElementById('city');
  const selectedCountry = countrySelect.value;

  // Clear old city options
  citySelect.innerHTML = '';

  // Populate new options
  if (citiesByCountry[selectedCountry]) {
    citiesByCountry[selectedCountry].forEach((city) => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  } else {
    const option = document.createElement('option');
    option.textContent = 'No cities available';
    citySelect.appendChild(option);
  }
}

// ==============================
// 🌤️ Animate form on load
// ==============================
function fadeInAnimation() {
  const form = document.querySelector('form');
  form.style.opacity = '0';
  form.style.transform = 'translateY(20px)';
  setTimeout(() => {
    form.style.transition = 'all 0.8s ease';
    form.style.opacity = '1';
    form.style.transform = 'translateY(0)';
  }, 100);
}

// ==============================
// 🚀 Initialize App
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  populateCountries();   // Fill countries on load
  fadeInAnimation();     // Animate form appearance

  // Optional: Add smooth hover animation to button
  const button = document.querySelector('button[type="submit"]');
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.2s ease';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});






// =============================
    // 🌍 Demo JavaScript Logic
    // =============================

    // ✅ Country list
    const counstries = [
      { code: 'BD', name: 'Bangladesh' },
      { code: 'US', name: 'United States' },
      { code: 'IN', name: 'India' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'JP', name: 'Japan' },
    ];

    // ✅ Cities by country
    const citiesBysCountry = {
      'BD': ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'],
      'US': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
      'IN': ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'],
      'GB': ['London', 'Manchester', 'Liverpool', 'Bristol'],
      'JP': ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya'],
    };

    // ✅ Fake weather data for demo
    const demoWeatherData = [
      { temp: 30, condition: 'Sunny' },
      { temp: 26, condition: 'Cloudy' },
      { temp: 22, condition: 'Rainy' },
      { temp: 18, condition: 'Stormy' },
      { temp: 12, condition: 'Windy' },
      { temp: 15, condition: 'Foggy' },
    ];

    // ✅ Populate countries on page load
    function populateCountries() {
      const countrySelect = document.getElementById('country');
      countries.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = c.name;
        countrySelect.appendChild(opt);
      });
      updateCities(); // Load default cities
    }

    // ✅ Update cities when a country changes
    function updateCities() {
      const country = document.getElementById('country').value;
      const citySelect = document.getElementById('city');
      citySelect.innerHTML = '';

      (citiesByCountry[country] || []).forEach(city => {
        const opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
      });
    }

    // ✅ Generate random weather data for demo
    function getDemoWeather() {
      const random = demoWeatherData[Math.floor(Math.random() * demoWeatherData.length)];
      return random;
    }

    // ✅ Handle form submission
    document.getElementById('weatherForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const country = document.getElementById('country').value;
      const city = document.getElementById('city').value;
      const { temp, condition } = getDemoWeather();

      document.getElementById('weatherCity').textContent = `${city}, ${country}`;
      document.getElementById('weatherTemp').textContent = `🌡️ Temperature: ${temp}°C`;
      document.getElementById('weatherCondition').textContent = `☁️ Condition: ${condition}`;

      const card = document.getElementById('weatherCard');
      card.classList.remove('hidden');
      card.classList.add('fade-in');
    });

    // ✅ Initialize everything
    document.addEventListener('DOMContentLoaded', () => {
      populateCountries();
      document.getElementById('country').addEventListener('change', updateCities);
    });