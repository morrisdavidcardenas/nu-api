const axios = require('axios');
const to = require('await-to-js').default;

exports.issues = async (req,res,next) => {
  const owner = req.params.owner;
  const repo = req.params.repo;
  const [errIssue, resultIssue] = await to(axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`));
  if (errIssue) return res.status(500).json('I cannot obtain data');
  console.log(resultIssue.data.length);
  res.status(200).json(resultIssue.data);
}
