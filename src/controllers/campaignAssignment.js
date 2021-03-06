var CampaignAssignment = require("./../models/campaignAssignment");

module.exports = {
  list: function(query) {
    return new Promise(function(resolve, reject) {
      CampaignAssignment.find(query)
      .then(function(res) {
        if (res) console.log({ query }, "Lists CampaignAssignments");
        return resolve(res);
      })
      .catch(function(error) {
        return reject(error);
      });
    });
  },  
  create: function(query) {
    return new Promise(function(resolve, reject) {
      CampaignAssignment.create(query)
      .then(function(res) {
        if (res) console.log({ query }, "Creates CampaignAssignment");
        return resolve(res);
      })
      .catch(function(error) {
        return reject(error);
      });
    });
  }
}
