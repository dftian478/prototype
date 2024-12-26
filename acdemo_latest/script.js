// 插件数据
const plugins = {
    core: [
        { 
            id: 'core_runtime', 
            name: '核心运行时', 
            version: '4.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '提供基础运行环境和资源调度管理'
        },
        { 
            id: 'core_service', 
            name: '核心服务框架', 
            version: '4.0.0', 
            arch: ['x86', 'arm', 'hybrid'],
            category: 'Aligned Plugins',
            description: '提供服务注册、发现和生命周期管理'
        }
    ],
    extra: [
        { 
            id: 'auth_center', 
            name: '统一认证中心', 
            version: '2.1.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '集中式身份认证和令牌管理服务'
        },
        { 
            id: 'rbac_service', 
            name: '权限管理服务', 
            version: '1.5.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '基于角色的细粒度权限控制系统'
        },
        { 
            id: 'vm_monitor', 
            name: '虚拟机监控器', 
            version: '3.0.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: '虚拟机性能指标采集和状态监控'
        },
        { 
            id: 'resource_analyzer', 
            name: '资源分析器', 
            version: '2.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '系统资源使用分析和优化建议'
        },
        { 
            id: 'container_manager', 
            name: '容器管理器', 
            version: '4.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '容器生命周期管理和资源隔离控制'
        },
        { 
            id: 'orchestration_service', 
            name: '编排服务', 
            version: '3.5.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '容器集群编排和调度策略管理'
        },
        { 
            id: 'prometheus_agent', 
            name: 'Prometheus 代理', 
            version: '2.3.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: '采集和暴露符合Prometheus规范的监控指标'
        },
        { 
            id: 'container_exporter', 
            name: '容器指标导出器', 
            version: '1.8.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '容器运行时性能指标收集和导出'
        },
        { 
            id: 'pipeline_engine', 
            name: '流水线引擎', 
            version: '3.2.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: '自动化构建和部署流水线执行引擎'
        },
        { 
            id: 'artifact_manager', 
            name: '制品管理器', 
            version: '2.4.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '构建产物管理和版本控制服务'
        },
        { 
            id: 'code_scanner', 
            name: '代码扫描器', 
            version: '2.0.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: '代码质量扫描和安全漏洞检测'
        },
        { 
            id: 'quality_analyzer', 
            name: '质量分析器', 
            version: '1.5.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '代码质量指标分析和评估报告'
        },
        { 
            id: 'service_registry', 
            name: '服务注册中心', 
            version: '4.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '分布式服务注册和服务健康检查'
        },
        { 
            id: 'config_center', 
            name: '配置中心', 
            version: '3.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '集中式配置管理和动态配置下发'
        },
        { 
            id: 'api_gateway', 
            name: 'API网关服务', 
            version: '3.5.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: 'API路由转发和请求限流控制'
        },
        { 
            id: 'traffic_manager', 
            name: '流量管理器', 
            version: '2.0.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '服务流量治理和负载均衡控制'
        },
        { 
            id: 'data_collector', 
            name: '数据采集器', 
            version: '2.5.0', 
            arch: ['x86', 'arm'],
            category: 'Aligned Plugins',
            description: '多源异构数据采集和预处理'
        },
        { 
            id: 'etl_service', 
            name: 'ETL服务', 
            version: '2.0.0', 
            arch: ['x86'],
            category: 'Agnostic Plugins',
            description: '数据清洗转换和加载处理服务'
        }
    ]
};

// 功能分类
const categories = {
    all: '全部产品',
    basic: '基础平台',
    container: '容器平台',
    devops: 'DevOps',
    microservice: '微服务',
    data: '数据服务'
};

// 添加功能与插件的映射关系
const featurePluginMapping = {
    // 核心功能
    coreFeature: {
        name: '核心功能',
        description: '提供系统基础运行环境和核心服务支持',
        category: 'basic',
        plugins: ['core_runtime', 'core_service'],
        isCore: true
    },
    // 基础平台
    basicAuth: {
        name: '认证授权',
        description: '提供统一的身份认证、权限管理和访问控制能力',
        category: 'basic',
        plugins: ['auth_center', 'rbac_service']
    },
    basicMonitor: {
        name: 'VM监控',
        description: '提供虚拟机资源使用监控和性能分析能力',
        category: 'basic',
        plugins: ['vm_monitor', 'resource_analyzer']
    },
    // 容器平台
    containerOrchestration: {
        name: '容器编排',
        description: '提供容器集群管理、调度和编排能力',
        category: 'container',
        plugins: ['container_manager', 'orchestration_service']
    },
    containerMonitor: {
        name: '容器监控',
        description: '提供容器运行状态监控和性能指标采集能力',
        category: 'container',
        plugins: ['prometheus_agent', 'container_exporter']
    },
    // DevOps
    cicd: {
        name: '持续集成',
        description: '提供自动化构建、测试和部署流水线能力',
        category: 'devops',
        plugins: ['pipeline_engine', 'artifact_manager']
    },
    codeAnalysis: {
        name: '代码分析',
        description: '提供代码质量检查、漏洞扫描和度量分析���力',
        category: 'devops',
        plugins: ['code_scanner', 'quality_analyzer']
    },
    // 微服务
    serviceRegistry: {
        name: '服务注册',
        description: '提供服务注册、发现和配置管理能力',
        category: 'microservice',
        plugins: ['service_registry', 'config_center']
    },
    apiGateway: {
        name: 'API网关',
        description: '提供API路由、认证、限流和监控能力',
        category: 'microservice',
        plugins: ['api_gateway', 'traffic_manager']
    },
    // 数据服务
    dataProcessing: {
        name: '数据处理',
        description: '提供数据采集、清洗、转换和存储能力',
        category: 'data',
        plugins: ['data_collector', 'etl_service']
    }
};

// 生成字母索引
const generateAlphabetIndex = () => {
    const features = Object.values(featurePluginMapping);
    const usedLetters = new Set(features.map(f => f.name[0].toUpperCase()));
    return Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(letter => ({
        letter,
        active: usedLetters.has(letter)
    }));
};

// 在 plugins 对象后添加一个状态管理对象
const state = {
    selectedPlugins: new Set(),
    isGenerating: false,
    packageGenerated: false
};

let currentVersion = '4.0.0';
let currentArch = 'x86';
let currentPackageType = 'core';

// 页面加载完成后初始化
$(document).ready(() => {
    // 默认选中4.0.0版本
    $('.version-item[data-version="4.0.0"]').addClass('active');
    currentVersion = '4.0.0';
    currentPackageType = 'core'; // 设置默认包类型为核心包
    
    // 先隐藏功能选择区域，因为默认是部署模式和核心包
    $('.features-selector').addClass('d-none');
    
    // 初始化其他UI和事件
    initializeUI();
    bindEvents();
    renderPlugins();
    
    // 初始化生成记录区域
    initializeGenerationRecords();
    
    // 绑定生成按钮事件
    $(document).on('click', '#generateBtn', handleGenerate);
    
    // 移除原有的下载区域
    $('.download-section').remove();
    
    // 触发一次包类型变化处理，确保初始状态正确
    handlePackageTypeChange();
});

// 初始化UI
function initializeUI() {
    // 添加安装方式选择区域
    const deploymentSection = `
        <div class="deployment-type-section mb-4">
            <h5 class="section-title-l1">
                <i class="fas fa-tools me-2"></i>安装方式
            </h5>
            <div class="btn-group deployment-type-buttons" role="group">
                <button type="button" class="btn btn-outline-primary active" data-type="deploy">
                    <i class="fas fa-download me-2"></i>部署
                </button>
                <button type="button" class="btn btn-outline-primary" data-type="upgrade">
                    <i class="fas fa-arrow-up me-2"></i>升级
                </button>
            </div>
        </div>
    `;
    
    // 将安装方式选择区域插入到包类型选择之前
    $('.package-type-selector').before(deploymentSection);
    
    // 初始化其他 UI
    $('.version-item[data-version="4.0.0"]').addClass('active');
    currentVersion = '4.0.0';
    updateFeaturesSection();
    
    // 默认选中核心包按钮
    $('.package-type-selector .btn[data-type="core"]').addClass('active');
    
    // 默认选中x86架构
    $('.architecture-selector .btn[data-arch="x86"]').addClass('active');
    currentArch = 'x86';
    
    // 初始化时禁用所有功能选择
    disableFeatureSelection();
    
    // 初始化时隐藏升级包按钮
    $('.package-type-selector .btn[data-type="increment"]').addClass('d-none');
    
    initializeIncrementUI();
    
    // 绑定安装方式切换事件
    bindDeploymentTypeEvents();
    
    // 添加初始包类型描述
    updatePackageTypeDescription('core');

    // 绑定版本切换事件
    bindVersionChangeEvents();
}

// 添加版本切换事件处理
function bindVersionChangeEvents() {
    $('.version-item').click(function(e) {
        e.preventDefault();
        if ($(this).css('cursor') === 'not-allowed') {
            return;
        }
        
        $('.version-item').removeClass('active');
        $(this).addClass('active');
        currentVersion = $(this).data('version');
        
        // 检查当前是否在升级模式
        const isUpgradeMode = $('.deployment-type-buttons .btn[data-type="upgrade"]').hasClass('active');
        if (isUpgradeMode) {
            updateUpgradeUI();
        }
        
        renderPlugins();
    });
}

// 修改安装方式切换事件处理
function bindDeploymentTypeEvents() {
    $('.deployment-type-buttons .btn').click(function() {
        const type = $(this).data('type');
        
        // 更新按钮状态
        $('.deployment-type-buttons .btn').removeClass('active');
        $(this).addClass('active');
        
        if (type === 'deploy') {
            // 部署模式：根据包类型决定是否显示功能选择区域
            if (currentPackageType === 'core' || currentPackageType === 'full') {
                $('.features-selector').addClass('d-none');
            } else {
                $('.features-selector').removeClass('d-none');
            }
            $('.package-type-selector').removeClass('d-none');
            $('.architecture-selector').removeClass('d-none');
            $('.package-type-selector .btn').removeClass('d-none');
            $('.package-type-selector .btn[data-type="increment"]').addClass('d-none');
            // 默认选中核心包
            $('.package-type-selector .btn[data-type="core"]').click();
            
            // 隐藏升级包配置区域
            $('.increment-upload').addClass('d-none');
            
            // 显示打包记录区域
            $('.generation-records-section').removeClass('d-none');
        } else {
            // 升级模式：隐藏包类型、架构选择和功能选择
            $('.package-type-selector, .architecture-selector, .features-selector').addClass('d-none');
            // 显示升级包配置区域
            $('.increment-upload').removeClass('d-none');
            
            // 根据当前版本更新升级UI
            updateUpgradeUI();
        }
    });
}

