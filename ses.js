import AWS from"aws-sdk"

const ses = new AWS.SES({
  accessKeyId: 'AKIA3TK3BM7S6WPNC3GJ',
  secretAccessKey: '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',
  region: 'us-east-1'
});
const sentEmail = async () => {
const params = {
  Destination: {
    ToAddresses: ['brunocorrea094@gmail.com']
  },
  Message: {
    Body: {
      Html: {
        Data: '<p>Hello, this is a test email!</p>'
      }
    },
    Subject: {
      Data: 'Test email from AWS SES'
    }
  },
  Source: 'brunocorrea094@gmail.com'
};

 ses.sendEmail(params, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log('Email sent:', data);
});
}
export default sentEmail();