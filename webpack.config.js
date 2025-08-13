import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  return {
  mode: argv.mode || 'production',
  entry: './src/figmaCodeLayers.ts',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? 'figmaCodeLayers.bundle.dev.js' : 'figmaCodeLayers.bundle.js',
    library: {
      type: 'module',
    },
    environment: {
      module: true,
    },
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react/jsx-runtime': 'react/jsx-runtime',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'primitives': path.resolve(__dirname, 'src/ui/primitives'),
      'icons': path.resolve(__dirname, 'src/ui/icons'),
      'utils': path.resolve(__dirname, 'src/ui/utils'),
      'hooks': path.resolve(__dirname, 'src/ui/hooks'),
      'layout': path.resolve(__dirname, 'src/ui/layout'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Skip type checking for faster builds
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  optimization: {
    minimize: !isDevelopment,
  },
  devtool: isDevelopment ? 'source-map' : false,
};
};
