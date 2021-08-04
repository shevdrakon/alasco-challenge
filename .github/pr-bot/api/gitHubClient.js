const github = require("@actions/github");

const createGitHubClient = (githubToken, ctx) => {
  const client = github.getOctokit(githubToken);

  const repo = ctx.payload.repository.name;
  const owner = ctx.payload.repository.owner.login;
  const commentId = ctx.payload.comment.id;

  const reactions = {
    createForIssueComment: (content) => {
      return client.rest.reactions.createForIssueComment({
        owner,
        repo,
        comment_id: commentId,
        content,
      });
    },

    deleteForIssueComment: (reactionId) => {
      return client.rest.reactions.deleteForIssueComment({
        owner,
        repo,
        comment_id: commentId,
        reaction_id: reactionId
      });
    }
  };

  const issues = {
    createComment: (body) => {
      return client.rest.issues.createComment({
        owner,
        repo,
        issue_number: ctx.payload.issue.number,
        body
      });
    }
  };

  return {
    reactions,
    issues,
  };
};

module.exports = createGitHubClient;
