/**
 * simple script for dev.to article publish:
 * 
 * Usage:
 * APIKEY=XXXX node ./publish.js post_directory_name
 * 
 * @2021/0218
 */

const fetch = require("node-fetch");
const fs    = require('fs-extra');
const path  = require('path');

const apikey = process.env.APIKEY;
console.log('got apikey: '+apikey);

const articleFolder = process.argv.slice(2);
console.log('sending article: '+articleFolder);

(async () => {
  
  let post = {
    title : "Article from nodejs script",
    body_markdown : "article markdown content...",
    published : false,
    tags : ["discuss", "javascript"]
  }

  try {
    
    articleStr = fs.readFileSync(path.join(articleFolder, 'index.md'), 'utf8')
    if(articleStr) post.body_markdown = articleStr

  } catch (err) {
    console.log('!!! read article file error!');
    console.error(err);
  }

  console.log('>>> sending artile ...');
  await fetch(`https://dev.to/api/articles`, {
      headers: {
        'api-key': apikey,
        'Content-Type': `application/json`,
      },
      method: `post`,
      body: JSON.stringify({
        article: post,
      }),
    }).catch((err) => console.log(err));

  console.log('>>> article published!');

})()