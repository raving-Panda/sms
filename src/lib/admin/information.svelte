<script>
	import NameForm from "./name_form.svelte";
  import { userState } from "$lib/state.svelte";
</script>


            <div class="row gap-20 masonry pos-r">
              <div class="masonry-sizer col-md-6"></div>

              <div class="masonry-item col-md-6">
                <div class="bgc-white p-20 bd">
                  <h6 class="c-grey-900">Token</h6>
                  <div class="mT-30">
                    <div class="peer">
                            <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">{userState.token}</span>
                          </div>
                  </div>
                </div>
              </div>

                <NameForm/>
                </div>