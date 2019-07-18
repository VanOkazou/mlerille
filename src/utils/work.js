export function getCoverUrl(work) {
  return work.fields.cover.fields.file.url;
}
export function getTitle(work) {
  return work.fields.title;
}

export function getClient(work) {
  return work.fields.company;
}

export function getYear(work) {
  return work.fields.creationYear;
}

export function getDescription(work) {
  return work.fields.description.content.reduce((acc, curr) => `${acc}<p>${curr.content[0].value}</p>`, '');
}

export function getImages(work) {
  return work.fields.images.reduce((acc, curr) => [...acc, { ...curr.fields.file }], []);
}