// 修改更新升级UI函数
function updateUpgradeUI() {
    const incrementUpload = $('.increment-upload');
    const uploadSection = incrementUpload.find('.upload-section');
    const quickUpgradeSection = incrementUpload.find('.quick-upgrade-section');
    const recordsSection = $('.generation-records-section');
    const packageActions = $('.package-actions');
    
    // 根据版本显示/隐藏不同部分
    if (currentVersion === '4.0.0') {
        // 4.0.0 版本只显示快速升级
        uploadSection.addClass('d-none');
        quickUpgradeSection.removeClass('d-none');
        // 隐藏打包记录区域和生成按钮
        recordsSection.addClass('d-none');
        packageActions.addClass('d-none');
    } else if (currentVersion === '4.0.1') {
        // 4.0.1 版本显示所有功能
        quickUpgradeSection.removeClass('d-none');
        
        // 添加文件上传区域
        incrementUpload.html(`
            <h5 class="section-title-l2">
                <i class="fas fa-upload me-2"></i>升级包配置
            </h5>
            <div class="upgrade-package-container">
                <div class="card">
                    <div class="card-body">
                        <div class="quick-upgrade-section mb-4">
                            <div class="d-flex align-items-center gap-3">
                                <span class="text-muted">快速升级：</span>
                                <div class="quick-version-buttons d-flex flex-wrap gap-2">
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                            data-version="3.18" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                        从 3.18 标准版升级
                                    </button>
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                            data-version="3.16" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                        从 3.16 标准版升级
                                    </button>
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                            data-version="3.16 RE" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                        从 3.16 RE 版本升级
                                    </button>
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                            data-version="3.18 Core" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                        从 3.18 Core 版本升级
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="upload-section mt-4">
                            <div class="section-title-l3 mb-3">上传元数据文件</div>
                            <div class="upload-area">
                                <input type="file" id="configFile" class="form-control" accept=".json,.xml,.yaml,.yml">
                                <small class="text-muted d-block mt-2">请上传配置文件以生成升级包</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        // 显示打包记录区域，但清空记录
        recordsSection.removeClass('d-none');
        $('.generation-records').empty().html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>暂无打包记录</p>
            </div>
        `);
        
        // 显示但禁用生成按钮
        packageActions
            .removeClass('d-none')
            .find('#generateBtn')
            .removeClass('d-none')
            .prop('disabled', true);
            
        // 绑定文件上传事件
        $('#configFile').on('change', function() {
            const file = this.files[0];
            if (file) {
                // 启用生成按钮
                $('#generateBtn').prop('disabled', false);
            } else {
                // 禁用生成按钮
                $('#generateBtn').prop('disabled', true);
            }
        });
    }
}

// 修改初始化升级包UI函数
function initializeIncrementUI() {
    const incrementUpload = $('.increment-upload');
    incrementUpload.html(`
        <h5 class="section-title-l2">
            <i class="fas fa-upload me-2"></i>升级包配置
        </h5>
        <div class="upgrade-package-container">
            <div class="card">
                <div class="card-body">
                    <div class="quick-upgrade-section mb-4">
                        <div class="d-flex align-items-center gap-3">
                            <span class="text-muted">快速升级：</span>
                            <div class="quick-version-buttons d-flex flex-wrap gap-2">
                                <button type="button" class="btn btn-outline-primary btn-sm" 
                                        data-version="3.18" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                    从 3.18 标准版升级
                                </button>
                                <button type="button" class="btn btn-outline-primary btn-sm" 
                                        data-version="3.16" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                    从 3.16 标准版升级
                                </button>
                                <button type="button" class="btn btn-outline-primary btn-sm" 
                                        data-version="3.16 RE" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                    从 3.16 RE 版本升级
                                </button>
                                <button type="button" class="btn btn-outline-primary btn-sm" 
                                        data-version="3.18 Core" data-bs-toggle="modal" data-bs-target="#upgradeConfirmModal">
                                    从 3.18 Core 版本升级
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 优化后的确认弹框 -->
        <div class="modal fade" id="upgradeConfirmModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg"> <!-- 改用 modal-lg 类 -->
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">选择架构并下载</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="upgrade-modal-container">
                            <!-- 左侧架构选择区域 -->
                            <div class="arch-selector">
                                <div class="arch-options">
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchX86" value="x86" checked>
                                        <label class="btn arch-btn" for="upgradeArchX86">x86</label>
                                    </div>
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchArm" value="arm">
                                        <label class="btn arch-btn" for="upgradeArchArm">ARM</label>
                                    </div>
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchHybrid" value="hybrid">
                                        <label class="btn arch-btn" for="upgradeArchHybrid">异构</label>
                                    </div>
                                </div>
                            </div>

                            <!-- 右侧下载区域 -->
                            <div class="download-info-panel">
                                <div class="download-sections-container">
                                    <!-- 安装包下载区域 -->
                                    <div class="download-section">
                                        <div class="section-title">
                                            <small class="text-muted">安装包</small>
                                        </div>
                                        <div class="download-options">
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">浏览器下载</small>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-sm download-btn">
                                                    <i class="fas fa-download me-1"></i>直接下载
                                                </button>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">第三方工具下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageUrl">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageUrl">
                                                    https://download.example.com/packages/v4.0.0/x86/package.tar.gz
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">命令行下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageCmd">
                                                    wget https://download.example.com/packages/v4.0.0/x86/package.tar.gz
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">MD5 校验值</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageMd5">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageMd5">
                                                    e9c1q52p3m4k5n6b7v8c9x0z1a2s3d4f5g6h7j8k9l0
                                                </div>
                                                <div class="command-example">
                                                    <div class="command-header">
                                                        <small class="text-muted"># 下载完成后验证</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageVerifyCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                    <code class="command-code" id="packageVerifyCmd">echo "e9c1q52p3m4k5n6b7v8c9x0z1a2s3d4f5g6h7j8k9l0 package.tar.gz" | md5sum -c</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 签名文件下载区域 -->
                                    <div class="download-section">
                                        <div class="section-title">
                                            <small class="text-muted">签名文件</small>
                                        </div>
                                        <div class="download-options">
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">浏览器下载</small>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-sm download-btn">
                                                    <i class="fas fa-download me-1"></i>直接下载
                                                </button>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">第三方工具下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signUrl">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signUrl">
                                                    https://download.example.com/packages/v4.0.0/x86/package.tar.gz.sign
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">命令行下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signCmd">
                                                    wget https://download.example.com/packages/v4.0.0/x86/package.tar.gz.sign
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">MD5 校验值</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signMd5">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signMd5">
                                                    a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2
                                                </div>
                                                <div class="command-example">
                                                    <div class="command-header">
                                                        <small class="text-muted"># 下载完成后验证</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signVerifyCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                    <code class="command-code" id="signVerifyCmd">echo "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2 package.tar.gz.sign" | md5sum -c</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    `);

    // 绑定架构选择变化事件
    $('#upgradeConfirmModal input[name="upgradeArch"]').change(function() {
        const selectedArch = $(this).val();
        updateDownloadInfo(selectedArch);
    });

    // 初始化时更新下载信息（因为默认选中x86）
    updateDownloadInfo('x86');

    // 绑定架构选择变化事件
    $('#upgradeConfirmModal').on('shown.bs.modal', function() {
        // 确保默认选中x86
        $('#upgradeArchX86').prop('checked', true);
        // 初始更新下载信息
        updateDownloadInfo('x86');
    });
}

// 添加更新下载信息的函数
function updateDownloadInfo(arch) {
    // 生成对应架构的下载链接
    const baseUrl = `https://download.example.com/packages/v4.0.0/${arch}`;
    const packageUrl = `${baseUrl}/package.tar.gz`;
    const signUrl = `${baseUrl}/package.tar.gz.sign`;
    
    // 更新安装包下载链接
    $('#packageUrl').text(packageUrl);
    $('#packageCmd').text(`wget ${packageUrl}`);
    
    // 更新签名文件下载链接
    $('#signUrl').text(signUrl);
    $('#signCmd').text(`wget ${signUrl}`);
    
    // 更新MD5值(这里使用示例值)
    const packageMd5 = generateRandomHash();
    const signMd5 = generateRandomHash();
    
    $('#packageMd5').text(packageMd5);
    $('#signMd5').text(signMd5);
    
    // 更新验证命令示例
    const packageVerifyCmd = `echo "${packageMd5} package.tar.gz" | md5sum -c`;
    const signVerifyCmd = `echo "${signMd5} package.tar.gz.sign" | md5sum -c`;
    
    $('#packageMd5').closest('.download-option').find('.command-example small:last').text(packageVerifyCmd);
    $('#signMd5').closest('.download-option').find('.command-example small:last').text(signVerifyCmd);
}

    // 修改确认按钮点击事件
    $('#confirmUpgradeBtn').click(function() {
        const modal = $('#upgradeConfirmModal');
        const selectedArch = modal.find('input[name="upgradeArch"]:checked').val();
        
        if (!selectedArch) {
            modal.find('.invalid-feedback').show();
            return;
        }
        
        // 隐藏弹框
        modal.modal('hide');
    });

    // 修改弹框相关的样式
    const modalStyle = `
        <style>
            .arch-selection {
                padding: 1.5rem;
                border-radius: 0.5rem;
                background-color: #f8f9fa;
            }
            
            .arch-selection-header {
                margin-bottom: 1.25rem;
            }
            
            .arch-selection-title {
                display: block;
                font-size: 1.1rem;
                font-weight: 500;
                color: #2c3e50;
                margin-bottom: 0.5rem;
            }
            
            .arch-selection-desc {
                display: block;
                font-size: 0.9rem;
                color: #6c757d;
            }
            
            .arch-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .arch-option-item {
                position: relative;
                border: 1px solid #dee2e6;
                border-radius: 0.5rem;
                background-color: white;
                transition: all 0.2s ease;
            }
            
            .arch-option-item:hover {
                border-color: #0d6efd;
                box-shadow: 0 2px 4px rgba(13, 110, 253, 0.1);
            }
            
            .arch-option-item input {
                position: absolute;
                left: 1rem;
                top: 50%;
                transform: translateY(-50%);
                margin: 0;
            }
            
            .arch-option-item label {
                display: flex;
                align-items: center;
                padding: 1rem 1rem 1rem 3rem;
                margin: 0;
                width: 100%;
                cursor: pointer;
            }
            
            .arch-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.5rem;
                height: 2.5rem;
                background-color: #f8f9fa;
                border-radius: 0.5rem;
                margin-right: 1rem;
                overflow: hidden;
                transition: all 0.2s ease;
            }
            
            .arch-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: transform 0.2s ease;
            }
            
            .arch-option-item input:checked + label .arch-icon {
                background-color: #e7f1ff;
            }
            
            .arch-option-item input:checked + label .arch-image {
                transform: scale(1.1);
            }
            
            .arch-info {
                flex: 1;
            }
            
            .arch-name {
                font-weight: 500;
                color: #2c3e50;
                margin-bottom: 0.25rem;
            }
            
            .arch-desc {
                font-size: 0.875rem;
                color: #6c757d;
            }
            
            .arch-option-item input:checked + label {
                border-color: #0d6efd;
            }
            
            .arch-option-item input:checked + label .arch-icon {
                background-color: #f0f7ff;
            }
            
            .arch-option-item input:checked + label .arch-name {
                color: #0d6efd;
            }
            
            .invalid-feedback {
                display: none;
                margin-top: 0.75rem;
                padding-left: 0.5rem;
                font-size: 0.875rem;
                color: #dc3545;
            }
        </style>
    `;
    
    // 将样式添加到页面
    if (!$('#upgrade-modal-styles').length) {
        $('head').append(modalStyle);
}


