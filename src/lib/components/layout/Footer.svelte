<script lang="ts">
	import ExternalLink from 'virtual:icons/hugeicons/link-square-02'
</script>

<footer class="footer-wrapper">
	<div class="gradient-line"></div>
	<div class="footer-content">
		<div class="flex items-center gap-2 mb-4">
			<img src="/logo.png" alt="CodeNekt Logo" height="28" width="28" />
			<span class="text-base font-semibold">CodeNekt <span class="gradient-text">Ecosystem</span></span>
		</div>
		<p class="footer-desc">The first Layer 1 blockchain dedicated to decentralized vehicle history and data.</p>
		<div class="social-links">
			<a href="https://x.com/CodeNekt_Eco" target="_blank" class="social-icon" title="X (Twitter)">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
			</a>
			<a href="https://discord.com/invite/5FZwpWJVvD" target="_blank" class="social-icon" title="Discord">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>
			</a>
			<a href="https://t.me/CodeNektEcoPortal" target="_blank" class="social-icon" title="Telegram">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
			</a>
			<a href="https://codenekt-ecosystem.io/" target="_blank" class="social-icon" title="Website">
				<ExternalLink />
			</a>
		</div>
		<div class="footer-bottom">
			<span class="copyright">&copy; {new Date().getFullYear()} CodeNekt Ecosystem. All rights reserved.</span>
			<span class="separator">|</span>
			<a class="powered-by" href="https://www.amichain.org/" target="_blank">
				Powered by AMIChain
			</a>
		</div>
	</div>
</footer>

<style lang="postcss">
	@reference "$lib/../app.css";
	.footer-wrapper {
		@apply mt-auto w-full;
	}
	.gradient-line {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(229, 32, 32, 0.4), rgba(255, 112, 0, 0.3), transparent);
	}
	.footer-content {
		@apply flex flex-col items-center py-8 px-4 text-sm;
		background: rgba(8, 8, 14, 0.6);
		backdrop-filter: blur(8px);
	}
	.footer-desc {
		color: rgba(232, 232, 240, 0.4);
		@apply mb-5 max-w-md text-center text-sm;
	}
	.social-links {
		@apply flex items-center gap-3 mb-5;
	}
	.social-icon {
		@apply flex items-center justify-center rounded-lg p-2.5;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.06);
		color: rgba(232, 232, 240, 0.6);
		transition: all 0.2s ease;
		&:hover {
			color: #e52020;
			background: rgba(229, 32, 32, 0.08);
			border-color: rgba(229, 32, 32, 0.2);
		}
	}
	.footer-bottom {
		@apply flex items-center gap-2 flex-wrap justify-center;
		color: rgba(232, 232, 240, 0.3);
	}
	.separator {
		color: rgba(232, 232, 240, 0.15);
	}
	.powered-by {
		transition: color 0.2s ease;
		&:hover {
			color: rgba(232, 232, 240, 0.6);
		}
	}
</style>
