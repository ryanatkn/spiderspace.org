<script lang="ts">
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {spiderspace_logo} from '@ryanatkn/fuz/logos.js';
</script>

<header class="box">
	<h1 class="my_xl5">spiderspace</h1>
	<Svg data={spiderspace_logo} size="var(--icon_size_xl3)" />
	<div class="mt_xl4 shadow_inset_bottom_xs p_sm radius_md">
		<blockquote class="shadow_inset_xs px_xl">weaving web community 🕸️</blockquote>
	</div>
</header>