// 修改模文件选择函数
function simulateFileSelection(version) {
    const fileInput = $('#configFile');
    const selectedVersion = $('#selectedVersion');
    const upgradePluginsSection = $('#upgradePluginsSection');
    
    // 清空实际的文件输入
    fileInput.val('');
    
    // 显示已选择版本信息
    selectedVersion.removeClass('d-none')
        .find('.selected-version-text')
        .text(`已选择 ${version} 版本的升级元数据文件`);
    
    // 显示升级组件选择区域
    upgradePluginsSection.removeClass('d-none');
    
    // 模拟加载插件列表
    const pluginsList = $('.selected-plugins-list');
    pluginsList.html(`
        <div class="plugins-grid">
            <div class="core-plugins mb-4">
                <div class="section-title-l3">核心组件</div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="core_upgrade" checked>
                    <label class="form-check-label" for="core_upgrade">
                        核心框架升级包
                        <span class="badge bg-primary ms-2">必选</span>
                    </label>
                </div>
            </div>
            
            <div class="extra-plugins">
                <div class="section-title-l3">扩展组件</div>
                <div class="row g-3">
                    ${generateUpgradePluginsList()}
                </div>
            </div>
        </div>
    `);
    
    // 模拟文件上传完成后的处理
    simulateIncrementalPackage();
}

// 添加新函数：生成升级插件列表
function generateUpgradePluginsList() {
    const upgradePlugins = [
        { id: 'plugin1', name: '监控组件升级包', version: '2.1.0' },
        { id: 'plugin2', name: '志组件升级包', version: '1.5.0' },
        { id: 'plugin3', name: '安全组件升级包', version: '3.0.0' }
    ];
    
    return upgradePlugins.map(plugin => `
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-body">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="${plugin.id}">
                        <label class="form-check-label" for="${plugin.id}">
                            ${plugin.name}
                            <small class="d-block text-muted">版本 ${plugin.version}</small>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 修改文件上传处理函数
function handleFileUpload() {
    const file = $('#configFile')[0].files[0];
    if (file) {
        // 启用生按钮
        $('#generateBtn').prop('disabled', false);
    } else {
        // 禁用生成按钮
        $('#generateBtn').prop('disabled', true);
    }
}

// 绑定事件
function bindEvents() {
    // 版本选择
    $('.version-item').click(function(e) {
        e.preventDefault();
        $('.version-item').removeClass('active');
        $(this).addClass('active');
        currentVersion = $(this).data('version');
        renderPlugins();
    });

    // 包类型选
    $('.package-type-selector .btn').click(function() {
        $('.package-type-selector .btn').removeClass('active');
        $(this).addClass('active');
        currentPackageType = $(this).data('type');
        handlePackageTypeChange();
    });

    // 架构选择
    $('.architecture-selector .btn').click(function() {
        $('.architecture-selector .btn').removeClass('active');
        $(this).addClass('active');
        currentArch = $(this).data('arch');
        
        // 更新记录列表
        if (currentPackageType === 'core' || currentPackageType === 'full') {
            $('.generation-records').empty();
            addDefaultRecords();
        }
        
        renderPlugins();
    });

    // 插件上传
    $('#configFile').change(handleFileUpload);

    // 生成按钮件
    $(document).on('click', '#generateBtn', handleGenerate);
    
    // 下载按钮事件
    $(document).on('click', '#downloadBtn', handleDownload);

    // 加版本选择事件处理
    $(document).on('change', '.version-option input[type="radio"]', function() {
        const versionContainer = $(this).closest('.version-option');
        const allDescriptions = $(this).closest('.versions-container').find('.version-description');
        
        // 隐藏所有描述
        allDescriptions.addClass('d-none');
        
        // 显示选中版本的描述
        versionContainer.find('.version-description').removeClass('d-none');
    });

    bindFeatureEvents();
    
    // 在插件选择变化时更新功能选择
    $('.plugin-card input[type="checkbox"]').change(function() {
        const pluginId = $(this).attr('id');
        updateFeatureSelection(pluginId);
    });

    // 添加字母索引点击事件
    $(document).on('click', '.alphabet-index .letter', function() {
        if (!$(this).hasClass('disabled')) {
            const letter = $(this).text();
            
            // 如果当前字母已经是高亮状态，则清除筛选和高亮
            if ($(this).hasClass('active')) {
                $('.alphabet-index .letter').removeClass('active');
                $('.feature-item').removeClass('d-none');
            } else {
                filterFeaturesByLetter(letter);
            }
        }
    });

    // 添加分类切换事件
    $('.category-nav .nav-link').click(function() {
        const category = $(this).data('category');
        $('.category-nav .nav-link').removeClass('active');
        $(this).addClass('active');
        filterFeaturesByCategory(category);
    });
}

// 处理包类型变化
function handlePackageTypeChange() {
    const incrementUpload = $('.increment-upload');
    const generateBtn = $('#generateBtn');
    const packageInfo = $('#packageInfo');
    const featuresSelector = $('.features-selector');
    const featureCheckboxes = $('.feature-checkbox');
    const downloadBtn = $('#downloadBtn');
    
    incrementUpload.addClass('d-none');
    generateBtn.addClass('d-none');
    packageInfo.addClass('d-none');
    
    // 重置功能选择
    $('.feature-item').removeClass('selected');
    $('.category-item[data-category="all"]').click();
    
    // 清除已选功能区域
    $('.selected-features').empty();
    
    // 禁用下载按钮（默认状态）
    downloadBtn.prop('disabled', true);
    
    // 更新包类型描述
    updatePackageTypeDescription(currentPackageType);
    
    // 检查当前是否为部署模式
    const isDeployMode = $('.deployment-type-buttons .btn[data-type="deploy"]').hasClass('active');
    
    switch(currentPackageType) {
        case 'core':
            showDefaultPackageInfo('core');
            // 在部署模式下隐藏功能选择区域
            if (isDeployMode) {
                featuresSelector.addClass('d-none');
            } else {
                featuresSelector.removeClass('d-none');
            }
            // 先取消选中所有功能
            featureCheckboxes.prop('checked', false);
            // 只选中核心功能并禁用所有选择
            $('.feature-item.core-feature .feature-checkbox').prop('checked', true);
            featureCheckboxes.prop('disabled', true);
            // 隐藏所有提示图标
            $('.feature-info-icon').addClass('d-none');
            // 启用下载按钮
            downloadBtn.prop('disabled', false);
            break;
            
        case 'full':
            showDefaultPackageInfo('full');
            // 在部署模式下隐藏功能选择区域
            if (isDeployMode) {
                featuresSelector.addClass('d-none');
            } else {
                featuresSelector.removeClass('d-none');
            }
            // 选中所有功能并禁用选择
            featureCheckboxes.prop('checked', true).prop('disabled', true);
            // 隐藏所有提示图标
            $('.feature-info-icon').addClass('d-none');
            // 启用下载按钮
            downloadBtn.prop('disabled', false);
            break;
            
        case 'increment':
            incrementUpload.removeClass('d-none');
            featuresSelector.addClass('d-none');
            generateBtn.removeClass('d-none');
            // 重置版本选择信息
            $('#selectedVersion').addClass('d-none');
            break;
            
        case 'custom':
            generateBtn.removeClass('d-none');
            // 自定义模式下始终显示功能选择区域
            featuresSelector.removeClass('d-none');
            
            // 先取消选中所有功能
            featureCheckboxes.prop('checked', false).prop('disabled', false);
            
            // 然后只选中并禁用核心功能
            $('.feature-item.core-feature .feature-checkbox').prop('checked', true).prop('disabled', true);
            $('.feature-item.core-feature').addClass('selected');
            
            // 显示所有提示图标
            $('.feature-info-icon').removeClass('d-none');
            
            // 立即检查未清理的记录数量并更新按钮状态
            setTimeout(() => {
                checkPendingRecordsCount();
            }, 0);
            break;
    }
    
    // 重新初始化核心功能
    initializeCoreFeature();
    
    // 清空现有记录并添加新的默认记录
    $('.generation-records').empty();
    addDefaultRecords();
    
    // 根据包类型显示/隐藏生成按钮
    if (currentPackageType === 'core' || currentPackageType === 'full') {
        $('.package-actions').addClass('d-none');
    } else {
        $('.package-actions').removeClass('d-none');
    }
}

// 添加新函数：更新包类型描述
function updatePackageTypeDescription(type) {
    // 先移除旧的描述
    $('.package-type-description').remove();
    
    // 根据类型添加对应描述
    const description = getPackageTypeDescription(type);
    if (description) {
        $('.package-type-selector').append(`
            <div class="package-type-description text-muted mt-2">
                <small>${description}</small>
            </div>
        `);
    }
}

// 添加新函数：获取包类型描述
function getPackageTypeDescription(type) {
    const descriptions = {
        'core': '平台核心功能的集合',
        'full': '平台全量功能集合',
        'custom': '选择所需的插件组合并打包下载'
    };
    return descriptions[type] || '';
}

// 添加新函数：更新自定义模式下的插件状态
function updatePluginsForCustomMode() {
    // 先禁用所有插件
    $('.plugin-card').addClass('disabled').removeClass('selected');
    $('.plugin-card input[type="checkbox"]').prop('checked', false);
    
    // 只启用和选中核心功能相关的插件
    const coreFeature = featurePluginMapping.coreFeature;
    if (coreFeature && coreFeature.plugins) {
        coreFeature.plugins.forEach(pluginId => {
            const pluginCard = $(`#${pluginId}`).closest('.plugin-card');
            pluginCard.removeClass('disabled').addClass('selected');
            $(`#${pluginId}`).prop('checked', true);
        });
    }
}

// 添加新函数用于用所有插件
function disableAllPlugins() {
    // 取消所有插件的选中状态
    $('.plugin-card input[type="checkbox"], .plugin-card input[type="radio"]').prop('checked', false);
    
    // 禁用所有选框和单选框
    $('.plugin-card input[type="checkbox"], .plugin-card input[type="radio"]').prop('disabled', true);
    
    // 添加禁用样式
    $('.plugin-card').addClass('disabled').removeClass('selected');
    
    // 隐藏所版本描述（针对多版本插件）
    $('.version-description').addClass('d-none');
    
    // 清空包信息显示
    $('#packageInfo').addClass('d-none');
}

