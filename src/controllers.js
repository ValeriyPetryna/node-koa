const Category = require('./models/category')

exports.mainPage = async (ctx) => {
    await ctx.render('base', {
        title: 'Main page'
    });
};

exports.searchPage = async (ctx) => {
    await ctx.render('search', {});
};

exports.handlePost = async (ctx) => {

    const body = ctx.request.body;

    const cat = new Category({
        name: body.category,
    });
    
    console.log(body)
    console.log(cat)
    ctx.body = {
        success: true,
    };
    await ctx.render('base', {
        title: body.category
    });

};