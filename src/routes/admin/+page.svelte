<script>
	import Footer from "$lib/admin/footer.svelte";
	import Information from "$lib/admin/information.svelte";
	import Sidebar from "$lib/admin/sidebar.svelte";
	import Topbar from "$lib/admin/topbar.svelte";
</script>
<svelte:head>
    <title>Blank2</title>
</svelte:head>

      <Sidebar/>
      <!-- #Main ============================ -->
      <div class="page-container">
       
        <Topbar/>
        <!-- ### $App Screen Content ### -->
        <main class='main-content bgc-grey-100'>
          <div id='mainContent'>
            <div class="full-container">
              
              <Information/>
              
            </div>
          </div>
        </main>
        <Footer/>
      </div>