
// For assigning data (utilizing Watchmode Search API ID) when Watchmode TITLE STREAMING SERVICE API is called
// This is what's saved to userDatabae
export class UserLibraryData {
  constructor(
    public titleName: string,
    public streamName: string[], //should this be an array: YES
    public id?: string,
    public titleSeasons?: number,
    public titleEpisodes?: number,
    public watched: boolean = false,
  ) {}
}

// Mary add
// For assigning data when Watchmode SEARCH API is called
export class SearchApiData {
  constructor(
    public resultType: string,
    public id: number,
    public name: string,
    public year: number,
    public imdb_id: string,
    public tmdb_id: number,
    public tmdb_type: string
  ) {}
};

// to capture data from Api Service
export class StreamTypeObject {
  constructor(
    public name: string[],
    public seasons?: number,
    public episodes?: number,
  ) { }
}




