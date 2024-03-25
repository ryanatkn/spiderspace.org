<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Community_Links from '$routes/Community_Links.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="prose width_md">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1><small>🕸️</small>spiderspace<small>🕸️</small></h1>
			<blockquote>community spaces for Spiderspace</blockquote>
		</header>
	</section>
	<section class="panel p_md shadow w_100">
		<div class="panel bg p_md">
			<h2>
				<!--<a href="https://www.spiderspace.org/"></a>--><a
					title="zzz - social web app framework"
					href="https://zzz.ryanatkn.com/">💤</a
				><a title="fuz - friendly user zystem" href="https://www.fuz.dev/">🧶</a><a
					title="gro - task runner and toolkit extending SvelteKit"
					href="https://gro.ryanatkn.com/">🌰</a
				><a
					title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro"
					href="https://template.fuz.dev/">❄</a
				>
			</h2>
			<p>
				Welcome, this is the placeholder website for Spiderspace, a work in progress community site.
				For now see the links below and <a href="{base}/funding">the funding page</a> for more info.
			</p>
			<aside>
				<Community_Links />
			</aside>
		</div>
	</section>
	<section>
		<Card href="{base}/funding"
			><div slot="icon">🕸️</div>
			funding</Card
		>
	</section>
	<section>
		<Library_Footer {pkg}>
			<a class="mb_md" href="{base}/about">🕸️ about 🕸️</a>
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
