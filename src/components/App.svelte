<script lang="ts">
	import { onMount } from 'svelte';
	import type { IProfileResp } from '../types';
	import Hideable from './Hideable.svelte';
	import Intro from './Intro.svelte';
	import Kofi from './Kofi.svelte';
	import Work from './Work.svelte';

	let profile: IProfileResp;

	$: dataLink = `${sourceLink}/blob/main/static/data/profile.json`;
	$: ({
		intro = {} as IProfileResp['intro'],
		projects = [],
		technologies = [],
		workExperiences = [],
		extracurricularActivities = [],
		educations = [],
		interests = [],
		certificates = [],
		awards = [],
		resumeUrl: { sourceLink = '', fullVersionLink = '' } = {}
	} = profile || {});

	onMount(async () => (profile = await fetchResumeProfile()));

	async function fetchResumeProfile() {
		const resp = await fetch('/data/profile.json');
		return await resp.json();
	}
</script>

<!-- Remove this is you does not want Kofi widget on your site -->
<!-- {#if intro.github == 'narze'}
	<Kofi name={intro.github} />
{/if} -->

<header class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen">
	<h1 class="text-4xl">Resumette</h1>
	<h3>
		<button on:click={() => window.print()} class="underline text-lg">[Print]</button>
	</h3>
	<p>
		Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden
		on print.
	</p>
	<p>You can click at any sections or lines hide some information before printing.</p>
	<a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
	<a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
	<Intro {...intro} />

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Education</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each educations as edu}
					<Hideable>
						<li>
							<strong>{edu.head}</strong>, {edu.details}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Experiences</h2>
			<hr />

			{#each workExperiences as exp}
				<Work {...exp} />
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Extracurricular Activities</h2>
			<hr />

			{#each extracurricularActivities as act}
				<Work {...act} />
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Certifications</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each certificates as certificate}
					<Hideable>
						<li>
							<strong>{certificate.head}</strong>
							- {certificate.details}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Awards and Participations</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each awards as award}
					<Hideable hide={award.hide}>
						<li>
							<strong>{award.name}</strong>
							{award.details}
							<a href="https://{award.url}" target="_blank" rel="noreferrer"
								><strong>{award.url}</strong></a
							>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Projects</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each projects as project}
					<Hideable hide={project.hide} >
						<li class="mb-1">
							<strong>{project.name}</strong>
							- {project.details}
							<a href="https://{project.url}" target="_blank" rel="noreferrer"
								><strong>{project.url}</strong></a
							>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<!-- <section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Interests</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each interests as interest}
					<Hideable>
						<li>
							{interest}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section> -->

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Technologies and Languages</h2>
			<hr />
			<ul class="text-left list-disc pl-8">
				{#each technologies as tech}
					<Hideable>
						<li>
							<div class="flex">
								<span class="basis-40 print:basis-28 inline-block shrink-0">{tech.section}</span>
								<span>{tech.details}</span>
							</div>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<footer class="print-only">
		(See <a href={fullVersionLink} target="_blank" rel="noopener">full version</a>
		or <a href={sourceLink} target="_blank" rel="noopener">source code</a>)
	</footer>
</main>

<style lang="postcss">
	main {
		overflow-x: hidden;
	}

	a {
		text-decoration: underline;
	}

	section {
		@apply my-6;
	}

	section h2 {
		@apply font-semibold text-lg;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		* {
			@apply text-2xs;
		}

		:global(.print-only) {
			display: inherit;
		}

		:global(.web-only) {
			display: none;
		}

		ul {
			@apply pl-6;
		}

		section {
			@apply my-3;
		}

		section hr {
			@apply mt-0 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}
	}
</style>
