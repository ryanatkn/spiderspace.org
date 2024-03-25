<script lang="ts">
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Community_Links from '$routes/Community_Links.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	const SUPPORTER_COUNT = 0;
</script>

<main class="prose width_md">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1><small>🕸️</small>spiderspace<small>🕸️</small></h1>
			<blockquote>community spaces for Spiderspace</blockquote>
		</header>
	</section>
	<section class="box w_100">
		<label class="w_100">
			<progress class="w_100" value={SUPPORTER_COUNT} max="8000"></progress>
			<!-- TODO better display -->
			<div class="size_xl"><code>{SUPPORTER_COUNT} / 8000</code></div>
			<div>supporters to sustain</div>
		</label>
		{#if SUPPORTER_COUNT === 0}<aside class="mt_xl">be the first!</aside>{/if}
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
				Greetings, this is a page for funding one web dev's <a href="https://www.ryanatkn.com/"
					>projects</a
				>. I'm an independent software developer and this is an attempt to fund my self-directed
				software development without any investors, sponsors, or other business relationships except
				the simple and aligned relationship I have with the people who enjoy my software, videos,
				and blog posts. My goal is to work for the web on the projects I find meaningful.
			</p>
			<p>
				Quickly about me: in 2011 I got my first job as a professional web developer focusing on JS,
				and 13 years later I'm still enjoying it. Using savings and privilege I was able to spend
				the majority of the time in those years on self-directed programming, which was mostly
				exploration and learning. In 2019 I started seriously attempting to produce reusable
				software with JS and Svelte, and I did it in public while focusing on the development of a
				social web app framework.
			</p>
			<p>
				Today most of my time goes to my projects <a href="https://zzz.ryanatkn.com/">Zzz</a> (the
				app framework, previously "Felt" for 4 years with
				<a href="https://12mod12.com/">Hamilton Reed</a>), <a href="https://www.fuz.dev/">Fuz</a>,
				<a href="https://gro.ryanatkn.com/">Gro</a>, and some of their dependencies and extensions.
				I've been working on them full-time in public since 2019 while living off savings, and I'm
				communicating about them on YouTube with
				<a href="https://youtube.com/@spiderspace_8000">Spiderspace</a>
				and <a href="https://youtube.com/@webdevladder">webdevladder</a>.
			</p>
			<p>
				To fund my projects sustainably, I chose the arbitrary target of 8000 people giving me at
				least $1 USD per month. Today, I have <code>{SUPPORTER_COUNT}</code> supporters.
			</p>
			<p>
				If you want to help me produce software, videos, and blog posts with incentives as pure as
				the + function, you can support me on <a href="https://github.com/sponsors/ryanatkn"
					>GitHub Sponsors</a
				>
				or
				<a href="https://www.patreon.com/ryanatkn">Patreon</a>. Giving me any amount of money gives
				you access to supporter-only community spaces, but don't expect anything particularly
				interesting there.
			</p>
			<p>
				<a href="https://discord.gg/YU5tyeK72X">Join the Discord</a> to get a feel for the vibes, it's
				public-professional and all that entails - I don't aspire to build and moderate large community
				spaces, so for example the Discord doesn't have offtopic channels, but I want to have fun with
				it. The goal is to make an environment where anyone who shows up can have fun around this cluster
				of software projects and technologies.
			</p>
			<aside>
				<Community_Links />
			</aside>
		</div>
	</section>
	<section></section>
	<section>
		<Library_Footer {pkg}>
			<Breadcrumb>🕸️</Breadcrumb>
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
