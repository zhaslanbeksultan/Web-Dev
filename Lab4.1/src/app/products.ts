export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple 20W USB-C Power Adapter белый',
    price: 3851,
    description: 'тип: сетевая зарядка\n' +
        'количество подключаемых устройств: 1\n' +
        'быстрая зарядка: Да\n' +
        'разъем подключения: USB Type-C',
    rating: 4.4,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 294936,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128.0 ГБ\n' +
        'емкость аккумулятора: 3095.0 мАч',
    rating: 4.5,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 72202,
    description: 'технология NFC: Нет\n' +
        'цвет: черный\n' +
        'тип экрана: IPS, сенсорный\n' +
        'диагональ: 6.79 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный MediaTek Helio G88\n' +
        'объем встроенной памяти: 256.0 ГБ\n' +
        'емкость аккумулятора: 5000.0 мАч',
    rating: 4.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 328177,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128.0 ГБ\n' +
        'емкость аккумулятора: 3279.0 мАч',
    rating: 4.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 623632,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 6-ядерный Apple A17 Pro\n' +
        'объем встроенной памяти: 256.0 ГБ\n' +
        'емкость аккумулятора: 4422.0 мАч',
    rating: 4.8,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  },
  {
    id: 6,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
    price: 8119 ,
    description: 'тип: сетевая зарядка\n' +
        'количество подключаемых устройств: 1\n' +
        'быстрая зарядка: Да\n' +
        'разъем подключения: USB Type-C',
    rating: 3.8,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000'
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 90239 ,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: Super AMOLED, сенсорный\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный MediaTek Helio G99\n' +
        'объем встроенной памяти: 128.0 ГБ\n' +
        'емкость аккумулятора: 5000.0 мАч',
    rating: 4.3,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000'
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    price: 374411,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 128.0 ГБ\n' +
        'емкость аккумулятора: 3279.0 мАч',
    rating: 4.5,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 287794,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128.0 ГБ\n' +
        'емкость аккумулятора: 3095.0 мАч',
    rating: 4.7,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
  },
  {
    id: 10,
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    price: 140 ,
    description: 'тип: спортивный\n' +
        'совместимый бренд: Apple\n' +
        'материал: резина, ,силикон\n' +
        'совместимые модели: iPhone 11',
    rating: 4.8,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000'
  },
];
