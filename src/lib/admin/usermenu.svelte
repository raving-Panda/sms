<script>

	import { loginWithGoogle, logout, user } from '$lib/fireb';
    import { userState } from "$lib/state.svelte";
    $: if($user!=null)userState.name = $user.displayName
</script>
<li class="dropdown">
          <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="peer mR-10">
              
              {#if $user}
              <img class="w-2r bdrs-50p" src={$user.photoURL} width="128" alt="user avatar">
              {:else}
              <img class="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="">
              {/if}
            </div>
            <div class="peer">
              <span class="fsz-sm c-grey-900">{#if $user}{userState.name}{:else}Login{/if}</span>
            </div>
          </a>
          <ul class="dropdown-menu fsz-sm" aria-labelledby="dropdownMenuLink">
            <li>
              <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-settings mR-10"></i>
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-user mR-10"></i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="email.html" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-email mR-10"></i>
                <span>Messages</span>
              </a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                
                <span>
              {#if $user}
                <button on:click={logout}><i class="ti-power-off mR-10"></i>Logout</button>

              {:else}
                <button on:click={loginWithGoogle}>Signin with Google</button>
              {/if}
                </span>
                    </a>
            </li>
          </ul>
        </li>