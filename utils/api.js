export const fetchImages = async () => {
  const res = await fetch(`https://unsplash.it/list`);
  const images = await res.json();

  return images
}

export const getImagesFromId = id => `https://unsplash.it/${600}/${600}/?image=${id}`