<script lang="ts">
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';

	import {package_json, src_json} from '$routes/package.js';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="prose width_md">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1>8000.spiderspace.org</h1>
			<blockquote>community spaces for Spiderspace supporters</blockquote>
		</header>
	</section>
	<section class="panel p_md">
		<p>
			It's 2024 when I'm writing this and we as a web are currently searching for sustainable ways
			to fund free and open source software. I'm a software developer and this is my evolving
			attempt at funding my projects without any investors, sponsors, or other business partnerships
			in the mix.
		</p>
		<p>
			I started as a professional web developer focusing on JS in 2011, and 13 years later I'm still
			enjoying it. My goal is to work for the web on the projects I find meaningful. Currently
			that's my projects <a href="https://www.fuz.dev/">Fuz</a>,
			<a href="https://gro.ryanatkn.com/">Gro</a>, the (not yet published) social app framework
			<a href="https://zzz.fuz.dev/">Zzz</a>, and many of their dependencies. I've been working on
			them full-time in public since 2019 while living off my savings, and I'm communicating about
			them on YouTube with
			<a href="https://youtube.com/@spiderspace_8000">Spacespace</a>
			and <a href="https://youtube.com/@webdevladder">webdevladder</a>.
		</p>
		<p>
			If you want to see more software and videos and blog posts from me where my incentives are as
			pure as the + function, this website has links for supporting me. Giving me any amount of
			money gives you access to supporter-only community spaces. <a
				href="https://discord.gg/YU5tyeK72X">Join the Discord</a
			> to get a feel for the vibes.
		</p>
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
		<Card href="{base}/about">
			<div slot="icon">🕸️</div>
			about
		</Card>
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
