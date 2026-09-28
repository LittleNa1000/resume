<script lang="ts">
	export let name: string = 'Naphan Choatchuangnapha';
	export let nickname: string = 'Little';
	export let phone: string = '';
	export let email: string = '';
	export let github: string = '';
	export let linkedin: string = '';
	export let location: string = '';
	export let website: string = '';
</script>

<div class="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base items-center">
	<div class="flex-1 text-left w-48 md:text-base lg:text-lg print:text-2xs print:leading-4">
		<p><a href={`tel:${phone}`}>{phone}</a></p>
		<p><a href={`mailto:${email}`}>{email}</a></p>
		<p>{location}</p>
	</div>

	<h2
		class="flex-none order-first sm:order-none print:order-none print:text-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center px-4 print:pt-0"
	>
		{name}
		<span class="block mt-0 text-base lg:text-2xl">({nickname})</span>
	</h2>

	<div
		class="flex-1 text-left md:text-right print:text-right w-48 md:text-base lg:text-lg print:text-2xs print:leading-4"
	>
		<p>
			<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer"
				>github.com/{github}</a
			>
		</p>
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
		<p>
			<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
