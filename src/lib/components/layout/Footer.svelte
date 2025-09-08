<script lang="ts">
	import ExternalLink from 'virtual:icons/hugeicons/link-square-02'
</script>

<div class="flex py-4 mt-auto w-full text-sm bg-base-300">
	<div class="mx-auto flex items-center gap-1">
		<span>Built by</span>
		<img src="/logo.png" alt="AMI Logo" height="18px" width="18px" class="ml-1 mr-0.5" />
		<span>Team</span>
		<span class="-mb-1">&copy;</span>
		<span>{new Date().getFullYear()}</span>
		<span class="mx-2">-</span>
		<a class="flex items-center gap-1 hover:link" href="https://x.com/amichainORG" target="_blank">
			<span>Explorer as a Service (EaaS)</span>
			<ExternalLink />
		</a>
	</div>
</div>
