// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'spiderspace.org',
	version: '0.0.1',
	description: 'community website with a YouTube channel about building it',
	motto: 'weaving web community',
	glyph: '🕸️',
	logo: 'logo.svg',
	logo_alt: 'a galaxy full of twinkling star spiders',
	license: 'MIT',
	public: true,
	homepage: 'https://www.spiderspace.org/',
	repository: 'https://github.com/ryanatkn/spiderspace.org',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/spiderspace.org/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	devDependencies: {
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.129.5',
		'@ryanatkn/gro': '^0.140.0',
		'@ryanatkn/moss': '^0.16.1',
		'@sveltejs/adapter-static': '^3.0.5',
		'@sveltejs/kit': '^2.7.0',
		'@sveltejs/vite-plugin-svelte': '^3.1.2',
		eslint: '^9.12.0',
		'eslint-plugin-svelte': '^2.44.1',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		svelte: '^5.0.0',
		'svelte-check': '^4.0.5',
		tslib: '^2.7.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.8.1',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
} satisfies Package_Json;

export const src_json = {name: 'spiderspace.org', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
