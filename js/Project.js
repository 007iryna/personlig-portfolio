/**
 /* Project*/

export class Project {
  constructor({ title, image = null, url = '#' }) {
    this.title = title;
    this.image = image;
    this.url = url;
  }
}
