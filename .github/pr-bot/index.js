const github = require("@actions/github");
const {Client} = require("@notionhq/client");

const commands = require("./commands");
const invalidCommand = require("./commands/invalidCommand");

const createGitHubClient = require("./api/gitHubClient");
const utils = require("./utils");

const createContext = () => {
  const githubToken = utils.getEnvValue("github-token");
  const notionToken = utils.getEnvValue("notion-token");

  return {
    ...github.context,
    api: {
      gitHub: createGitHubClient(githubToken, github.context),
      notion: new Client({auth: notionToken}),
    },
  };
};

const ctx = createContext();

// console.log(JSON.stringify(ctx, null, 2));

const executedCommands = commands
  .filter(cmd => cmd.ableToProcess(ctx))
  .map(cmd => cmd(ctx));

if (!executedCommands.length) invalidCommand(ctx);
