const mutations = {
    async createPost(parent, args, ctx, info) {
        // TODO: Check if user is logged in
        const post = await ctx.db.mutation.createPost(
            {
                data: {
                    ...args,
                },
            },
            info,
        );

        return post;
    },
};

module.exports = mutations;
