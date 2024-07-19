<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Header from '$routes/Header.svelte';

	const pkg = parse_package_meta(package_json, src_json);

	// TODO standardize
</script>

<main class="width_md">
	<section class="box">
		<Header />
		<div class="mt_xl3">
			<Breadcrumb>{package_json.glyph}</Breadcrumb>
		</div>
	</section>
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Library_Footer {pkg}>
			<div class="mb_xl">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
			</div>
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
</style>
