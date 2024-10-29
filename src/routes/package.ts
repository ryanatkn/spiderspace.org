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
		'@ryanatkn/fuz': '^0.130.2',
		'@ryanatkn/gro': '^0.143.3',
		'@ryanatkn/moss': '^0.18.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.7.3',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		eslint: '^9.13.0',
		'eslint-plugin-svelte': '^2.46.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		svelte: '^5.1.4',
		'svelte-check': '^4.0.5',
		tslib: '^2.8.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.12.1',
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
