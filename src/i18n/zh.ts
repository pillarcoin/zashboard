import type { LANG_MESSAGE } from './en'

const zh: LANG_MESSAGE = {
  setup: '配置',
  overview: '概览',
  proxies: '代理',
  rules: '规则',
  connections: '连接',
  logs: '日志',
  protocol: '协议',
  host: '主机',
  port: '端口',
  password: '密码',
  submit: '提交',
  cancel: '取消',
  download: '下载',
  upload: '上传',
  downloadSpeed: '下载速度',
  uploadSpeed: '上传速度',
  memoryUsage: '内存使用',
  version: '版本',
  quickFilter: '快速过滤',
  noContent: '无内容',
  flushFakeIP: '清空Fake IP',
  chains: '代理链',
  sortBy: '排序方式',
  rule: '规则',
  sourceIP: '源IP',
  activeConnections: '活跃连接',
  closedConnections: '已关闭连接',
  logLevel: '日志等级',
  twoColumnProxyGroup: '双列显示代理组',
  type: '类型',
  process: '进程',
  connectTime: '连接时间',
  sourcePort: '源端口',
  destination: '目标',
  inboundUser: '入站用户',
  dl: '下载',
  ul: '上传',
  dlSpeed: '下载速度',
  ulSpeed: '上传速度',
  settings: '设置',
  speedtestUrl: '测速地址',
  speedtestTimeout: '测速超时',
  connectionStyle: '连接样式',
  card: '卡片',
  table: '表格',
  customTableColumns: '自定义表格列',
  customCardLines: '自定义卡片行',
  close: '关闭',
  details: '详情',
  showGlobalProxy: '显示全局代理节点',
  theme: '主题',
  proxyProvider: '代理提供商',
  ruleProvider: '规则提供商',
  expire: '到期时间',
  noExpire: '不限时',
  updated: '更新于',
  upgradeUI: '更新面板',
  updateAllProviders: '更新所有提供商',
  reloadConfigs: '重载配置',
  mode: '模式',
  proxySortType: '代理排序方式',
  defaultsort: '按配置排序',
  nameasc: '按名称升序',
  namedesc: '按名称降序',
  latencydesc: '按延迟降序',
  latencyasc: '按延迟升序',
  language: '语言',
  automaticDisconnection: '自动断开连接',
  backend: '后端',
  upgradeCore: '更新核心',
  tunMode: 'Tun 模式',
  truncateProxyName: '截断代理名称',
  sourceIPLabels: '源IP标签',
  proxyPreviewType: '代理预览类型',
  auto: '自动',
  dots: '点',
  bar: '条',
  exportSettings: '导出设置',
  importSettings: '导入设置',
  hideUnavailable: '隐藏不可用',
  protocolTips:
    '您正在尝试连接一个http后端但zashboard是通过https提供的，这可能会导致连接错误，请在浏览器设置中允许不安全的内容，设置在浏览器地址栏左侧。',
  global: '全局',
  direct: '直连',
  quickFilterTip: '快速过滤使用正则表达式进行匹配，支持一键排除符合代理链、主机或目标 IP 的连接。',
  lowLatencyDesc: '黄色的阈值',
  mediumLatencyDesc: '红色的阈值',
  fonts: '字体',
  unauthorizedTip: '未授权，请重新登录',
  restartCore: '重启核心',
  autoUpgrade: '自动更新',
  secondaryPath: '二级路径',
  secondaryPathTip: '如果有的话以/开头，没有则留空不填',
  logRetentionLimit: '日志保留条数',
  DNSQuery: 'DNS 查询',
  currentBackendUnavailable: '当前后端不可用，尝试切换到其他后端?',
  confirm: '确定',
  backendSwitchTo: '自动切换到{backend}',
  ipv6Test: 'IPv6 测试',
  socksPort: 'Socks 端口',
  httpPort: 'HTTP 端口',
  mixedPort: 'Mixed 端口',
  redirPort: 'Redir 端口',
  tproxyPort: 'TProxy 端口',
  tableSize: '表格尺寸',
  proxyCardSize: '节点卡片尺寸',
  small: '小',
  normal: '正常',
  large: '大',
  autoCheckWhenStart: '启动时自动检查',
  chinaIP: '中国大陆 IP',
  globalIP: '全球 IP',
}

export default zh
