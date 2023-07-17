export namespace IEntity {
  export interface Genre {
    _id: string;
    name: string;
  }

  export interface Movie {
    dailyRentalRate: number;
    genre: Genre;
    numberInStock: number;
    title: string;
    username: string;
    _id: string;
  }
}
