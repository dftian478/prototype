document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.needs-validation');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // 模拟登录请求
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            console.log('登录信息:', {
                email,
                password,
                rememberMe
            });
            
            // 这里可以添加实际的登录逻辑
            alert('登录成功！');
        }
        
        form.classList.add('was-validated');
    });
}); 