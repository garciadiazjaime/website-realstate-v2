<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';

	import Card from '../components/Card.svelte';

	export let places = []

	const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 0
	});
</script>

<script context="module">
	export async function preload() {
		const response = await this.fetch('./data/homepage.json')
		const places = await response.json()

		return {
			places,
		}
	}
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
	<title>Venta de Casas en Tijuana | Propiedades, departamentos y terrenos a la venta.</title>
	<meta content="Casas a la venta en Tijuana. Listado de propiedades, departamentos y terrenos en venta. Oportunidades de compra." name="description">
</svelte:head>

<h1>Venta de Casas y Departamentos en Tijuana, México</h1>
<section>
	{#each places as place}
	<Card {...place} formatter={formatter} />
	{/each}
</section>

<h2>Listado de propiedades, departamentos y terrenos en venta</h2>
<p>Tijuana es una ciudad con gran crecimiento y desarrollo inmobiliario, en <strong>venta casa tijuana</strong> te ayudamos con la búsquedad de tu próxima propieadad.</p>
