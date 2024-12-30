import { debounce } from '../../utils/helpers.js';

class NetworkRouteForm {
    constructor() {
        this.form = document.getElementById('routeForm');
        this.portMappingContainer = document.querySelector('.port-mapping-container');
        this.addPortButton = document.getElementById('addPort');
        this.cancelButton = document.getElementById('cancelBtn');
        this.yamlButton = document.getElementById('yamlBtn');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // 表单提交
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // 添加端口映射
        this.addPortButton.addEventListener('click', this.addPortMapping.bind(this));
        
        // 删除端口映射
        this.portMappingContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-port')) {
                this.removePortMapping(e);
            }
        });

        // 取消按钮
        this.cancelButton.addEventListener('click', () => {
            if (confirm('确定要取消创建吗？')) {
                window.history.back();
            }
        });

        // YAML按钮
        this.yamlButton.addEventListener('click', this.toggleYAMLView.bind(this));

        // 监听类型变化
        document.querySelectorAll('input[name="routeType"]').forEach(radio => {
            radio.addEventListener('change', this.handleRouteTypeChange.bind(this));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // 收集表单数据
        const formData = {
            name: document.getElementById('routeName').value,
            displayName: document.getElementById('displayName').value,
            routeType: document.querySelector('input[name="routeType"]:checked').id,
            virtualIP: document.getElementById('virtualIP').checked,
            targetType: document.querySelector('input[name="targetType"]:checked').id,
            componentName: document.getElementById('componentName').value,
            portMappings: this.collectPortMappings(),
            sessionAffinity: document.getElementById('sessionAffinity').checked
        };

        console.log('表单数据：', formData);
        // TODO: 发送数据到服务器
    }

    collectPortMappings() {
        const mappings = [];
        const rows = this.portMappingContainer.querySelectorAll('.port-mapping-row');
        
        rows.forEach(row => {
            mappings.push({
                protocol: row.querySelector('select').value,
                servicePort: row.querySelector('input[type="number"]:nth-of-type(1)').value,
                containerPort: row.querySelector('input[type="number"]:nth-of-type(2)').value,
                portName: row.querySelector('input[type="text"]').value
            });
        });

        return mappings;
    }

    addPortMapping() {
        const newRow = document.createElement('div');
        newRow.className = 'port-mapping-row';
        newRow.innerHTML = `
            <div class="row g-3 align-items-center mb-2">
                <div class="col">
                    <label class="form-label">协议</label>
                    <select class="form-select">
                        <option value="TCP" selected>TCP</option>
                        <option value="UDP">UDP</option>
                    </select>
                </div>
                <div class="col">
                    <label class="form-label required">服务端口</label>
                    <input type="number" class="form-control" required>
                </div>
                <div class="col">
                    <label class="form-label required">容器端口</label>
                    <input type="number" class="form-control" required>
                </div>
                <div class="col">
                    <label class="form-label">服务端口名称</label>
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <button type="button" class="btn btn-outline-danger remove-port">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.portMappingContainer.appendChild(newRow);
    }

    removePortMapping(e) {
        const row = e.target.closest('.port-mapping-row');
        if (this.portMappingContainer.querySelectorAll('.port-mapping-row').length > 1) {
            row.remove();
        } else {
            alert('至少需要保留一个端口映射');
        }
    }

    handleRouteTypeChange(e) {
        const type = e.target.id;
        // 根据类型更新表单显示
        console.log('路由类型变更为：', type);
        // TODO: 根据类型调整表单字段的显示/隐藏
    }

    toggleYAMLView() {
        // TODO: 实现YAML视图切换
        console.log('切换到YAML视图');
    }
}

// 初始化表单
document.addEventListener('DOMContentLoaded', () => {
    new NetworkRouteForm();
}); 