// 显示默认包信息
function showDefaultPackageInfo(type) {
    const packageInfo = $('#packageInfo');
    const selectedPlugins = getSelectedPlugins();
    
    const hashValue = generateRandomHash();
    const signatureFile = 'signature.sign';
    const signatureHash = generateRandomHash();
    
    packageInfo.removeClass('d-none').html(`
        <div class="alert alert-info">
            <h5>安装包信息：</h5>
            <p>类型：${type === 'core' ? '核心包' : '全量包'}</p>
            <p>架构：${currentArch.toUpperCase()}</p>
            <p>已选插件：</p>
            <div class="plugin-list ms-3">
                ${selectedPlugins.map(plugin => `<p>${plugin}</p>`).join('')}
            </div>
            <hr>
            <p>包哈希值：${hashValue}</p>
            <p>签名文件：${signatureFile}</p>
            <p>名哈希值：${signatureHash}</p>
        </div>
    `);
}

// 生成随机哈希值
function generateRandomHash() {
    return Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)
    ).join('');
}

// 渲染插件列表
function renderPlugins() {
    // 保存当前选中状态
    saveCurrentSelection();
    
    renderPluginGroup('core');
    renderPluginGroup('extra');
    
    // 恢复选中状态
    restoreSelection();
    
    // 根据当前包类型更新禁用状态
    updatePluginStates();
}

// 保存当前选中状态
function saveCurrentSelection() {
    state.selectedPlugins.clear();
    $('.plugin-card input[type="checkbox"]:checked').each(function() {
        state.selectedPlugins.add($(this).attr('id'));
    });
}

// 恢复选中状态
function restoreSelection() {
    state.selectedPlugins.forEach(pluginId => {
        $(`#${pluginId}`).prop('checked', true);
    });
}

// 更新插件状态
function updatePluginStates() {
    switch(currentPackageType) {
        case 'core':
            selectCorePlugins();
            break;
        case 'full':
            selectAllPlugins();
            break;
        case 'custom':
            selectCorePlugins();
            enableCustomSelection();
            break;
    }
}

// 渲染插件组
function renderPluginGroup(group) {
    const container = $(`.${group}-plugins .plugins-grid`);
    container.empty();

    if (group === 'core') {
        // 核心包殊处理：合并为一个卡片
        const coreCapabilities = [
            {
                title: '系统初化与资源管理',
                details: '提供系统组件生命周期管理、动态资源分配回收、高效缓存管理等基础能力'
            },
            {
                title: '数据采集与处理',
                details: '支持多源数据接入采集、实时数据清洗转换、数据质量校验等处理能力'
            },
            {
                title: '认证授权与安全',
                details: '提供统一身份认证、细粒度权限控制、安全审计日志等安全能力'
            },
            {
                title: '系统监控与运维',
                details: '支持组件健康检查、性能指标采集、故障诊断告警等运维能力'
            }
        ];
        
        // 核心包标题
        $(`.${group}-plugins h5`).html(`
            <span class="section-title-l3">
                核心包 <span class="ms-2 text-muted">版本 ${currentVersion}</span>
            </span>
        `);
        
        const coreCard = `
            <div class="plugin-card core" data-capabilities='${JSON.stringify(coreCapabilities)}'>
                <div class="card-content">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="core_package" checked disabled>
                        <label class="form-check-label" for="core_package">
                            核心包能力
                        </label>
                    </div>
                    <div class="plugin-description">
                        <p class="description-text">包含系统初始化、数据处理、认证授系统监控等核心能力</p>
                    </div>
                    <div class="capability-details-tooltip">
                        <div class="tooltip-content">
                            ${coreCapabilities.map(cap => `
                                <div class="tooltip-section">
                                    <div class="tooltip-title">${cap.title}</div>
                                    <div class="tooltip-text">${cap.details}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.append(coreCard);
    } else {
        // 扩展插件保持原有的渲染逻辑
        plugins[group].forEach(plugin => {
            if (plugin.arch.includes(currentArch)) {
                const card = createPluginCard(plugin, group);
                container.append(card);
            }
        });
    }
}

// 创建插件卡片
function createPluginCard(plugin, group) {
    // 处理多版本件（插件7
    if (plugin.versions) {
        return `
            <div class="plugin-card ${group}" data-plugin-id="${plugin.id}">
                <div class="card-content">
                    <div class="plugin-header">
                        <label class="form-check-label">
                            ${plugin.name} ${plugin.category ? `<span class="badge ${plugin.category === 'Agnostic Plugins' ? 'bg-warning' : 'bg-info'}">${plugin.category}</span>` : ''}
                        </label>
                    </div>
                    <div class="versions-container">
                        ${plugin.versions.map(ver => `
                            <div class="version-option">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" 
                                           name="version_${plugin.id}" 
                                           id="${plugin.id}_${ver.version}"
                                           value="${ver.version}">
                                    <label class="form-check-label" for="${plugin.id}_${ver.version}">
                                        版本 ${ver.version}
                                    </label>
                                </div>
                                <div class="version-description d-none">
                                    <small class="text-muted">${ver.description}</small>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    // 处理普通插件
    return `
        <div class="plugin-card ${group}" data-plugin-id="${plugin.id}">
            <div class="card-content">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="${plugin.id}">
                    <label class="form-check-label" for="${plugin.id}">
                        ${plugin.name} ${plugin.version}
                        ${plugin.category ? `<span class="badge ${plugin.category === 'Agnostic Plugins' ? 'bg-warning' : 'bg-info'}">${plugin.category}</span>` : ''}
                    </label>
                </div>
                <div class="plugin-description">
                    <p class="description-text">${getPluginDescription(plugin.id)}</p>
                </div>
                ${plugin.dependencies ? `
                    <div class="dependency-info">
                        <small class="text-muted">依赖项: ${plugin.dependencies.map(depId => {
                            const dep = [...plugins.core, ...plugins.extra].find(p => p.id === depId);
                            return `${dep.name} (${dep.version})`;
                        }).join(', ')}</small>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// 添加一个新函数来获取插件描述
function getPluginDescription(pluginId) {
    const descriptions = {
        'core1': '核心系统组件，提供基础能支，括系统初化、资源管理等核心功能',
        'core2': '数据处理核心模块，负责数据的采集、清洗和转换，支持多种数源接入',
        'core3': '系统安全模，供认证、授权和加密等安全相关功能',
        'extra1': '高级数据分析功能，支持复杂数据处理和可视化展示',
        'extra2': '报表生成工具，支持多种格式的报表导出',
        'extra3': '工作流引，支自定义业务流程',
        'extra4': '系统监控插件，提供实时性能监控和告警功能',
        'extra5': '日志理工具，支持日志收集、分和查询',
        'extra6': '数据备份工具，提供自动备份和恢复功能',
        'extra8': 'API网关，提供统一接口管理访问控制'
    };
    return descriptions[pluginId] || '暂无描述';
}

// 处理件传
function handleFileUpload() {
    const file = $('#configFile')[0].files[0];
    if (file) {
        // 启用生成按钮
        $('#generateBtn').prop('disabled', false);
    } else {
        // 禁用生成按钮
        $('#generateBtn').prop('disabled', true);
    }
}

// 模拟增量包生成
function simulateIncrementalPackage() {
    showProgress();
    setTimeout(() => {
        // 选中所有核心插件
        $('.plugin-card.core input[type="checkbox"]').prop('checked', true);
        
        // 随机选择一些扩展插件
        $('.plugin-card:not(.core) input[type="checkbox"]').each(function() {
            $(this).prop('checked', Math.random() > 0.5);
        });
        
        // 禁用所有选框
        $('.plugin-card input[type="checkbox"]').prop('disabled', true);
        $('.plugin-card').addClass('disabled');
        
        hideProgress();
        enableDownload();
    }, 3000);
}

// 显示进度条
function showProgress() {
    $('.progress').removeClass('d-none');
    animateProgress();
}

// 隐藏进度条
function hideProgress() {
    $('.progress').addClass('d-none');
    $('.progress-bar').css('width', '0%');
}

// 动画进度条
function animateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        $('.progress-bar').css('width', `${progress}%`);
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 150);
}

// 启用下载按钮
function enableDownload() {
    $('#downloadBtn').prop('disabled', false);
}

