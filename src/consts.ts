输出 const INIT_DELAY = 0.3
输出 const ANIMATION_DELAY = 0.1
输出 const CARD_SPACING = 36
输出 const CARD_SPACING_SM = 24

/**
 * GitHub 仓库配置
 */
输出 const GITHUB_CONFIG = {
	拥有者: process.env.NEXT_PUBLIC_GITHUB_OWNER || 'wzjtv',
	REPO: process.env.NEXT_PUBLIC_GITHUB_REPO || '2025-blog-public',
	分支: process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main',
	APP_ID: process.env.NEXT_PUBLIC_GITHUB_APP_ID || '-'
} as const
