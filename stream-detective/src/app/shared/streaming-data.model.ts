// For assigning data when Watchmode SEARCH API is called
export class SearchApiData {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public year: number,
    public imdb_id?: string,
    public tmdb_id?: number,
    public tmdb_type?: string
  ) {}
};

// For assigning data (utilizing Watchmode Search API ID) when Watchmode TITLE STREAMING SERVICE API is called
// This is what's saved to userDatabae
export class UsrLibraryData {
  constructor(
    public titleName: string,
    public streamName: string[],
    public titleSeasons?: number,
    public titleEpisodes?: number
  ) {}
}

