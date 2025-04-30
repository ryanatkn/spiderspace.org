<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import Community_Links from '@ryanatkn/fuz/Community_Links.svelte';
	import Project_Links from '@ryanatkn/fuz/Project_Links.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Header from '$routes/Header.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json, src_json);
</script>

<main class="width_md">
	<section class="box">
		<Header />
	</section>
	<section class="panel pl_md pt_sm pb_xs pr_xs2 shadow_xs w_100">
		<div class="panel bg p_lg shadow_sm">
			<p>
				Welcome, this is a placeholder website for Spiderspace, which will be a community website
				with <a href="https://youtube.com/@spiderspace_8000">a YouTube channel</a> about building
				it. Coming sometime in late 2025 or 2026 when
				<a href="https://github.com/ryanatkn/zzz">Zzz</a> is ready.
			</p>
			<aside>
				<Community_Links />
			</aside>
			<nav class="size_xl5 box row flex_wrap">
				<Project_Links />
			</nav>
		</div>
	</section>
	<section class="mt_sm shadow_inset_bottom_xs p_lg radius_lg mb_xl8">
		<Docs_Footer {pkg}>
			{#snippet logo_header()}
				<a class="mb_md" href="{base}/about">🕸️ about 🕸️</a>
			{/snippet}
		</Docs_Footer>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
