const messagebird = require("messagebird")("NgZxPihtVSBuEVG7BXNP47dZw");

function validateMobileNumber(mobile) {
  return new Promise((rs, rj) => {
    messagebird.lookup.read(mobile, function (err, response) {
      if (err) {
        rj(err);
        console.log(err);
        return;
      }
      rs(response);
    });
  });
}

module.exports = { validateMobileNumber };
