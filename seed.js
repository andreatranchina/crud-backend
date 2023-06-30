const db = require('./db/db');
const {Campus, Student} = require ('./db/models');

const seedCampuses = [
    {name: 'Brooklyn College', address: '2900 Bedford Avenue, Brooklyn, NY, 11210', description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + 
    "Cras tincidunt lobortis feugiat vivamus at. In egestas erat imperdiet sed euismod nisi. Tellus elementum sagittis vitae et leo. " + 
    "Ultricies mi quis hendrerit dolor magna. Libero id faucibus nisl tincidunt eget nullam non. Ut etiam sit amet nisl purus. Nulla " + 
    "aliquet porttitor lacus luctus accumsan tortor posuere. Tincidunt ornare massa eget egestas purus viverra accumsan. Odio ut enim blandit " +
    "volutpat maecenas volutpat blandit aliquam etiam."},

    {name: 'Hunter College', address: '695 Park Ave, New York, NY 10065', description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + 
    "Cras tincidunt lobortis feugiat vivamus at. In egestas erat imperdiet sed euismod nisi. Tellus elementum sagittis vitae et leo. " + 
    "Ultricies mi quis hendrerit dolor magna. Libero id faucibus nisl tincidunt eget nullam non. Ut etiam sit amet nisl purus. Nulla " + 
    "aliquet porttitor lacus luctus accumsan tortor posuere. Tincidunt ornare massa eget egestas purus viverra accumsan. Odio ut enim blandit " +
    "volutpat maecenas volutpat blandit aliquam etiam."},

    {name: 'Baruch College', address: '55 Lexington Ave, New York, NY 10010', description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + 
    "Cras tincidunt lobortis feugiat vivamus at. In egestas erat imperdiet sed euismod nisi. Tellus elementum sagittis vitae et leo. " + 
    "Ultricies mi quis hendrerit dolor magna. Libero id faucibus nisl tincidunt eget nullam non. Ut etiam sit amet nisl purus. Nulla " + 
    "aliquet porttitor lacus luctus accumsan tortor posuere. Tincidunt ornare massa eget egestas purus viverra accumsan. Odio ut enim blandit " +
    "volutpat maecenas volutpat blandit aliquam etiam."},

    {name: 'College of Staten Island', address: '2800 Victory Blvd, Staten Island, NY 10314', description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + 
    "Cras tincidunt lobortis feugiat vivamus at. In egestas erat imperdiet sed euismod nisi. Tellus elementum sagittis vitae et leo. " + 
    "Ultricies mi quis hendrerit dolor magna. Libero id faucibus nisl tincidunt eget nullam non. Ut etiam sit amet nisl purus. Nulla " + 
    "aliquet porttitor lacus luctus accumsan tortor posuere. Tincidunt ornare massa eget egestas purus viverra accumsan. Odio ut enim blandit " +
    "volutpat maecenas volutpat blandit aliquam etiam."},
];

const seedStudents = [
    {firstName: 'Lauren', lastName: 'Smith', email: "lauren.smith@gmail.com", gpa: "3.88"},
    {firstName: 'Ethan', lastName: 'Chen', email: "ethan.chen@yahoo.com", gpa: "3.05"},
    {firstName: 'Sandra', lastName: 'Caputo', email: "sandra.caputo@aol.com", gpa: "3.50"},
    {firstName: 'Fatima', lastName: 'Uddin', email: "fatima.uddin", gpa: "3.78"},
];

const seed = async () => {
    await Campus.bulkCreate(seedCampuses);
    await Student.bulkCreate(seedStudents);
};

//only seed once
seed().then(() => process.exit());