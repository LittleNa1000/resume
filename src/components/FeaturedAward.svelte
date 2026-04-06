<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string = '';
	export let years: string[] = [];
	export let details: string[] = [];
</script>

<div class="featured-award">
	<Hideable>
		<div class="flex font-bold mb-1 print:mb-1 flex-col">
			<div class="flex text-lg print:text-[15px] print:leading-[22px]">
				<div class="flex-2 text-left">{position}</div>
				<div class="flex-1 text-right">{years.join('-')}</div>
			</div>
		</div>
		<ul class="text-left list-disc pl-8 print:pl-6">
			{#each details as detail}
				<Hideable>
					<li>
						{detail}
					</li>
				</Hideable>
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.featured-award {
		@apply my-4;
	}

	@media print {
		.featured-award {
			@apply my-1;
		}
	}
</style>
