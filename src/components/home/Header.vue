<template>
  <header
    id="header"
    class="sticky top-0 z-10 shadow-md flex justify-between py-4 pl-2 pr-6 bg-gray-50"
  >
    <section>
      <a href="/" class="flex my-auto">
        <img
          src="../../assets/investra_logo.png"
          alt="Investra Logo"
          class="h-10 w-20 my-auto object-cover header-logo"
          draggable="false"
        />
        <h1 class="text-2xl md:text-3xl text-blue-700 font-bold m-2 hidden min-[330px]:block">
          Investra
        </h1>
      </a>
    </section>
    <section class="flex space-x-6">
      <nav class="my-auto hidden md:block space-x-6">
        <a href="#hero" class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Home</a
        >
        <a
          href="#features"
          class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Features</a
        >
        <!-- <a
          href="#insights"
          class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Insights</a
        > -->
        <a
          href="#testimonials"
          class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Testimonials</a
        >
        <!-- <a
          href="#pricing"
          class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Pricing</a
        > -->
        <a
          href="#contact"
          class="cursor-pointer text-slate-600 hover:text-blue-700 transition-colors"
          >Contact Us</a
        >
      </nav>
      <a
        href="/login"
        class="bg-blue-600 text-white px-6 py-3 text-center my-auto rounded shadow cursor-pointer"
        >Login</a
      >
    </section>
  </header>
</template>

<style scoped>
.header-logo {
  object-position: 0 25%;
}
</style>
