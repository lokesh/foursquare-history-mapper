# Places & Spaces

- https://maps.googleapis.com/maps/api/staticmap?parameters
- https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=icon%3Ahttp%3A%2F%2Fwww.google.com%2Fmapfiles%2Farrow.png%7C37.748967%2C-122.4422945&visible=37.819001%2C-122.539621%7C37.678933%2C-122.344968&key=API_KEY

## To-do

**Auto- bounding box, image size**
- [ ] Calc bounding box aspect ratio. (fiddle with multiplies as needed)
- [ ] Add imgWidth as debugging var
- [ ] Use imgWidth with aspect ratio to redraw and resize canvas


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

**Style**
- [ ] Padding outside of bounding box or gen box manually
- [ ] Randomize north, west, east, south

- [ ] 3d perspective??


## Getting started

1. Duplicate ```config.example.js``` in the js folder to ```config.js``` and update CLIENT_ID with the value of your Foursquare City Guide API Client Id.
2. Setup a local httpserver. I use: ```python -m SimpleHTTPServer```

To refetch check-in data, clear ``checkins` from localstorage.

## Adding a new area option (e.g. San Francisco, New Hampshire)

1. Generate a boundary box using [BoundingBox site](https://boundingbox.klokantech.com/).
2. Grab the top left and bottom right coords as CSV (e.g. -72.5572,42.6972,-70.5614,45.3058).

...


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

- `checkins.json`: Venue data. Not checkins.
- `places.json`: Venue data after processing complete. This is the file we'll load.





