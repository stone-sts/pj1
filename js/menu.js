/** */
let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;

let m = '';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';
// 取得 DOM 的節點
 let menu = document.getElementById('menu');
//
// menu.innerHTML = menuHtml;
// html 寫入節點
let menuData = [
    {
        title: '首頁',
        url: 'index.html'
    },
    {
        title: '關於我們',
        url: 'about.html'
    },
    {
        title: '產品展示',
        url: 'products.html'
    },
    {
        title: '外帶專區',
        url: 'store.html'
    },
    {
        title: '聯絡我們',
        url: 'test.html'
    },
];

//**
menuHtml = menuHtml + `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>`;

//**
menuHtml = '';
for(let row of menuData){
   menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>\n`;

   console.log(menuHtml);
}
menu.innerHTML = menuHtml;//將 HTML 寫入節點
