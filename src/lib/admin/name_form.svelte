)<script>
    import { userState } from "$lib/state.svelte";
    function updateName() {userState.name=document.getElementById('nameInput').value}
</script>


<div class="masonry-sizer col-md-6"></div>
              <div class="masonry-item col-md-6">
                <div class="bgc-white p-20 bd">
                  <h6 class="c-grey-900">Update Name</h6>
                  <div class="mT-30">
                    <form>
                      <div class="mb-3">
                        <label class="form-label" for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder={userState.name}>
                        <small id="emailHelp" class="text-muted">We'll never share your data with anyone else.</small>
                      </div>
                      <button type="submit" onclick={updateName} class="btn btn-primary btn-color">Submit</button>
                    </form>
                  </div>
                </div>
              </div>