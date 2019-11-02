const CopyPlugin = require("copy-webpack-plugin"); // eslint-disable-line @typescript-eslint/no-var-requires

const CLIENT_INPUT_DIR = `${__dirname}/src/client/`;
const CLIENT_OUTPUT_DIR = `${__dirname}/dist/client/`;

module.exports = {
  devtool: "source-map", // enable sourcemaps for debugging webpack's output
  entry: `${CLIENT_INPUT_DIR}index.tsx`,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
      },
      {
        test: /\.(css|less)$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  output: {
    path: CLIENT_OUTPUT_DIR,
    filename: "bundle.js",
  },
  plugins: [
    new CopyPlugin([
      { context: CLIENT_INPUT_DIR, from: "**/*.html" },
    ]),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less"],
  },
};
