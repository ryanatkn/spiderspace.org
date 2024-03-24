<script lang="ts">
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';

	import {package_json, src_json} from '$routes/package.js';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="prose">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1>8000.spiderspace.org</h1>
			<blockquote>supporter community spaces</blockquote>
		</header>
		<Card href="{base}/about">
			<div slot="icon">🕸️</div>
			about
		</Card>
	</section>
	<section>
		<ul>
			<li>
				<a rel="me" href="https://discord.gg/YU5tyeK72X">Discord</a>
			</li>
			<li>
				<a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a>
			</li>
			<li>
				<a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a>
			</li>
			<li>
				<a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a>
			</li>
			<li>
				<a rel="me" href="https://youtube.com/@spiderspace_8000">youtube.com/@spiderspace_8000</a>
			</li>
			<li>
				<a rel="me" href="https://youtube.com/@webdevladder">youtube.com/@webdevladder</a>
			</li>
			<li>
				<a rel="me" href="https://github.com/spiderspace">github.com/spiderspace</a>
			</li>
			<li>
				<a rel="me" href="https://github.com/webdevladder">github.com/webdevladder</a>
			</li>
			<li>
				<a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a>
			</li>
			<li>
				<a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
			</li>
			<li>
				<a rel="me" href="https://twitter.com/webdevladder">twitter.com/webdevladder</a>
			</li>
			<li>
				<a rel="me" href="https://github.com/sponsors/ryanatkn">github.com/sponsors/ryanatkn</a>
			</li>
			<li>
				<a rel="me" href="https://www.patreon.com/ryanatkn">patreon.com/ryanatkn</a>
			</li>
		</ul>
	</section>
	<section>
		<Library_Footer {pkg} />
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
