<template>
  <div class="h-screen">
      <nav class="h-14 bg-white px-12 flex items-center justify-center w-screen clearfix">
          <p class="p-3 bg-grey-lighter rounded mr-4 w-1" justify-center></p>
          <p class="py-5 bg-red rounded mr-8 w-32"></p justify-center>
          <div class="w-4/5">
            <p class="bg-grey-lighter py-4 w-3/4 mx-10 rounded"></p>
          </div>
            <p class="p-3 bg-grey-lighter rounded mr-8 w-1"></p>
            <p class="p-3 bg-grey-lighter rounded  mr-5 w-1"></p>
            <p class="p-4 bg-blue-darker rounded-full  w-4"></p>
      </nav>
      <div class="h-full flex m-4 flex-inline">
        <div class="w-3/4 mr-4">
          <div class="bg-black h-528 relative">            
            <div class="bg-grey-darkest h-10 absolute pin-b pin-l w-full">            
            </div>
          </div>
        </div>
        <div class="w-1/4 mb-4">
          <div class="bg-white h-full"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeComponent'
}
</script>