// 处理下载
function handleDownload() {
    // 生成下载链接（实际场景中这个链接应该从后端获取）
    const downloadUrl = `https://download.example.com/packages/${generateRandomHash()}`;
    const curlCommand = `curl -O ${downloadUrl}`;
    
    Swal.fire({
        title: '选择下载方式',
        html: `
            <div class="download-options">
                <div class="download-option">
                    <button class="btn btn-primary btn-lg w-100 direct-download-btn">
                        <i class="fas fa-download me-2"></i>直接下载
                    </button>
                </div>
                
                <div class="download-option">
                    <div class="download-option-header">
                        <span class="option-title">
                            <i class="fas fa-external-link-alt me-2"></i>第三方工具下载
                        </span>
                        <button class="btn btn-link copy-btn" data-clipboard-text="${downloadUrl}">
                            复制链接
                        </button>
                    </div>
                    <div class="download-link-box">
                        ${downloadUrl}
                    </div>
                </div>
                
                <div class="download-option">
                    <div class="download-option-header">
                        <span class="option-title">
                            <i class="fas fa-terminal me-2"></i>命令行下载
                        </span>
                        <button class="btn btn-link copy-btn" data-clipboard-text="${curlCommand}">
                            复制命令
                        </button>
                    </div>
                    <div class="download-link-box">
                        ${curlCommand}
                    </div>
                </div>
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        width: 600,
        customClass: {
            container: 'download-dialog-container',
            popup: 'download-dialog-popup',
            closeButton: 'download-dialog-close'
        },
        didOpen: () => {
            // 初始化复制功能
            const clipboard = new ClipboardJS('.copy-btn');
            
            // 复制成功提示
            clipboard.on('success', (e) => {
                const btn = $(e.trigger);
                const originalText = btn.text();
                btn.text('已复制！');
                setTimeout(() => {
                    btn.text(originalText);
                }, 1500);
                e.clearSelection();
            });
            
            // 绑定直接下载按钮事件
            $('.direct-download-btn').click(() => {
                // 这里应该触发实际的下载
                window.location.href = downloadUrl;
                // 下载开始后显示成功提示
                Swal.fire({
                    title: '下载已开始',
                    text: '安装包开始下载，请检查浏览器下载栏',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            });
        }
    });
}

// 添加到 head 中的样式
const downloadDialogStyle = `
    <style>
        .download-options {
            padding: 20px;
        }
        
        .download-option {
            margin-bottom: 24px;
        }
        
        .download-option:last-child {
            margin-bottom: 0;
        }
        
        .download-option-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .option-title {
            font-size: 16px;
            font-weight: 500;
            color: #2c3e50;
        }
        
        .download-link-box {
            background-color: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            padding: 12px;
            font-family: monospace;
            font-size: 14px;
            color: #495057;
            word-break: break-all;
        }
        
        .copy-btn {
            padding: 4px 12px;
            font-size: 14px;
            text-decoration: none;
        }
        
        .copy-btn:hover {
            text-decoration: none;
        }
        
        .direct-download-btn {
            padding: 16px;
            font-size: 16px;
            font-weight: 500;
        }
        
        .download-dialog-popup {
            border-radius: 8px;
        }
        
        .download-dialog-close {
            color: #6c757d;
        }
        
        .download-dialog-close:hover {
            color: #343a40;
        }
    </style>
`;

// 将样式添加到页面
if (!$('#download-dialog-styles').length) {
    $('head').append(downloadDialogStyle);
}

// 确保在页面加载时添加 clipboard.js
const clipboardScript = document.createElement('script');
clipboardScript.src = 'https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js';
document.head.appendChild(clipboardScript);

// 选择核心插件
function selectCorePlugins() {
    // 禁用所有复选框
    $('.plugin-card input[type="checkbox"]').prop('disabled', true);
    
    // 取消选中所有插件
    $('.plugin-card input[type="checkbox"]').prop('checked', false);
    
    // 选中所有心插件
    $('.plugin-card.core input[type="checkbox"]').prop('checked', true);
    
    // 添加禁用样式
    $('.plugin-card').addClass('disabled');
    $('.plugin-card.core').addClass('selected');
}

// 选择所有插件
function selectAllPlugins() {
    // 禁用所有复选框
    $('.plugin-card input[type="checkbox"]').prop('disabled', true);
    
    // 选中所有插件
    $('.plugin-card input[type="checkbox"]').prop('checked', true);
    
    // 添加禁用样式
    $('.plugin-card').addClass('disabled selected');
}

// 启用自定义择
function enableCustomSelection() {
    // 选中并禁用所有核心插件
    $('.plugin-card.core input[type="checkbox"]').prop('checked', true).prop('disabled', true);
    $('.plugin-card.core').addClass('selected disabled');
    
    // 禁用所有非核心插件的复选框
    $('.plugin-card:not(.core) input[type="checkbox"]').prop('disabled', true);
    
    // 添加禁用样式到非核心插件
    $('.plugin-card:not(.core)').addClass('disabled');
    
    // 默选中础功能并禁用
    $('#feature1').prop('checked', true).prop('disabled', true);
    
    // 绑定依赖关系处理
    bindDependencyHandling();
}

// 处理依赖关系
function bindDependencyHandling() {
    $('.plugin-card:not(.core) input[type="checkbox"]').change(function() {
        const pluginId = $(this).closest('.plugin-card').data('plugin-id');
        const plugin = plugins.extra.find(p => p.id === pluginId);
        
        // 更新当前卡片的选中状态
        $(this).closest('.plugin-card').toggleClass('selected', $(this).is(':checked'));
        
        if ($(this).is(':checked') && plugin.dependencies) {
            // 选中当前插件时，自动选中其依赖插件
            plugin.dependencies.forEach(depId => {
                $(`#${depId}`).prop('checked', true)
                    .closest('.plugin-card').addClass('selected');
            });
            
            // 显示提示信息
            Swal.fire({
                title: '依赖提示',
                text: `已自动选中依赖插件：${plugin.dependencies.map(id => {
                    const dep = plugins.extra.find(p => p.id === id);
                    return `${dep.name} (${dep.version})`;
                }).join(', ')}`,
                icon: 'info',
                confirmButtonText: '确定'
            });
        } else if (!$(this).is(':checked')) {
            // 取消选中时，检查是否有其他插件依赖于当前插件
            const dependentPlugins = plugins.extra.filter(p => 
                p.dependencies && p.dependencies.includes(pluginId) && 
                $(`#${p.id}`).is(':checked')
            );
            
            if (dependentPlugins.length > 0) {
                // 如果有其他插件依赖于前插件，阻止取消选中
                $(this).prop('checked', true);
                $(this).closest('.plugin-card').addClass('selected');
                Swal.fire({
                    title: '无法消选择',
                    text: `以下插件依赖于插件：${dependentPlugins.map(p => 
                        `${p.name} (${p.version})`).join(', ')}`,
                    icon: 'warning',
                    confirmButtonText: '确定'
                });
            }
        }
    });
}

// 修改下载区域的HTML
function updateDownloadSection() {
    const downloadSection = $('.download-section');
    downloadSection.html(`
        <div class="d-flex gap-2 align-items-center">
            <button class="btn btn-primary d-none" id="generateBtn">生成安装包</button>
            // <button class="btn btn-success" id="downloadBtn" disabled>下载安装包</button>
        </div>
        <div class="progress mt-3 d-none">
            <div class="progress-bar" role="progressbar" style="width: 0%"></div>
        </div>
        <div id="packageInfo" class="mt-3">
            <!-- 包信息将在这里动态显示 -->
        </div>
    `);
}

