// Hàm để lấy tham số từ URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Danh sách sản phẩm
const products = [
    {
        id: 'iphone15',
        name: 'iPhone 15',
        image: 'asset/ip15cyan.jpg',
        screen: '6.1 inch Super Retina XDR',
        chip: 'A16 Bionic',
        camera: '48 MP chính, 12 MP siêu rộng',
        storage: '128GB, 256GB, 512GB',
        battery: 'Thời gian sử dụng lên đến 20 giờ',
        colorOptions: ['cyan', 'yellow','green', 'pink']
    },
    {
        id: 'iPhone15Plus',
        name: 'iPhone 15 Plus',
        image: 'asset/ip15green.jpg',
        screen: '6.7 inch Super Retina XDR',
        chip: 'A16 Bionic',
        camera: '48 MP chính, 12 MP siêu rộng',
        storage: '128GB, 256GB, 512GB',
        battery: 'Thời gian sử dụng lên đến 20 giờ',
        colorOptions: ['green', 'yellow', 'cyan', 'pink']
    },
    {
        id: 'iPhone15Pro',
        name: 'iPhone 15 Pro',
        image: 'asset/ip15silver.jpg',
        screen: '6.1 inch Super Retina XDR',
        chip: 'A17 Bionic',
        camera: '48 MP chính, 12 MP siêu rộng',
        storage: '128GB, 256GB, 512GB',
        battery: 'Thời gian sử dụng lên đến 20 giờ',
        colorOptions: ['silver', 'blue', 'white', 'black']
    },
    {
        id: 'iPhone15ProMax',
        name: 'iPhone 15 Pro Max',
        image: 'asset/ip15white.jpg',
        screen: '6.7 inch Super Retina XDR',
        chip: 'A17 Bionic',
        camera: '48 MP chính, 12 MP siêu rộng',
        storage: '128GB, 256GB, 512GB',
        battery: 'Thời gian sử dụng lên đến 20 giờ',
        colorOptions: [' black', 'blue', ' white', 'silver']
    }
];

// Lấy tên sản phẩm từ URL
const product = getQueryParameter('product');
const productDetail = document.querySelector('.productDetail');

const selectedProduct = products.find(p => p.id.toLowerCase() === product.toLowerCase());

if (selectedProduct) {
    const { name, image, screen, chip, camera, storage, battery, colorOptions } = selectedProduct;
    document.title = `Chi tiết ${name}`;
    productDetail.innerHTML = `
        <h2>${name}</h2>
        <div class="detail-container">
            <div class="product-image">
                <img src="${image}" alt="${name}" id="main-image">
            </div>
            <div class="product-info">
                <h3>Thông tin sản phẩm</h3>
                <p>Màn hình: ${screen}</p>
                <p>Chip: ${chip}</p>
                <p>Camera: ${camera}</p>
                <p>Bộ nhớ: ${storage}</p>
                <p>Pin: ${battery}</p>
                <h4>Chọn màu:</h4>
                <div class="color-options">
                    ${colorOptions.map(color => `<div class="color-option" style="background-color: ${color};" onclick="changeColor('${color}')"></div>`).join('')}
                </div>
                <a href="#" class="buy-btn">Mua ngay</a>
            </div>
        </div>
    `;
}

// Hàm thay đổi màu sản phẩm
function changeColor(color) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = `asset/ip15${color}.jpg`; // Giả sử bạn có các hình ảnh tương ứng với màu
}

