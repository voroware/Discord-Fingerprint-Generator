const got = require("got");

let gen = async () => {
  try {
    const { body } = await got("https://discordapp.com/api/v9/experiments", {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
      },
      responseType: "json",
    });

    return body.fingerprint;
  } catch (e) {
    console.log(error.response.body);
  }
};

(async () => {
  let fp = await gen();
  console.log(`Fingerprint: ${fp}`);
})();
