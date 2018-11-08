import uuidv4 from 'uuid/v4';

function getID() {
  return uuidv4().replace(/\-/g, '');
}

export function formatIdea(title, author) {
  return {
    id: getID(),
    title,
    author,
    likes: 0
  };
}
