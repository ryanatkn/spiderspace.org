<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '$routes/moss.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Contextmenu_Root from '@ryanatkn/fuz/Contextmenu_Root.svelte';
	import {contextmenu_action} from '@ryanatkn/fuz/contextmenu_state.svelte.js';
	import type {Snippet} from 'svelte';
	import {sync_color_scheme, Themer} from '@ryanatkn/fuz/themer.svelte.js';

	import Settings from '$routes/Settings.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	let show_settings = $state(false);

	// TODO this doesn't currently support loading light mode from storage on startup to avoid a FOUC, will need a second hashed script for sites that default to dark
	// TODO forcing dark mode is awkward
	const themer = new Themer(undefined, 'dark');
	sync_color_scheme(themer.color_scheme); // TODO probably shouldn't be needed
</script>

<svelte:head>
	<title>spiderspace.org</title>
</svelte:head>

<svelte:body
	use:contextmenu_action={[
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	]}
/>

<!-- TODO this isn't working -->
<Themed {themer}>
	<Contextmenu_Root>
		{@render children()}
		{#if show_settings}
			<Dialog onclose={() => (show_settings = false)}>
				<div class="pane p_md width_md mx_auto">
					<Settings />
				</div>
			</Dialog>
		{/if}
	</Contextmenu_Root>
</Themed>
