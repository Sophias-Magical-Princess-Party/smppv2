module.exports = function(eleventyConfig) {
  // set copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');
  // set custom domain name
    eleventyConfig.addPassthroughCopy("src/CNAME");
  // set input and output folder
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};