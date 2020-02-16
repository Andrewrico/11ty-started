// Imports
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require("fs");

// Import Terser
const Terser = require("terser");

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import data files
const site = require('./src/_data/site.json');

// config
module.exports = function(config) {

  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Passthrough copy
  config.addPassthroughCopy("src/_includes/static/");
  config.addPassthroughCopy("src/_includes/static/css/stylesheet.css");
  config.addPassthroughCopy("src/_includes/static/js/app.js");
  config.addPassthroughCopy("src/_includes/static/images/");
  config.addPassthroughCopy("src/_includes/static/fonts/");
  config.addPassthroughCopy("src/_includes/static/icons/lib.svg");
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  // config.setFrontMatterParsingOptions({
  //   excerpt: true,
  //   excerpt_separator: "<!-- excerpt -->"
  // });



  // JS minify
  config.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code);
    if( minified.error ) {
        console.log("Terser error: ", minified.error);
        return code;
    }
    return minified.code;
  });
  
  // Date
  const now = new Date();
  
  // Custom collections
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)]
      .reverse()
      .slice(0, site.maxPostsPerPage);
  });

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // 404 
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });
  // Directiory Output 
  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes"
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
