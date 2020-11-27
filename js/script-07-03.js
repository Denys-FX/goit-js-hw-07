const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const createGalleryItem = (image) => {
    const galleryItem = document.createElement('img');
    galleryItem.src = image.url;
    galleryItem.alt = image.alt;
    galleryItem.classList.add('gallery-item')
    return galleryItem;
}

const galleryItems = images.map(image => createGalleryItem(image));
console.log(galleryItems[0]);

const galleryContainer = document.getElementById('gallery');
galleryContainer.append(...galleryItems);
console.log(galleryContainer);