// 处理生成按钮点
function handleGenerate() {
    if (state.isGenerating) return;
    
    // 获取当前选择的信息
    const selectedFeatures = getSelectedFeatures();
    const selectedPlugins = getSelectedPlugins();
    
    // 显示确认弹框
    Swal.fire({
        title: '确认安装包信息',
        html: `
            <div class="package-info-confirm">
                <div class="info-section">
                    <div class="info-item">
                        <span class="info-label">类型：</span>
                        <span class="info-value">自定义</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">架构：</span>
                        <span class="info-value">${currentArch.toUpperCase()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">已选功能：</span>
                        <div class="info-value feature-list">
                            ${selectedFeatures.map(feature => `
                                <div class="selected-item">${feature}</div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">包含插件：</span>
                        <div class="info-value plugin-list">
                            ${selectedPlugins.map(plugin => `
                                <div class="selected-item">${plugin}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: '生成',
        cancelButtonText: '取消',
        width: '600px',
        customClass: {
            container: 'package-confirm-dialog',
            content: 'package-confirm-content'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            generatePackage();
        }
    });
}

// 修改生成包的函数
function generatePackage() {
    // 先检查未清理的记录数量
    const pendingRecords = $('.generation-record').filter(function() {
        return $(this).find('.clean-status.pending').length > 0;
    }).length;
    
    if (pendingRecords >= 3) {
        Swal.fire({
            title: '法生成',
            text: '最多生成 3 个安装包，请首先清理安装包后再进行生成操作',
            icon: 'warning',
            confirmButtonText: '确定'
        });
        return;
    }
    
    const isUpgradeMode = $('.deployment-type-buttons .btn[data-type="upgrade"]').hasClass('active');
    state.isGenerating = true;
    
    // 创建记录
    const record = {
        id: Date.now(),
        arch: isUpgradeMode ? '升级包' : currentArch.toUpperCase(),
        features: isUpgradeMode ? ['版本升级'] : getSelectedFeatures(),
        plugins: isUpgradeMode ? ['升级相关组件'] : getSelectedPlugins(),
        hash: '', // 初始时哈希值为空
        status: 'packaging', // 初始状态为打包中
        cleanStatus: 'pending', // 添加清理状态
        size: '-' // 初始大小为空
    };
    
    // 添加到生成记录
    addGenerationRecord(record);
    
    // 5秒后更新状态为完成
    setTimeout(() => {
        const recordElement = $(`.generation-record[data-id="${record.id}"]`);
        record.status = 'completed';
        record.hash = generateRandomHash(); // 生成哈希值
        record.size = generateRandomSize(); // 生成文件大小
        
        // 更新哈希值显示
        recordElement.find('.record-hash').html(`
            <div class="hash-preview">
                ${record.hash.substring(0, 8)}...
            </div>
            <div class="hash-tooltip">
                <div class="tooltip-content">
                    <div class="tooltip-header">
                        完整哈希值
                        <button class="copy-btn" data-clipboard-text="${record.hash}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <div class="tooltip-body">
                        <div class="hash-full">${record.hash}</div>
                    </div>
                </div>
            </div>
        `);
        
        // 更新文件大小
        recordElement.find('.record-size').text(record.size);
        
        // 更新生成时间
        recordElement.find('.record-time').text(formatDateTime(new Date()));
        
        // 更新操作按钮为下载和清理
        recordElement.find('.record-actions').html(`
            <div class="btn-group">
                <button class="btn btn-sm btn-primary download-btn">
                    <i class="fas fa-download"></i>
                    下载
                </button>
                <button class="btn btn-sm btn-outline-danger clean-btn">
                    <i class="fas fa-trash-alt"></i>
                    清理
                </button>
            </div>
        `);
        
        // 重新绑定事件
        bindRecordEvents(record.id);
        
        // 更新清理状态为固定的7天
        recordElement.find('.clean-status')
            .removeClass('packaging')
            .addClass('pending')
            .html(`
                <i class="fas fa-clock"></i>
                <span>剩余 7 天</span>
            `);
        
        // 状态更新后立即检查未清理的记录数量并更新按钮状态
        checkPendingRecordsCount();
        
        state.isGenerating = false;
    }, 5000);
}

// 添加获取已选功能的函数
function getSelectedFeatures() {
    const features = [];
    $('.feature-checkbox:checked').each(function() {
        const featureId = $(this).val();
        const feature = featurePluginMapping[featureId];
        if (feature) {
            features.push(feature.name);
        }
    });
    return features;
}

// 修改生成记录的函数
function addGenerationRecord(record) {
    const recordsContainer = $('.generation-records');
    
    // 移除空状态显示
    recordsContainer.find('.empty-state').remove();
    
    const recordHtml = `
        <div class="generation-record" data-id="${record.id}">
            <div class="record-arch">
                <i class="fas fa-microchip"></i>
                ${record.arch}
            </div>
            <div class="record-features">
                <div class="features-preview">
                    ${record.features.slice(0, 2).join(', ')}
                    ${record.features.length > 2 ? '...' : ''}
                </div>
                <div class="features-tooltip">
                    <div class="tooltip-content">
                        <div class="tooltip-header">
                            已选功能列表
                            <button class="copy-btn" data-clipboard-text="${record.features.join('\n')}">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="tooltip-body">
                            ${record.features.map(feature => `
                                <div class="tooltip-item">${feature}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="record-hash">
                ${record.status === 'packaging' ? 
                    '<span>-</span>' : 
                    `<div class="hash-preview">
                        ${record.hash.substring(0, 8)}...
                        <div class="hash-tooltip">
                            <div class="tooltip-content">
                                <div class="tooltip-header">
                                    完整哈希值
                                    <button class="copy-btn" data-clipboard-text="${record.hash}">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="tooltip-body">
                                    <div class="hash-full">${record.hash}</div>
                                </div>
                            </div>
                        </div>
                    </div>`
                }
            </div>
            <div class="record-time">
                ${record.status === 'packaging' ? '-' : formatDateTime(new Date())}
            </div>
            <div class="record-size">
                ${record.status === 'packaging' ? '-' : generateRandomSize()}
            </div>
            <div class="clean-status ${record.status === 'packaging' ? 'packaging' : 'pending'}">
                ${record.status === 'packaging' ? 
                    '<span>-</span>' : 
                    `<i class="fas fa-clock"></i><span>剩余 7 天</span>`
                }
            </div>
            <div class="record-actions">
                ${getActionButton(record)}
            </div>
        </div>
    `;
    
    recordsContainer.prepend(recordHtml);
    bindRecordEvents(record.id);
}

// 添加格式化日期时间的辅助函数
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 修改操作按钮生成函数
function getActionButton(record) {
    if (record.status === 'packaging') {
        return `
            <button class="btn btn-sm btn-secondary" disabled>
                <i class="fas fa-spinner fa-spin"></i>
                打包中
            </button>
        `;
    } else if (record.status === 'failed') {
        return `
            <button class="btn btn-sm btn-warning retry-btn">
                <i class="fas fa-redo"></i>
                重试
            </button>
        `;
    } else if (record.status === 'completed') {
        const cleanButton = record.cleanStatus === 'cleaned' ? 
            `<button class="btn btn-sm btn-outline-danger clean-btn" disabled>
                <i class="fas fa-trash-alt"></i>
                清理
            </button>` :
            `<button class="btn btn-sm btn-outline-danger clean-btn">
                <i class="fas fa-trash-alt"></i>
                清理
            </button>`;

        return `
            <div class="btn-group">
                <button class="btn btn-sm btn-primary download-btn">
                    <i class="fas fa-download"></i>
                    下载
                </button>
                ${cleanButton}
            </div>
        `;
    } else {
        return `
            <button class="btn btn-sm btn-outline-primary repackage-btn">
                <i class="fas fa-redo"></i>
                重新生成
            </button>
        `;
    }
}

// 修改事件绑定函数
function bindRecordEvents(recordId) {
    const record = $(`.generation-record[data-id="${recordId}"]`);
    
    // 下载按钮事件
    record.find('.download-btn').click(function() {
        // 判断当前是否为部署模式
        const isDeployMode = $('.deployment-type-buttons .btn[data-type="deploy"]').hasClass('active');
        
        if (isDeployMode) {
            // 部署模式：直接显示下载弹框，不需要架构选择
            showDownloadModal(false);
        } else {
            // 升级模式：显示带架构选择的下载弹框
            showDownloadModal(true);
        }
    });
    
    // 清理按钮事件
    record.find('.clean-btn').click(function() {
        if (!$(this).prop('disabled')) {
            handleCleanRecord(recordId);
        }
    });

    // 重新生成按钮事件
    $(document).on('click', `.generation-record[data-id="${recordId}"] .repackage-btn`, function() {
        handleRepackage(recordId);
    });

    // 复制按钮事件
    const clipboard = new ClipboardJS(record.find('.copy-btn')[0]);
    clipboard.on('success', function(e) {
        const btn = $(e.trigger);
        const originalHtml = btn.html();
        btn.html('<i class="fas fa-check"></i>');
        setTimeout(() => {
            btn.html(originalHtml);
        }, 1500);
        e.clearSelection();
    });
}

// 添加清理记录处理函数
function handleCleanRecord(recordId) {
    Swal.fire({
        title: '确认清理',
        text: '是否确认清理该打包记录？清理后将无法恢复。',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        confirmButtonColor: '#dc3545'
    }).then((result) => {
        if (result.isConfirmed) {
            const record = $(`.generation-record[data-id="${recordId}"]`);
            
            // 更新清理状态
            record.find('.clean-status')
                .removeClass('pending packaging')
                .addClass('cleaned')
                .html('<i class="fas fa-check-circle"></i><span>已清理</span>');
            
            // 更新操作按钮
            record.find('.record-actions').html(`
                <button class="btn btn-sm btn-outline-primary repackage-btn">
                    <i class="fas fa-redo"></i>
                    重新生成
                </button>
            `);
            
            // 检查未清理的记录数量
            checkPendingRecordsCount();
            
            // 显示成功提示
            Swal.fire({
                title: '清理成功',
                text: '打包记录已成功清理',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

// 修改重新生成处理函数
function handleRepackage(recordId) {
    Swal.fire({
        title: '确重新生成',
        text: '是否确认重新生成该安装包？',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消'
    }).then((result) => {
        if (result.isConfirmed) {
            const record = $(`.generation-record[data-id="${recordId}"]`);
            
            // 更新按钮状态为打包中
            record.find('.record-actions').html(`
                <button class="btn btn-sm btn-secondary" disabled>
                    <i class="fas fa-spinner fa-spin"></i>
                    打包中
                </button>
            `);
            
            // 更新清理状态为打包中
            record.find('.clean-status')
                .removeClass('cleaned pending')
                .addClass('packaging')
                .html('<span>-</span>');
            
            // 5秒后更新为可下载状态
            setTimeout(() => {
                // 更新操作按钮
                record.find('.record-actions').html(`
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary download-btn">
                            <i class="fas fa-download"></i>
                            下载
                        </button>
                        <button class="btn btn-sm btn-outline-danger clean-btn">
                            <i class="fas fa-trash-alt"></i>
                            清理
                        </button>
                    </div>
                `);
                
                // 重新绑定事件
                bindRecordEvents(recordId);
                
                // 更新清理状态为待清理
                record.find('.clean-status')
                    .removeClass('packaging')
                    .addClass('pending')
                    .html(`
                        <i class="fas fa-clock"></i>
                        <span>剩余 7 天</span>
                    `);
                
                state.isGenerating = false;
            }, 5000);
        }
    });
}

// 初始化生成记录区域
function initializeGenerationRecords() {
    const recordsSection = `
        <div class="generation-records-section">
            <div class="section-header">
                <h4>打包记录</h4>
            </div>
            <div class="package-actions mb-4 d-none">
                <button class="btn btn-primary" id="generateBtn">
                    <i class="fas fa-plus me-2"></i>生成安装包
                </button>
            </div>
            <div class="records-table">
                <div class="records-header">
                    <div class="header-arch" style="width: 60px;">架构</div>
                    <div class="header-features" style="width: 120px;">已选功能</div>
                    <div class="header-hash" style="width: 100px;">哈希值</div>
                    <div class="header-time" style="width: 100px;">生成时间</div>
                    <div class="header-size" style="width: 70px;">文件大小</div>
                    <div class="header-status" style="width: 90px;">清理状态</div>
                    <div class="header-actions" style="width: 140px;">操作</div>
                </div>
                <div class="generation-records">
                    <!-- 默认记录将在初始化时添加 -->
                </div>
            </div>
        </div>
    `;
    
    // 将记录区域添加到主内容区
    $('.main-content').append(recordsSection);
    
    // 添加默认记录
    addDefaultRecords();
    
    // 添加样式
    const style = `
        <style>
            .records-table {
                width: 100%;
                overflow-x: auto;
            }
            .records-header, .generation-record {
                display: flex;
                align-items: center;
                min-width: 600px;
            }
            .header-arch, .record-arch {
                width: 60px;
                flex-shrink: 0;
            }
            .header-features, .record-features {
                width: 120px;
                flex-shrink: 0;
            }
            .header-hash, .record-hash {
                width: 100px;
                flex-shrink: 0;
            }
            .header-size, .record-size {
                width: 70px;
                flex-shrink: 0;
            }
            .header-status, .clean-status {
                width: 90px;
                flex-shrink: 0;
            }
            .header-actions, .record-actions {
                width: 140px;
                flex-shrink: 0;
            }
            .record-actions .btn-group {
                display: inline-flex;
                flex-wrap: nowrap;
            }
            .record-actions .btn {
                padding: 0.25rem 0.5rem;
                font-size: 0.875rem;
                white-space: nowrap;
            }
            .record-actions .btn i {
                margin-right: 0.25rem;
            }
            .features-preview {
                max-width: 100px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .features-tooltip {
                position: absolute;
                z-index: 1000;
                left: 0;
                top: 100%;
                margin-top: 5px;
            }
            .record-features {
                position: relative;
            }
            .tooltip-content {
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                padding: 8px;
                min-width: 200px;
                max-width: 300px;
            }
            .tooltip-header {
                font-weight: 500;
                margin-bottom: 8px;
                padding-bottom: 8px;
                border-bottom: 1px solid #eee;
            }
            .tooltip-body {
                max-height: 200px;
                overflow-y: auto;
            }
            .tooltip-item {
                padding: 4px 0;
                border-bottom: 1px solid #f5f5f5;
            }
            .tooltip-item:last-child {
                border-bottom: none;
            }
            .hash-tooltip {
                position: absolute;
                z-index: 1000;
                left: 0;
                top: 100%;
                margin-top: 5px;
            }
        </style>
    `;
    
    // 将样式添加到页面
    if (!$('#records-table-styles').length) {
        $('head').append(style);
    }
}

// 添加新函数：生成默认记录
function addDefaultRecords() {
    // 只在核心包和全量包时添加记录
    if (currentPackageType === 'core' || currentPackageType === 'full') {
        // 只添加当前选中架构的记录
        const record = {
            id: Date.now() + Math.random(),
            arch: currentArch.toUpperCase(),
            features: currentPackageType === 'core' ? ['核心功能'] : [
                '核心功能',
                '认证授权',
                'VM监控',
                '容器编排',
                '容器监控',
                '持续集成',
                '代码分析',
                '服务注册',
                'API网关',
                '数据处理'
            ],
            plugins: currentPackageType === 'core' ? 
                ['核心运行时 v4.0.0', '核心服务框架 v4.0.0'] :
                getDefaultPlugins(),
            hash: generateRandomHash(),
            status: 'completed',
            neverClean: true
        };
        
        addDefaultRecord(record);
    } else if (currentPackageType === 'custom') {
        // 自定义模式下显示空状态
        const recordsContainer = $('.generation-records');
        recordsContainer.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>暂无打包记录</p>
            </div>
        `);
    }
}

// 添加新函数：获取默认插件列表
function getDefaultPlugins() {
    return [
        '核心运行时 v4.0.0',
        '核心服务框架 v4.0.0',
        '统一认证中心 v2.1.0',
        '权限管理服务 v1.5.0',
        '虚拟机监控器 v3.0.0',
        '资源分析器 v2.0.0',
        '容器管理器 v4.0.0',
        '编排服务 v3.5.0'
    ];
}

// 添加新函数：添加默认记录
function addDefaultRecord(record) {
    const recordsContainer = $('.generation-records');
    
    // 移除空状态显示
    recordsContainer.find('.empty-state').remove();
    
    const recordHtml = `
        <div class="generation-record" data-id="${record.id}">
            <div class="record-arch">
                <i class="fas fa-microchip"></i>
                ${record.arch}
            </div>
            <div class="record-features">
                <div class="features-preview">
                    ${record.features.slice(0, 2).join(', ')}
                    ${record.features.length > 2 ? '...' : ''}
                </div>
                <div class="features-tooltip">
                    <div class="tooltip-content">
                        <div class="tooltip-header">
                            已选功能列表
                            <button class="copy-btn" data-clipboard-text="${record.features.join('\n')}">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="tooltip-body">
                            ${record.features.map(feature => `
                                <div class="tooltip-item">${feature}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="record-hash">
                <div class="hash-preview">
                    ${record.hash.substring(0, 8)}...
                </div>
                <div class="hash-tooltip">
                    <div class="tooltip-content">
                        <div class="tooltip-header">
                            整哈希值
                            <button class="copy-btn" data-clipboard-text="${record.hash}">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="tooltip-body">
                            <div class="hash-full">${record.hash}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="record-time">
                ${formatDateTime(new Date())}
            </div>
            <div class="record-size">
                ${generateRandomSize()}
            </div>
            <div class="clean-status never-clean">
                <i class="fas fa-infinity"></i>
                <span>永不清理</span>
            </div>
            <div class="record-actions">
                <button class="btn btn-sm btn-primary download-btn">
                    <i class="fas fa-download"></i>
                    下载
                </button>
            </div>
        </div>
    `;
    
    recordsContainer.append(recordHtml);
    bindRecordEvents(record.id);
}

// 生成随机文件大小
function generateRandomSize() {
    // 生成 0.1G 到 5G 之间的随机大小
    const size = (Math.random() * 4.9 + 0.1).toFixed(1);
    return `${size}G`;
}

// 获取选中的插件信息
function getSelectedPlugins() {
    const plugins = [];
    
    // 根据当前包类型获取插件列表
    if (currentPackageType === 'core') {
        plugins.push('核心运行时 v4.0.0');
        plugins.push('核心服务框架 v4.0.0');
    } else if (currentPackageType === 'full') {
        // 添加核心插件
        plugins.push('核心运行时 v4.0.0');
        plugins.push('核心服务框架 v4.0.0');
        
        // 添加所有扩展插件
        Object.values(featurePluginMapping).forEach(feature => {
            if (!feature.isCore) {
                const featurePlugins = getPluginsInfo(feature.plugins);
                featurePlugins.forEach(plugin => {
                    plugins.push(`${plugin.name} v${plugin.version}`);
                });
            }
        });
    } else if (currentPackageType === 'custom') {
        // 获取所有选中的功能对应的件
        $('.feature-checkbox:checked').each(function() {
            const featureId = $(this).val();
            const feature = featurePluginMapping[featureId];
            if (feature) {
                const featurePlugins = getPluginsInfo(feature.plugins);
                featurePlugins.forEach(plugin => {
                    plugins.push(`${plugin.name} v${plugin.version}`);
                });
            }
        });
    }
    
    // 去重
    return [...new Set(plugins)];
}

// 修改下载处理函数
function handleDownload() {
    // 生成下载链接（实际场景中这个链接应该从后端获取）
    const downloadUrl = `https://download.example.com/packages/${generateRandomHash()}`;
    const curlCommand = `curl -O ${downloadUrl}`;
    
    Swal.fire({
        title: '选择下载方式',
        html: `
            <div class="download-options">
                <div class="download-option">
                    <button class="btn btn-primary btn-lg w-100 direct-download-btn">
                        <i class="fas fa-download me-2"></i>直接下载
                    </button>
                </div>
                
                <div class="download-option">
                    <div class="download-option-header">
                        <span class="option-title">
                            <i class="fas fa-external-link-alt me-2"></i>第三方工具下载
                        </span>
                        <button class="btn btn-link copy-btn" data-clipboard-text="${downloadUrl}">
                            复制链接
                        </button>
                    </div>
                    <div class="download-link-box">
                        ${downloadUrl}
                    </div>
                </div>
                
                <div class="download-option">
                    <div class="download-option-header">
                        <span class="option-title">
                            <i class="fas fa-terminal me-2"></i>命令行下载
                        </span>
                        <button class="btn btn-link copy-btn" data-clipboard-text="${curlCommand}">
                            复制命令
                        </button>
                    </div>
                    <div class="download-link-box">
                        ${curlCommand}
                    </div>
                </div>
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        width: 600,
        customClass: {
            container: 'download-dialog-container',
            popup: 'download-dialog-popup',
            closeButton: 'download-dialog-close'
        },
        didOpen: () => {
            // 初始化复制功能
            const clipboard = new ClipboardJS('.copy-btn');
            
            // 复制成功提示
            clipboard.on('success', (e) => {
                const btn = $(e.trigger);
                const originalText = btn.text();
                btn.text('已复制！');
                setTimeout(() => {
                    btn.text(originalText);
                }, 1500);
                e.clearSelection();
            });
            
            // 绑定直接下载按钮事件
            $('.direct-download-btn').click(() => {
                // 这里应该触发实际的下载
                window.location.href = downloadUrl;
                // 下载开始后显示成功提示
                Swal.fire({
                    title: '下载已开始',
                    text: '安装包开始下载，请检查浏览器下载栏',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            });
        }
    });
}

// 修改功能选择的事件处理
function bindFeatureEvents() {
    $('.feature-checkbox').change(function() {
        if (currentPackageType === 'custom') {
            const featureItem = $(this).closest('.feature-item');
            const featureId = $(this).val();
            const isChecked = $(this).prop('checked');
            const featureName = featurePluginMapping[featureId].name;
            
            // 只更新选中状态，不改变排序
            featureItem.toggleClass('selected', isChecked);
            
            // 更新选中功能展示区域
            updateSelectedFeatures(featureId, featureName, isChecked);
            
            // 更新相关插件
            updateRelatedPlugins(featureId, isChecked);
        }
    });
}

// 更新选中功能展示区域
function updateSelectedFeatures(featureId, featureName, isChecked) {
    const selectedFeaturesContainer = $('.selected-features');
    const feature = featurePluginMapping[featureId];
    
    if (isChecked) {
        // 如果是核心功能，先检查是否已存在
        if (feature?.isCore) {
            if (selectedFeaturesContainer.find(`[data-feature-id="${featureId}"]`).length > 0) {
                return; // 如果已存在，则不重复加
            }
        }
        
        // 添加功能标签
        const featureTag = `
            <div class="selected-feature-tag" data-feature-id="${featureId}">
                ${featureName}
                ${!feature?.isCore ? '<span class="remove-tag">&times;</span>' : ''}
            </div>
        `;
        selectedFeaturesContainer.append(featureTag);
        
        // 只为非核心功能绑定删除事件
        if (!feature?.isCore) {
            selectedFeaturesContainer.find(`.selected-feature-tag[data-feature-id="${featureId}"] .remove-tag`)
                .click(function() {
                    $(`#feature_${featureId}`).prop('checked', false).trigger('change');
                    $(this).closest('.selected-feature-tag').remove();
                });
        }
    } else {
        // 只移除非核心功能的标签
        if (!feature?.isCore) {
            selectedFeaturesContainer.find(`.selected-feature-tag[data-feature-id="${featureId}"]`).remove();
        }
    }
}

// 更新相关插件
function updateRelatedPlugins(featureId, isChecked) {
    const feature = featurePluginMapping[featureId];
    
    if (!feature) return;
    
    feature.plugins.forEach(pluginId => {
        const pluginCard = $(`#${pluginId}`).closest('.plugin-card');
        const pluginCheckbox = $(`#${pluginId}`);

        if (isChecked) {
            pluginCheckbox.prop('checked', true);
            pluginCard.removeClass('disabled').addClass('selected');
        } else {
            // 检查是否有其他选中的功能需要这个插件
            const isNeededByOtherFeatures = Object.entries(featurePluginMapping)
                .some(([id, f]) => 
                    id !== featureId && 
                    f.plugins.includes(pluginId) && 
                    $(`#feature_${id}`).prop('checked')
                );
            
            if (!isNeededByOtherFeatures) {
                pluginCheckbox.prop('checked', false);
                pluginCard.addClass('disabled').removeClass('selected');
            }
        }
    });
}

// 更新功能选择区域的HTML
function updateFeaturesSection() {
    const featuresSection = $('.features-selector');
    const alphabetIndex = generateAlphabetIndex();
    
    let html = `
        <div class="features-header">
            <h3 class="features-title">功能选择</h3>
        </div>
        <div class="selected-features"></div>
        <div class="row">
            <div class="col-md-2">
                <div class="category-nav">
                    ${Object.entries(categories).map(([key, name]) => `
                        <a class="nav-link ${key === 'all' ? 'active' : ''}" data-category="${key}" href="#">
                            ${name}
                        </a>
                    `).join('')}
                </div>
            </div>
            <div class="col-md-10">
                <div class="index-search-container">
                    <div class="alphabet-index">
                        ${alphabetIndex.map(({letter, active}) => `
                            <span class="letter ${active ? '' : 'disabled'}">${letter}</span>
                        `).join('')}
                    </div>
                    <div class="features-search">
                        <input type="text" class="form-control" placeholder="搜索功能...">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div class="features-grid">
                    ${Object.entries(featurePluginMapping).map(([id, feature]) => `
                        <div class="feature-item ${feature.isCore ? 'core-feature' : ''}" data-category="${feature.category}" data-id="${id}">
                            <div class="form-check d-flex align-items-center">
                                <input class="form-check-input feature-checkbox" 
                                       type="checkbox" 
                                       id="feature_${id}" 
                                       value="${id}"
                                       ${feature.isCore ? 'checked disabled' : ''}>
                                <label class="form-check-label" for="feature_${id}">
                                    ${feature.name}
                                    ${feature.isCore ? '<span class="badge bg-secondary">必选</span>' : ''}
                                </label>
                                ${!feature.isCore ? `
                                    <div class="feature-info-icon ms-2" data-feature-id="${id}">
                                        <i class="fas fa-info-circle text-muted"></i>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    featuresSection.html(html);
    
    // 绑定搜索功能
    bindSearchFeature();
    
    // 绑定功能提示事件
    bindFeatureInfoEvents();
}

// 绑定搜索功能
function bindSearchFeature() {
    const searchInput = $('.features-search input');
    
    searchInput.on('input', function() {
        const searchText = $(this).val().toLowerCase();
        
        $('.feature-item').each(function() {
            const featureName = $(this).find('.form-check-label').text().trim().toLowerCase();
            const matches = featureName.includes(searchText);
            
            $(this).toggleClass('search-match', matches && searchText.length > 0);
            $(this).toggleClass('search-no-match', !matches && searchText.length > 0);
        });
    });
}

// 添加按字母筛选功能
function filterFeaturesByLetter(letter) {
    // 移除所有母的高亮
    $('.alphabet-index .letter').removeClass('active');
    
    // 高亮当前选中的字母
    $(`.alphabet-index .letter:contains('${letter}')`).addClass('active');
    
    $('.feature-item').each(function() {
        const featureName = $(this).find('.form-check-label').text().trim();
        $(this).toggleClass('d-none', !featureName.toUpperCase().startsWith(letter));
    });
}

// 添加按分类筛选功能
function filterFeaturesByCategory(category) {
    if (category === 'all') {
        $('.feature-item').removeClass('d-none');
    } else {
        $('.feature-item').each(function() {
            const featureId = $(this).find('.feature-checkbox').val();
            const featureCategory = featurePluginMapping[featureId]?.category;
            $(this).toggleClass('d-none', featureCategory !== category);
        });
    }
}

// 初始化核心功能
function initializeCoreFeature() {
    const coreFeature = $('.feature-item.core-feature');
    const coreCheckbox = coreFeature.find('.feature-checkbox');
    
    // 确保核心功能始终选中且禁用
    coreCheckbox.prop('checked', true).prop('disabled', true);
    
    // 添加到已选功能区域
    updateSelectedFeatures('coreFeature', '核心功能', true);
    
    // 更新相关插件
    updateRelatedPlugins('coreFeature', true);
}

// 添加功能提示事件绑定
function bindFeatureInfoEvents() {
    let tooltipTimeout;
    
    $('.feature-info-icon').hover(
        function() {
            const featureId = $(this).data('feature-id');
            const feature = featurePluginMapping[featureId];
            if (!feature) return;
            
            // 移除已存在的提示框
            $('.feature-plugins-tooltip').remove();
            
            // 创建提示框
            const tooltip = $('<div class="feature-plugins-tooltip"></div>');
            
            // 获取相关插件信息
            const pluginsInfo = getPluginsInfo(feature.plugins);
            
            // 生成提示内容
            const tooltipContent = `
                <div class="tooltip-header">
                    <div class="tooltip-title">
                        <div class="title-content">
                            ${feature.name}
                            <span class="feature-version">v${currentVersion}</span>
                        </div>
                        <span class="plugin-tag ${feature.category === 'basic' ? 'info' : 'warning'}">
                            ${feature.category === 'basic' ? 'Aligned Plugins' : 'Agnostic Plugins'}
                        </span>
                    </div>
                    <div class="tooltip-description">${feature.description}</div>
                </div>
                <div class="tooltip-body">
                    <div class="plugins-section">
                        <div class="plugins-section-title">
                            <i class="fas fa-puzzle-piece me-2"></i>依赖插件
                        </div>
                        <div class="plugins-list">
                            ${pluginsInfo.map(plugin => `
                                <div class="plugin-info-item">
                                    <div class="plugin-title-line">
                                        <span class="plugin-name">${plugin.name}</span>
                                        <span class="plugin-version">v${plugin.version}</span>
                                        <span class="plugin-tag ${plugin.category === 'Agnostic Plugins' ? 'warning' : 'info'}">
                                            ${plugin.category}
                                        </span>
                                    </div>
                                    <div class="plugin-description">
                                        ${plugin.description}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            tooltip.html(tooltipContent);
            
            // 计算位置并显示
            const iconPos = $(this).offset();
            const scrollTop = $(window).scrollTop();
            
            tooltip.css({
                top: iconPos.top - scrollTop + 30,
                left: iconPos.left
            }).appendTo('body');
            
            // 为提示框添加hover事件
            tooltip.hover(
                function() {
                    clearTimeout(tooltipTimeout);
                },
                function() {
                    tooltipTimeout = setTimeout(() => {
                        tooltip.remove();
                    }, 200);
                }
            );
        },
        function() {
            tooltipTimeout = setTimeout(() => {
                $('.feature-plugins-tooltip').remove();
            }, 200);
        }
    );
}

// 获取插件信息
function getPluginsInfo(pluginIds) {
    return pluginIds.map(id => {
        // 先在核心插件中查找
        let plugin = plugins.core.find(p => p.id === id);
        // 如果没找到，在扩展插件中查找
        if (!plugin) {
            plugin = plugins.extra.find(p => p.id === id);
        }
        return plugin;
    }).filter(Boolean); // 过滤掉未找到的插件
}

// 添加函数：禁用功能选择
function disableFeatureSelection() {
    const featureCheckboxes = $('.feature-checkbox');
    
    // 先取消选中所有功能
    featureCheckboxes.prop('checked', false);
    
    // 选中并禁用核心功能
    $('.feature-item.core-feature .feature-checkbox').prop('checked', true);
    
    // 禁用所有功能选择
    featureCheckboxes.prop('disabled', true);
    
    // 隐藏所有提示图标
    $('.feature-info-icon').addClass('d-none');
    
    // 添加禁用样式
    $('.feature-item').addClass('disabled');
    $('.feature-item.core-feature').removeClass('disabled').addClass('selected');
}

// 检查未清理的记录数量
function checkPendingRecordsCount() {
    const pendingRecords = $('.generation-record').filter(function() {
        return $(this).find('.clean-status.pending').length > 0;
    }).length;
    
    const generateBtn = $('#generateBtn');
    
    if (pendingRecords >= 3) {
        // 禁用按钮并添加禁用样式
        generateBtn
            .prop('disabled', true)
            .addClass('disabled')
            .css({
                'cursor': 'not-allowed',
                'opacity': '0.65'
            });
            
        // 确保先销毁已存在的 tooltip
        generateBtn.tooltip('dispose');
        
        // 初始化新的 tooltip
        generateBtn.tooltip({
            title: '最多生成 3 个安装包，请首先清理安装包后再进行生成操作',
            placement: 'top',
            trigger: 'hover',
            template: `
                <div class="tooltip generate-btn-tooltip" role="tooltip">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner"></div>
                </div>
            `
        });
    } else {
        // 启用按钮并移除禁用样式
        generateBtn
            .prop('disabled', false)
            .removeClass('disabled')
            .css({
                'cursor': 'pointer',
                'opacity': '1'
            });
            
        // 移除 tooltip
        generateBtn.tooltip('dispose');
    }
}

// 添加新的下载弹框显示函数
function showDownloadModal(showArchSelector = true) {
    const modalHtml = `
        <div class="modal fade" id="downloadModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${showArchSelector ? '选择架构并下载' : '下载安装包'}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="upgrade-modal-container">
                            ${showArchSelector ? `
                            <!-- 左侧架构选择区域 -->
                            <div class="arch-selector">
                                <div class="arch-options">
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchX86" value="x86" checked>
                                        <label class="btn arch-btn" for="upgradeArchX86">x86</label>
                                    </div>
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchArm" value="arm">
                                        <label class="btn arch-btn" for="upgradeArchArm">ARM</label>
                                    </div>
                                    <div class="arch-option">
                                        <input type="radio" class="btn-check" name="upgradeArch" 
                                               id="upgradeArchHybrid" value="hybrid">
                                        <label class="btn arch-btn" for="upgradeArchHybrid">异构</label>
                                    </div>
                                </div>
                            </div>
                            ` : ''}
                            
                            <!-- 右侧下载区域 -->
                            <div class="download-info-panel" ${!showArchSelector ? 'style="padding-left: 0;"' : ''}>
                                <div class="download-sections-container">
                                    <!-- 安装包下载区域 -->
                                    <div class="download-section">
                                        <div class="section-title">
                                            <small class="text-muted">安装包</small>
                                        </div>
                                        <div class="download-options">
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">浏览器下载</small>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-sm download-btn">
                                                    <i class="fas fa-download me-1"></i>直接下载
                                                </button>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">第三方工具下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageUrl">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageUrl">
                                                    https://download.example.com/packages/v4.0.0/x86/package.tar.gz
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">命令行下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageCmd">
                                                    wget https://download.example.com/packages/v4.0.0/x86/package.tar.gz
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">MD5 校验值</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageMd5">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="packageMd5">
                                                    e9c1q52p3m4k5n6b7v8c9x0z1a2s3d4f5g6h7j8k9l0
                                                </div>
                                                <div class="command-example">
                                                    <div class="command-header">
                                                        <small class="text-muted"># 下载完成后验证</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#packageVerifyCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                    <code class="command-code" id="packageVerifyCmd">echo "e9c1q52p3m4k5n6b7v8c9x0z1a2s3d4f5g6h7j8k9l0 package.tar.gz" | md5sum -c</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 签名文件下载区域 -->
                                    <div class="download-section">
                                        <div class="section-title">
                                            <small class="text-muted">签名文件</small>
                                        </div>
                                        <div class="download-options">
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">浏览器下载</small>
                                                    </div>
                                                </div>
                                                <button class="btn btn-primary btn-sm download-btn">
                                                    <i class="fas fa-download me-1"></i>直接下载
                                                </button>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">第三方工具下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signUrl">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signUrl">
                                                    https://download.example.com/packages/v4.0.0/x86/package.tar.gz.sign
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">命令行下载</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signCmd">
                                                    wget https://download.example.com/packages/v4.0.0/x86/package.tar.gz.sign
                                                </div>
                                            </div>
                                            <div class="download-option">
                                                <div class="option-header">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <small class="text-muted">MD5 校验值</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signMd5">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="download-link" id="signMd5">
                                                    a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2
                                                </div>
                                                <div class="command-example">
                                                    <div class="command-header">
                                                        <small class="text-muted"># 下载完成后验证</small>
                                                        <button class="btn btn-link btn-sm copy-btn" data-clipboard-target="#signVerifyCmd">
                                                            <i class="fas fa-copy"></i>
                                                        </button>
                                                    </div>
                                                    <code class="command-code" id="signVerifyCmd">echo "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2 package.tar.gz.sign" | md5sum -c</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 移除已存在的模态框
    $('#downloadModal').remove();
    
    // 添加新的模态框到页面
    $('body').append(modalHtml);
    
    // 初始化复制功能
    initializeClipboard();
    
    // 显示模态框
    const modal = new bootstrap.Modal('#downloadModal');
    modal.show();
    
    // 如果显示架构选择器，绑定架构变化事件
    if (showArchSelector) {
        $('#downloadModal input[name="upgradeArch"]').change(function() {
            const selectedArch = $(this).val();
            updateDownloadInfo(selectedArch);
        });
    }
}

// 初始化复制功能
function initializeClipboard() {
    const clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
        const btn = $(e.trigger);
        const originalHtml = btn.html();
        btn.html('<i class="fas fa-check"></i>');
        setTimeout(() => {
            btn.html(originalHtml);
        }, 1500);
        e.clearSelection();
    });
}