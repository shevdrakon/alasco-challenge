const toNotionPageCommand = async (ctx) => {
  const eyesReaction = await ctx.api.gitHub.reactions.createForIssueComment("eyes");

  await Promise.all([
    ctx.api.gitHub.reactions.deleteForIssueComment(eyesReaction.data.id),
    ctx.api.gitHub.reactions.createForIssueComment("+1"),
  ]);
};

toNotionPageCommand.ableToProcess = (ctx) => {
  if (ctx.eventName !== "issue_comment") return false;

  const comment = ctx.payload.comment.body;
  return comment.startsWith(`@alasco-bot to-notion`);
};

module.exports = toNotionPageCommand;
