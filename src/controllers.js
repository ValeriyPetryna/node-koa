exports.mainPage = async (ctx) => {
    await ctx.render('base', {
        title: 'Main page'
    });
};