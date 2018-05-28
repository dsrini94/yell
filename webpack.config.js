module.exports = {
   entry: __dirname+'/main.js',

   output: {
      path:__dirname+'/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8181
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader!css-loader'
         },
         {
         	test: /\.(jpe?g|gif|png)$/,
         	loader: "file-loader?emitFile=false&name=./client/assets/images/[name].[ext]"
         }
      ]
   }
}
