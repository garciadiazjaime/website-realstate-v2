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
  ul {
    list-style-type: none;
		border: 1px solid black;
		margin: 0;
		padding: 0;
  }
</style>

<svelte:head>
	<title>Venta de Casas, Departamentos en Tijuana, México</title>
	<meta content="Venta de Casas y Deparmentos en Tijuana, México" name="description">
</svelte:head>

<ul>
	{#each places as place}
		<li><Card {...place} formatter={formatter} /></li>
	{/each}
</ul>
