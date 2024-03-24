<script lang="ts">
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
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
