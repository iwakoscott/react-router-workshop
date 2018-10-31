import uuidv4 from "uuid/v4";

export function getID() {
  return uuidv4().replace(/\-/g, "");
}
