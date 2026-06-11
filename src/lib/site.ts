export const site = {
  name: 'NZ Tech Repairs',
  legalName: 'NZ Tech Repairs',
  tagline: 'Warkworth Phone, Computer & TV Repair Specialists',
  url: 'https://nztechrepairs.com',
  phone: '027-827-0002',
  phoneHref: 'tel:0278270002',
  email: 'nztechrepairs@gmail.com',
  address: {
    street: '8/9 Fairwater Road',
    locality: 'Warkworth',
    region: 'Auckland',
    postcode: '0910',
    country: 'New Zealand',
    countryCode: 'NZ',
    full: '8/9 Fairwater Road, Warkworth 0910, New Zealand',
  },
  geo: { lat: -36.3986, lng: 174.6635 },
  hours: [
    { days: 'Monday – Friday', open: '9:00am', close: '5:30pm' },
    { days: 'Saturday', open: '9:00am', close: '4:00pm' },
    { days: 'Sunday', open: 'Closed', close: '' },
  ],
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' },
    { days: ['Saturday'], opens: '09:00', closes: '16:00' },
  ],
  areasServed: ['Warkworth', 'Matakana', 'Snells Beach', 'Algies Bay', 'Wellsford', 'Puhoi', 'Mahurangi', 'Rodney'],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61560878084984',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  mapsQuery: '8/9+Fairwater+Rd,+Warkworth+0910,+New+Zealand',
} as const;

export const mapsEmbedSrc =
  'https://www.google.com/maps?q=8%2F9%20Fairwater%20Rd%2C%20Warkworth%200910%2C%20New%20Zealand&output=embed';
