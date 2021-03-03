const fetch = require("node-fetch");

const User = require("../models/user");

exports.getdata = async (req, res) => {
  let responseMsg = "";
  if ("https://randomuser.me/api?page=1&results=150&nat=BR") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=BR", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for Brazil<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: Brazil's data is not inserted<br>";
      });
  } else {
    responseMsg += "URL for BRAZIL is not given<br>";
  }
  if ("https://randomuser.me/api?page=1&results=150&nat=AU") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=AU", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for Australia<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: Australia's data is not inserted<br>";
      });
  } else {
    responseMsg += "URL for Australia is not given<br>";
  }
  if ("https://randomuser.me/api?page=1&results=150&nat=CA") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=CA", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for Canada<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: Canada's data is not inserted<br>";
      });
  } else {
    responseMsg += "URL for Canada is not given<br>";
  }
  if ("https://randomuser.me/api?page=1&results=150&nat=FR") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=FR", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for France<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: France's data is not inserted<br>";
      });
  } else {
    responseMsg += "URL for France is not given<br>";
  }
  if ("https://randomuser.me/api?page=1&results=150&nat=GB") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=GB", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for Great Britain<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: Great Britain's data is not inserted<br>";
      });
  } else {
    responseMsg += "URL for Britain is not given<br>";
  }
  if ("https://randomuser.me/api?page=1&results=150&nat=US") {
    await fetch("https://randomuser.me/api?page=1&results=150&nat=US", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        User.insertMany(json["results"]).then(() => {
          responseMsg += "Successfully Inserted data for USA<br>";
        });
      })
      .catch((err) => {
        responseMsg += "ERROR: USA's data is not inserted<br>";
      });
  } else {
    console.log("URL for USA is not given<br>");
  }
  res.send(responseMsg);
};
