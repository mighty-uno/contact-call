const messagebird = require("messagebird")("NgZxPihtVSBuEVG7BXNP47dZw");

function validateMobileNumber(mobile) {
  return new Promise((rs, rj) => {
    messagebird.lookup.read(mobile, function (err, response) {
      if (err) {
        rs({ error: err.message });
        console.log(err[err.length - 1]);
        return;
      }
      rs(response);
    });
  });
}

module.exports = { validateMobileNumber };
