
module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "sendmail",
        settings: {
          defaultFrom: "divanshu.garg113@gmail.com",
          defaultReplyTo: "divanshu.garg113@yahoo.com",
          testAddress: "divanshu.garg113@yahoo.com",
        },
      },
    },
    // ...
  });