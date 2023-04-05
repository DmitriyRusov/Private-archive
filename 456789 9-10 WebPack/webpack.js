1. создаем в корне проекта папку src.
2. переносим весь свой проект (за исключением readme и nojekill) в папку src.
3. в свою папку pages перемещаем файл index(scripts).js (ваш основной файл скриптов, в который все скрипты импортируются).
4. устанавливаем node.js с официального сайта https://nodejs.org/en/download
5. в терминале проверяем, что node установился командой
node -v
если в ответе версия, то все ок.
6. создаем package.json командой в терминале, находясь в папке проекта (это важно)
npm init --yes
7. забиваем на реппозиторий яндекса, работаем со стандартным (никакие логины пароли не нужны)
8. Устанавливаем вебпак так же находясь в корне проекта
npm i webpack --save-dev
9. Проверьте, что в папке с проектом появились папка node_modules и файлы package.json и package-lock.json (я видела это в ide, и пользовалась терминалом ide)
10. Установим интерфейс для работы с вебпаком
npm i webpack-cli --save-dev
11. Открываем файл package.json и проверяем, что в самом низу в разделе devDependencies появились 2 надписи
"webpack": "^5.76.3",
"webpack-cli": "^5.0.1",
12. так же в этом файле есть раздел scripts, там по-умолчанию один скрипт test. он не нужен. Вместо него пишем
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve"
  },
2 скрипт нужен для запуска лив сервера, который позже установим.
13. создаем в корне проекта файл webpack.config.js . Вот полный код этого файла с настройками всех плагинов
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {main: './src/pages/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: "./src/assets/images/favicon.svg"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
};
в плагинах есть строка про favicon. если у вас его нет, то удалите ее. Если есть, то актуализируйте путь до файла. Так же над favicon есть строка template, это должен быть путь к вашему index.html. Так же нужно указать свой путь до основного файла скриптов в module.exports в строке entry: {main: './src/pages/index.js'}.
14. устанавливаем локальный сервер
npm i webpack-dev-server --save-dev
15. устанавливаем Бабель, чтоб сборка работала в старых браузерах
npm i @babel/core --save-dev
16. устанавливаем шаблоны для бабеля
npm i @babel/preset-env --save-dev
17. еще одна установка для универсальности нашей сборки
npm i core-js --save
18. чтоб бабель работал с вебпаком еще 1 установка
npm i babel-loader --save-dev
19. в корне проекта создаем файл babel.config.js в него пишем
const presets = [
  ['@babel/preset-env', { // какой пресет использовать
    targets: { // какие версии браузеров поддерживать
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    // использовать полифиллы для браузеров из свойства target
    // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };
20. для подключения скриптов в html еще один плагин (настройки уже вписали)
npm i html-webpack-plugin --save-dev
21. уставка плагина, который чистит папу со сборкой перед новой сборкой
npm i clean-webpack-plugin --save-dev

22. настраиваем все картинки в html. Во все теги img добавляем <%=require()%>. Должно получиться типа
<img src="<%=require('./images/logo.png')%>" alt="Логотип">

// Если в js есть ссылки на картинки, то их нужно импортировать,
// вебпак добавит в переменные правильные пути
const jordanImage = new URL('./images/jordan.jpg', import.meta.url);
const jamesImage = new URL('./images/james.jpg', import.meta.url);
const bryantImage = new URL('./images/bryant.jpg', import.meta.url)

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
];

23. теперь плагины для работы с css
npm i css-loader --save-dev
npm i mini-css-extract-plugin --save-dev
24. Чтоб сборщик нашел наш файл стилей, в основном файле скриптов (он же точка входа) index(scripts).js в самый верх добавляем импорт файла стилей типа
import './styles/index.css';
проверьте, что так указан для вас верный путь.
25. установка плагинов для сжатия и универсальности файла стилей
npm i postcss-loader --save-dev
npm i autoprefixer --save-dev
npm i cssnano --save-dev
26.в корне проекта создем файл postcss.config.js в него пишем
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};
27. Удаляем все теги link (в head)  и script (внизу страницы) из html.
выполняем сборку проекта
npm run build
28. запускаем специальный ливсервер и проверяем свой проект.
npm run dev
29. Если ничего не пропустили и нигде не накосячили с путями, проект должен открыться в браузере в рабочем состоянии.
30. в корне проекта создаем файл .gitignore внутри пишем
node_modules
dist
чтоб наш гит не хватал папки, которые не нужны в удаленке