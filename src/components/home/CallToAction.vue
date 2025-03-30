<template>
  <section class="bg-gradient-to-r from-indigo-600 to-blue-500 py-6">
    <div class="text-center m-12 flex flex-col gap-4">
      <h1 class="text-4xl font-extrabold text-white">Ready to Take Control of Your Financial Future?</h1>
      <p class="text-gray-200">
        Join thousands of investors leveraging Investra to manage their portfolios effortlessly. Sign up today and
        transform the way you handle your finances.
      </p>
      <nav class="flex justify-center items-center gap-4 mt-2">
        <RouterLink to="/login" class="px-6 bg-white text-blue-600 py-2 rounded-lg shadow-lg font-bold">
          Get Started Now
        </RouterLink>
        <a
          href="#features"
          class="px-6 border border-white text-white py-2 rounded-lg shadow-lg hover:bg-white hover:text-blue-600 font-bold"
        >
          Learn More
        </a>
      </nav>
    </div>
  </section>
</template>
