const faker = require('faker');

// Addresses are random valid addresses from:  https://github.com/EthanRBrown/rrad/blob/master/addresses-us-100.json

const oktaGroomerLocations = [
  {
    profile_id: '00ultwew80Onb2vOT4x6',
    address: '12245 West 71st Place',
    is_mobile: false,
    zip: '80004',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 39.8267078,
    longitude: -105.1366798,
    country: 'United States of America',
    state: 'Colorado',
    city: 'Arvada',
  },
  {
    profile_id: '00ultwqjtqt4VCcS24x6',
    address: '',
    is_mobile: false,
    zip: '20020',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 38.867033,
    longitude: -76.979235,
    country: 'United States of America',
    state: 'DC',
    city: 'Washington',
  },
  {
    profile_id: '00u13omswyZM1xVya4x7',
    address: '150 Carter Street',
    is_mobile: true,
    zip: '95945',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 39.213076,
    longitude: -121.077583,
    country: 'United States of America',
    state: 'CT',
    city: 'Manchester',
  },
  {
    profile_id: '00u13oned0U8XP8Mb4x7',
    address: '560 Penstock Drive',
    is_mobile: false,
    zip: '95945',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 39.213076,
    longitude: -121.077583,
    country: 'United States of America',
    state: 'CA',
    city: 'Grass Valley',
  },
];

const oktaUserLocations = [
  {
    profile_id: '00ulthapbErVUwVJy4x6',
    address: '6463 Vrain Street',
    is_mobile: false,
    zip: '80003',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 39.814056,
    longitude: -105.046913,
    country: 'United States of America',
    state: 'CO',
    city: 'Arvada',
  },
  {
    profile_id: '00ultwqjtqt4VCcS24x6',
    address: '81 Seaton Place Northwest',
    is_mobile: false,
    zip: '20001',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 38.9149499,
    longitude: -77.01170259999999,
    country: 'United States of America',
    state: 'DC',
    city: 'Washington',
  },
  {
    profile_id: '00ultwz1n9ORpNFc04x6',
    address: '131 Westerly Street',
    is_mobile: true,
    zip: '06042',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 41.7906813,
    longitude: -72.53559729999999,
    country: 'United States of America',
    state: 'CT',
    city: 'Manchester',
  },
  {
    profile_id: '00u13ol5x1kmKxVJU4x7',
    address: '22572',
    is_mobile: false,
    zip: '93908',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 39.213076,
    longitude: -121.077583,
    country: 'United States of America',
    state: 'CA',
    city: 'Salinas',
  },
];

const randomGroomersLocations = [
  {
    profile_id: '50db2bcb-270a-44af-abb6-af5467561100',
    address: '2721 Lindsay Avenue',
    is_mobile: false,
    zip: '40206',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 38.263793,
    longitude: -85.700243,
    country: 'United States of America',
    state: 'KY',
    city: 'Louisville',
  },
  {
    profile_id: '842da89e-56cf-4e8c-9164-08f8a23e6cc1',
    address: '18 Densmore Drive',
    is_mobile: false,
    zip: '05452',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 44.492953,
    longitude: -73.101883,
    country: 'United States of America',
    state: 'Essex',
    city: 'VT',
  },
  {
    profile_id: '71c6cea0-f653-48f5-8345-2af7c2e40631',
    address: '637 Britannia Drive',
    is_mobile: false,
    zip: '94591',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 38.1047699999999,
    longitude: -122.193849,
    country: 'United States of America',
    state: 'Vallejo',
    city: 'CA',
  },
  {
    profile_id: '5c9817c8-8b4f-4837-a726-a1506c19b9f6',
    address: '5601 West Crocus Drive',
    is_mobile: false,
    zip: '85306',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 33.6152469,
    longitude: -112.179737,
    country: 'United States of America',
    state: 'Az',
    city: 'Glendale',
  },
  {
    profile_id: '00e1deca-72a6-4392-8288-467805027632',
    address: '5403 Illinois Avenue',
    is_mobile: false,
    zip: '37209',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 36.157077,
    longitude: -86.853827,
    country: 'United States of America',
    state: 'Nashville',
    city: 'TN',
  },
  {
    profile_id: '0524b5fb-4335-4b72-addd-a8485ee4bd08',
    address: '8821 West Myrtle Avenue',
    is_mobile: false,
    zip: '85305',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 33.5404296,
    longitude: -112.2488391,
    country: 'United States of America',
    state: 'AZ',
    city: 'Glendale',
  },
  {
    profile_id: 'f6da0d64-5965-4c3c-b0e5-733646cea98c',
    address: '2203 7th Street Road',
    is_mobile: false,
    zip: '40208',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 38.218107,
    longitude: -85.779006,
    country: 'United States of America',
    state: 'KY',
    city: 'Louisville',
  },
  {
    profile_id: '5ce25a3a-c387-4208-a668-057eb5975c48',
    address: '2409 Research Boulevard',
    is_mobile: false,
    zip: '80526',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 40.554586,
    longitude: -105.087852,
    country: 'United States of America',
    state: 'CO',
    city: 'Fort Collins',
  },
  {
    profile_id: '94a75178-b60e-47b4-8a64-7fd7d1a17660',
    address: '87 Horseshoe Drive',
    is_mobile: false,
    zip: '05037',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 43.4731793,
    longitude: -72.4697532,
    country: 'United States of America',
    state: 'VT',
    city: 'West Windsor',
  },
  {
    profile_id: 'ab7b2f78-dedd-492c-8bba-cb17a2391346',
    address: '60 Desousa Drive',
    is_mobile: false,
    zip: '06040',
    phone_number: faker.phone.phoneNumber('!##.###.###'),
    latitude: 41.7409259,
    longitude: -72.5619104,
    country: 'United States of America',
    state: 'Manchester',
    city: 'CT',
  },
];

const locations = [
  ...oktaGroomerLocations,
  ...randomGroomersLocations,
  ...oktaUserLocations,
];

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('locations').insert(locations);
    });
};
