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
		'@ryanatkn/belt': '^0.29.0',
		'@ryanatkn/eslint-config': '^0.6.0',
		'@ryanatkn/fuz': '^0.131.2',
		'@ryanatkn/gro': '^0.148.0',
		'@ryanatkn/moss': '^0.20.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.11.0',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		eslint: '^9.16.0',
		'eslint-plugin-svelte': '^2.46.1',
		prettier: '^3.4.2',
		'prettier-plugin-svelte': '^3.3.2',
		svelte: '^5.11.2',
		'svelte-check': '^4.1.1',
		tslib: '^2.8.1',
		typescript: '^5.7.2',
		'typescript-eslint': '^8.18.0',
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
