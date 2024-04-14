<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Spiderspace_Logo from '@ryanatkn/fuz/Spiderspace_Logo.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Community_Links from '$routes/Community_Links.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="width_md">
	<section class="box">
		<header class="box">
			<h1 class="mb_sm"><small>🕸️</small>spiderspace<small>🕸️</small></h1>
			<Spiderspace_Logo size="var(--icon_size_xl3)" />
			<blockquote class="mt_sm">weaving web community</blockquote>
		</header>
	</section>
	<section class="panel p_md shadow_md w_100">
		<div class="panel bg p_md">
			<h2 class="size_xl5 box row wrap">
				<!--<a href="https://www.spiderspace.org/"></a>--><a
					title="Zzz - social web app framework"
					href="https://zzz.ryanatkn.com/">💤</a
				><a title="Moss - CSS framework" href="https://moss.ryanatkn.com/">🌿</a><a
					title="Fuz - Svelte UI library"
					href="https://www.fuz.dev/">🧶</a
				><a
					title="Gro - task runner and toolkit extending SvelteKit"
					href="https://gro.ryanatkn.com/">🌰</a
				><a
					title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro"
					href="https://template.fuz.dev/">❄</a
				>
			</h2>
			<p>
				Welcome, this is a placeholder website for Spiderspace, which will be a community website
				with <a href="https://youtube.com/@spiderspace_8000">a YouTube channel</a> about building it.
			</p>
			<aside>
				<Community_Links />
			</aside>
		</div>
	</section>
	<section>
		<Library_Footer {pkg}>
			{#snippet logo_header()}
				<a class="mb_md" href="{base}/about">🕸️ about 🕸️</a>
			{/snippet}
		</Library_Footer>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
		word-break: break-all;
	}
</style>
