<script>
  export let _id;
  export let url;
	export let images;
	export let price;
  export let currency;
  export let description;
  export let address;
  export let formatter

  let imgUrl = ''

  let observer = null
  
  if (process.browser) {
    observer = new IntersectionObserver(onIntersect, {rootMargin: '200px'});
  }

  function onIntersect(entries) {
    if (!imgUrl && entries[0].isIntersecting) {
      imgUrl = images[0];
    }
  }


  function lazyLoad(node) {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node)
      }
    }
  }
</script>

<div data-url={url} data-id={_id}>
  <img src={imgUrl} alt="" use:lazyLoad>
  <p>
    <strong>{formatter.format(price)} {currency}</strong>
  </p>
  <p class="description">{description}</p>
  <p class="address">{address}</p>
</div>


<style>
  img {
    width: 100%;
    height: 244px;
  }

  .address {
    color: #869099;
  }

  strong {
    font-size: 1.4em;
  }
</style>
