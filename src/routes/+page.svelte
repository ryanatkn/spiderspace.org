<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Spiderspace_Logo from '@ryanatkn/fuz/Spiderspace_Logo.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Community_Links from '$routes/Community_Links.svelte';
	import Project_Links from '$routes/Project_Links.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="width_md">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3"><small>🕸️</small>spiderspace<small>🕸️</small></h1>
			<Spiderspace_Logo size="var(--icon_size_xl3)" />
			<div class="mt_xl shadow_outset_xs p_sm radius_md">
				<blockquote class="shadow_inset_xs px_xl">weaving web community 🕸️</blockquote>
			</div>
		</header>
	</section>
	<section class="panel pl_md pt_sm pb_xs pr_xs2 shadow_xs w_100">
		<div class="panel bg p_lg shadow_sm">
			<p>
				Welcome, this is a placeholder website for Spiderspace, which will be a community website
				with <a href="https://youtube.com/@spiderspace_8000">a YouTube channel</a> about building
				it. Coming sometime in 2024 when <a href="https://github.com/ryanatkn/zzz">Zzz</a> is ready.
			</p>
			<aside>
				<Community_Links />
			</aside>
			<nav class="size_xl5 box row wrap">
				<Project_Links />
			</nav>
		</div>
	</section>
	<section class="mt_sm shadow_outset_xs p_lg radius_lg">
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
