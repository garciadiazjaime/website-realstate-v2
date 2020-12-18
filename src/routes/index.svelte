<script>
	import { onMount } from 'svelte';
	import successkid from 'images/successkid.jpg';

	import { getPlaces } from '../support/service-client'
	import Card from '../components/Card.svelte';

	let places = []

	onMount(async () => {
		places = await getPlaces()
		console.log(places)
	})

	const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 0
	});
</script>

<style>
	:global(body) {
		padding: 0;
		font-size: 18px;
		margin: 0;
	}
	:global(p) {
		margin: 0;
	}

  ul {
    background: #e8e9ea;
    list-style-type: none;
    padding: 6px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		justify-content: space-evenly;
  }

  li {
    padding: 6px 0;
  }
</style>

<svelte:head>
	<title>Propiedades a la Venta en Tijuana, México</title>
</svelte:head>

<ul>
	{#each places as place}
		<li><Card {...place} formatter={formatter} /></li>
	{/each}
</ul>
