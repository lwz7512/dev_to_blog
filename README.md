Minimal Dev.to Blog Publisher
--------------------

@2021/02/18

## Install

- clone this repository
- npm install

## Usage

- Create seperate folder for each article, including an `index.md` in it.
- Write content in index.md, images tag in markdown content using github url(format desscribed below).
- Commit and push to github.
- Run command in belowing format under project root folder.
- Mannually publish article in dev.io dashboard if everything ok.

```
% APIKEY=your_24_bit_api_key node ./publish.js migrate_wp_site_phase1
```

## APIKEY

generated from [dev.to account](https://dev.to/settings/account)

## Image tag in format in index.md

![sample image](https://github.com/lwz7512/dev_to_blog/raw/master/cover/wp4speed_series.png)
