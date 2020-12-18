<script>
  export let _id;
  export let url;
	export let images;
	export let price;
  export let currency;
  export let description;
  export let address;
  export let formatter

  const observer = new IntersectionObserver(entries => {
		for (let i = 0; i < entries.length; i += 1) {
			const entry = entries[i];
			if (entry.isIntersecting) {
        entry.target.style.backgroundImage = `url('${entry.target.dataset.src}')`
				observer.unobserve(entry.target);
			}
		}
	}, {
		rootMargin: '100px 0px'
	});

	function lazy(node) {
		observer.observe(node);
		
		return {
			destroy() {
				observer.unobserve(node);
			}	
		}
	}
</script>

<div data-url={url} data-id={_id}>
  <img src={images[0]} alt="">
  <p>
    <strong>{formatter.format(price)} {currency}</strong>
  </p>
  <p class="description">{description}</p>
  <p class="address">{address}</p>
</div>


<style>
  img {
    width: 100%;
    height: auto;
  }

  .address {
    color: #869099;
  }

  strong {
    font-size: 1.4em;
  }
</style>
