# Places & Spaces


## To-do

**Debug**
- [ ] Create floating UI
Params
- [ ] Geo boundary
- [ ] Grid size
- [ ] Min visit count
- [ ] Color schemes

**Fetch & persist**
- [x] Fetch data from Foursquare Places API
- [x] Convert check-ins to venues
- [ ] Strip data down to essentials: name, lat, lng, city, state, country, category, subcategory
- [ ] Add counts
- [ ] Sort by counts
- [ ] Save data to JSON file

**Filtering**
- [ ] ? Manually filter un-interesting entries

**Utils**
- [ ] func: Filter by geo-rect
- [ ] func: determine land type, water or land. 

**Map**
- [ ] ? Can I determine what is the make of a rect? e.g. 50% forest, 20% developed.
- [ ] 


**Style**


## Getting started

1. Duplicate ```config.example.js``` in the js folder to ```config.js``` and update CLIENT_ID with the value of your Foursquare City Guide API Client Id.
2. Setup a local httpserver. I use: ```python -m SimpleHTTPServer```

To refetch check-in data, clear ``checkins` from localstorage.

## Architecture 

### 1. Fetching data

We use Foursquare's Places API to gather all check-ins. See `fetch.js`

`npm run fetch`


### 2. Processing data

Check-in data is modified in the following ways:
- Properties that are not needed are stripped (`id`, `year`, et al.)
- Check-ins are de-duped into venues
- `count` property is added which is a count of visits to the venue
- Custom `category` and `subCategory` properties are added




