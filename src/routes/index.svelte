<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';

	import { getPlaces } from '../support/service-client'
	import Card from '../components/Card.svelte';

	let places = []

	onMount(async () => {
		places = await getPlaces()
	})

	const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 0
	});
</script>

<style>
  section {
		display: grid;
		grid-column-gap: 20px;
		grid-row-gap: 12px;
		margin: 10px;
		padding: 15px;
		grid-template-columns: repeat( auto-fit, minmax(48%, 1fr) );
  }
</style>

<svelte:head>
	<title>Venta de Casas, Departamentos en Tijuana, México</title>
	<meta content="Venta de Casas y Deparmentos en Tijuana, México" name="description">
</svelte:head>

<h1>Venta de Casas y Departamentos en Tijuana, México</h1>
<section>
	{#each places as place}
	<Card {...place} formatter={formatter} />
	{/each}
</section>
