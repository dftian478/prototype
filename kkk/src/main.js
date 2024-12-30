import { debounce, throttle } from './utils/helpers.js';

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('KKK原型项目已初始化');
    
    // 初始化导航栏响应式处理
    initNavigation();
});

// 初始化导航栏
function initNavigation() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }
} 