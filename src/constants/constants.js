const configurations = {
  images: {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: [
      'w300',
      'w780',
      'w1280',
      'original',
    ],
    logo_sizes: [
      'w45',
      'w92',
      'w154',
      'w185',
      'w300',
      'w500',
      'original',
    ],
    poster_sizes: [
      'w92',
      'w154',
      'w185',
      'w342',
      'w500',
      'w780',
      'original',
    ],
    profile_sizes: [
      'w45',
      'w185',
      'h632',
      'original',
    ],
    still_sizes: [
      'w92',
      'w185',
      'w300',
      'original',
    ],
  },
  change_keys: [
    'adult',
    'air_date',
    'also_known_as',
    'alternative_titles',
    'biography',
    'birthday',
    'budget',
    'cast',
    'certifications',
    'character_names',
    'created_by',
    'crew',
    'deathday',
    'episode',
    'episode_number',
    'episode_run_time',
    'freebase_id',
    'freebase_mid',
    'general',
    'genres',
    'guest_stars',
    'homepage',
    'images',
    'imdb_id',
    'languages',
    'name',
    'network',
    'origin_country',
    'original_name',
    'original_title',
    'overview',
    'parts',
    'place_of_birth',
    'plot_keywords',
    'production_code',
    'production_companies',
    'production_countries',
    'releases',
    'revenue',
    'runtime',
    'season',
    'season_number',
    'season_regular',
    'spoken_languages',
    'status',
    'tagline',
    'title',
    'translations',
    'tvdb_id',
    'tvrage_id',
    'type',
    'video',
    'videos',
  ],
};

export class URLs {
  static tmdbImageSrc(width, path, type = 'any') {
    //! implement the 'any' case
    if (!width || !path) return;

    const { images } = configurations;
    const baseUrl = images.base_url;
    const validPath = path.startsWith('/') ? path : `/${path}`;

    if (typeof width === 'string') return `${baseUrl}${width}${validPath}`;
    if (typeof width !== 'number') return;

    let imageCategory = 'any';
    if (type === 'backdrop') imageCategory = 'backdrop_sizes';
    else if (type === 'logo') imageCategory = 'logo_sizes';
    else if (type === 'poster') imageCategory = 'poster_sizes';
    else if (type === 'profile') imageCategory = 'profile_sizes';
    else if (type === 'still') imageCategory = 'still_sizes';

    const sizesList = images[imageCategory];

    let difference = Infinity;
    const widthFromList = sizesList.reduce((prev, value) => {
      if (value.startsWith('w')) {
        const availableWidth = parseInt(value.substring(1), 10);
        if (Number.isNaN(availableWidth)) {
          const diff = Math.abs(width - availableWidth);

          if (diff < difference) {
            difference = diff;
            return value;
          }
        }
      }
      return prev;
    }, 'original');

    return `${baseUrl}${widthFromList}${validPath}`;
  }

  static profilePlaceholder = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
}
