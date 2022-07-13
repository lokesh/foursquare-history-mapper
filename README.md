# Places & Spaces

- 


minVisitCount
- filter places

box
- filter places

if places change
- create grid
- pop grid
- draw

SF
- top left: 37.812616, -122.532549
- bottom right: 37.719854, -122.340741

https://boundingbox.klokantech.com/

## To-do

**Debug**
- [x] Create floating UI (Vue?)
- [ ] Only set one dimension of canvas, and have aspect ratio match bounding box.

Params
- [x] Geo boundary
- [x] Grid size
- [x] Min visit count
- [ ] Color schemes

**Filtering**
- [ ] ? Manually filter un-interesting entries

**Utils**
- [x] func: Filter by geo-rect
- [x] func: Filter by city, state, country
- [ ] func: determine land type, water or land. 

**Map**
- [x] Create grid - Bounding box of items (no padding to start) divided by rows/cols
- [ ] ? Can I determine what is the make of a rect? e.g. 50% forest, 20% developed.

**Fetch & persist**
- [x] Fetch data from Foursquare Places API
- [x] Convert check-ins to venues
- [x] Strip data down to essentials: name, lat, lng, city, state, country, category, subcategory
- [x] Add counts
- [x] Sort by counts
- [x] Save data to JSON file


**Style**
- [ ] Padding outside of bounding box or gen box manually

## Getting started

1. Duplicate ```config.example.js``` in the js folder to ```config.js``` and update CLIENT_ID with the value of your Foursquare City Guide API Client Id.
2. Setup a local httpserver. I use: ```python -m SimpleHTTPServer```

To refetch check-in data, clear ``checkins` from localstorage.

## Architecture 

vue-dat-gui

### 1. Fetching data

We use Foursquare's Places API to gather all check-ins. See `fetch.js`

`npm run fetch`


### 2. Processing data

Check-in data is modified in the following ways:
- Properties that are not needed are stripped (`id`, `year`, et al.)
- Check-ins are de-duped into venues
- `count` property is added which is a count of visits to the venue
- Custom `category` and `subCategory` properties are added




