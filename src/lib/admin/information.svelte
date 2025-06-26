<script>
	import NameForm from "./name_form.svelte";
  import { userState } from "$lib/state.svelte";
  import { token } from "$lib/fireb";
</script>


            <div class="row gap-20 masonry pos-r">
              <div class="masonry-sizer col-md-6"></div>

              <div class="masonry-item col-md-6">
                <div class="bgc-white p-20 bd">
                  <h6 class="c-grey-900">Notification : {#if userState.token != "off"} ON {:else} OFF {/if}</h6>
                  <div class="mT-30">
                    <div class="peer">
                        <button type="button" onclick={token} class="btn cur-p btn-primary btn-color">Register</button>
                      </div>
                  </div>
                </div>
              </div>

                <NameForm/>
                </div>