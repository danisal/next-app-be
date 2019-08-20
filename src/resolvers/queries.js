const { forwardTo } = require('prisma-binding');

const queries = {
    async posts(parent, args, ctx, info) {
        const posts = await ctx.db.query.posts();

        return posts;
    },
};

module.exports = queries;
