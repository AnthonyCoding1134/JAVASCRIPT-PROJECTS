function getCatFact() {
   // Fetch a random dog image
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  const imageUrl = data.message;
  // Display the image, for example:
  const img = document.createElement('img');
  img.src = imageUrl;
  document.body.appendChild(img);
})
.catch(error => console.error('Error fetching dog image:', error));

// Fetch a random dog image by breed
const breed = 'hound'; // Replace with the desired breed
fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
.then(response => response.json())
.then(data => {
  const imageUrl = data.message;
   // Display the image, for example:
  const img = document.createElement('img');
  img.src = imageUrl;
  document.body.appendChild(img);
})
.catch(error => console.error(`Error fetching ${breed} image:`, error));

// Get a list of all dog breeds
fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
  const breeds = Object.keys(data.message);
  // Use the breeds list, for example, populate a dropdown:
  const select = document.createElement('select');
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed;
    option.text = breed;
    select.appendChild(option);
  });
    document.body.appendChild(select)
})
.catch(error => console.error('Error fetching breeds list:', error));

}