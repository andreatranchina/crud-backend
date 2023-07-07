const db = require('./db/db');
const {Campus, Student} = require ('./db/models');

const seedCampuses = [
    {name: 'Brooklyn College', address: '2900 Bedford Avenue, Brooklyn, NY, 11210', description: 
    "Brooklyn College is a distinguished institution located in Brooklyn, New York. It is known for its academic excellence and vibrant " +
    "campus community. With a wide array of undergraduate and graduate programs, the college offers students the opportunity to pursue their " + 
    "passions and gain valuable knowledge and skills. Renowned for its diverse and inclusive environment, Brooklyn College fosters an atmosphere " +
    "of intellectual curiosity, critical thinking, and cultural engagement."},

    {name: 'Hunter College', address: '695 Park Ave, New York, NY 10065', description: 
    "Hunter College is a renowned institution located in New York City, offering a wide range of undergraduate and graduate programs. With a strong " +
    "emphasis on academic excellence and a vibrant urban campus, Hunter College provides students with an enriching educational experience in the heart " +
    "of one of the world's most dynamic cities."},

    {name: 'Baruch College', address: '55 Lexington Ave, New York, NY 10010', description: 
    "Baruch College, situated in the bustling metropolis of NYC, is a prestigious institution that offers a comprehensive range of " +
    "undergraduate and graduate programs. Known for its emphasis on business, arts, and sciences, Baruch College equips students with the " + 
    "knowledge and skills needed to excel in their chosen fields. With a diverse and highly accomplished faculty " + 
    "and a prime location in the financial capital of the world, Baruch College provides an exceptional experience that prepares students " +
    "for successful careers."},

    {name: 'College of Staten Island', address: '2800 Victory Blvd, Staten Island, NY 10314', description: 
    "The College of Staten Island, part of The City University of New York (CUNY) system, is a reputable institution located in " +
    "Staten Island, New York. Offering a wide range of academic programs, including liberal arts, sciences, and professional studies, " +
    "the college provides students with a comprehensive and engaging education. With a commitment to academic excellence, dedicated faculty, " +
    "and a supportive campus community, CSI offers students a nurturing environment to pursue their academic and career goals."},

    {name: 'Queens College', address: '65-30 Kiseena Blvd, Queens, NY 11367', description:
    "Queens College, situated in the vibrant borough of Queens in NYC, is a distinguished institution renowned for its academic " +
    "excellence and cultural diversity. As part of CUNY system, the college offers a wide range of undergraduate and graduate programs " +
    "across various disciplines. With a dedicated faculty, innovative research opportunities, and a commitment to social justice, Queens " +
    "College provides students with a transformative educational experience. The campus fosters an inclusive environment that encourages " +
    "intellectual growth and civic engagement"},
];

const seedStudents = [
    {firstName: 'Lauren', lastName: 'Smith', email: "lauren.smith@gmail.com", gpa: "3.88"},
    {firstName: 'Ethan', lastName: 'Chen', email: "ethan.chen@yahoo.com", gpa: "3.05", campusId: 1},
    {firstName: 'Sandra', lastName: 'Caputo', email: "sandra.caputo@aol.com", gpa: "3.50", campusId: 2},
    {firstName: 'Fatima', lastName: 'Uddin', email: "fatima.uddin@gmail.com", gpa: "3.78", campusId: 4},
    {firstName: 'Liam', lastName: 'Thompson', email: "liam.thompson@icloud.com", gpa: "3.75", campusId: 4},
    {firstName: 'Mia', lastName: 'Turner', email: "mia.turner@gmail.com", gpa: "3.23", campusId: 4},
    {firstName: 'Shelly', lastName: 'Bernstein', email: "shellyb@gmail.com", gpa: "2.99", campusId: 2},
    {firstName: 'Ibrahim', lastName: 'Ali', email: "ibali@gmail.com", gpa: "3.35", campusId: 5},
    {firstName: 'Charlotte', lastName: 'Murphy', email: "charlotte.murphy@icloud.com", gpa: "3.63", campusId: 2},
    {firstName: 'Lauren', lastName: 'Yu', email: "lauren.yu@gmail.com", gpa: "3.38", campusId: 1},
];

const seed = async () => {
    await Campus.bulkCreate(seedCampuses);
    await Student.bulkCreate(seedStudents);
};

//only seed once
seed().then(() => process.exit());