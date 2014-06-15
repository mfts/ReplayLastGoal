var fs = require('fs')
  , expect = require('chai').expect
  , utils = require('../lib/utils');

var MP4FILE = "test/videos/test.mp4";

describe("utils", function() {

  it("converts a mp4 to a gif", function(done) {
    utils.mp4toGIF(MP4FILE, 0, 5, function(err, giffile) {
      expect(err).to.not.exist;
      console.log("Gif file: ", giffile);
      expect(fs.existsSync(giffile)).to.be.true;
      done();
    });

  });

  after(function(done) {
    // Remove GIF file 
    fs.unlink(MP4FILE.replace('.mp4','.gif'), function() { done(); });
  });

});
