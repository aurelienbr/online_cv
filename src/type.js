// @flow
export type mapCoords = {
  _id: string,
  lat: number,
  lng: number,
  city: string,
  _v: number
};

export type internships = {
  coord: {
    lat: number,
    lng: number
  },
  _id: string,
  href: string,
  titre: string,
  company: string,
  duree: string,
  lieu: string,
  description: string,
  __v: number
};

export type education = {
  coord: {
    lat: number,
    lng: number
  },
  _id: string,
  href: string,
  titre: string,
  ecole: string,
  duree: string,
  lieu: string,
  description: string,
  __v: number
};

export type translations = {};
