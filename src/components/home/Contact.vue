<template>
  <section id="contact" class="bg-gray-100 py-16 scroll-m-10">
    <div class="text-center flex flex-col gap-4 mx-8">
      <h1 class="text-3xl font-extrabold">Get in Touch</h1>
      <p class="text-slate-600">
        Have questions or need assistance? We'd love to hear from you. Reach out and we'll get back
        to you shortly.
      </p>
      <div class="bg-white p-6 text-start w-5/6 md:w-3/5 lg:w-1/2 mx-auto rounded-lg shadow-lg">
        <form action="" method="post" class="flex flex-col gap-2">
          <label for="name">Your Name</label>
          <input type="text" id="name" placeholder="John Doe" class="border rounded-lg p-2 mb-2" />
          <label for="email">Your Email</label>
          <input
            type="text"
            id="email"
            placeholder="you@example.com"
            class="border rounded-lg p-2 mb-2"
          />
          <label for="message">Your Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="8"
            placeholder="Write your message here..."
            class="border rounded-lg p-2 mb-2"
          ></textarea>
          <button
            type="submit"
            class="bg-indigo-600 text-white py-2 mt-2 rounded-lg shadow-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div class="mt-4 flex flex-col items-center justify-center gap-4">
        <p class="text-slate-600">Or Connect with us on:</p>
        <div class="flex gap-4">
          <a href="#" class="h-6 w-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 462.799"
            >
              <path
                fill-rule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </a>
          <a href="#" class="h-6 w-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 509 507.14"
            >
              <path
                fill-rule="nonzero"
                d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
              />
            </svg>
          </a>
          <a href="#" class="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 509.64"
            >
              <rect width="512" height="509.64" rx="115.61" ry="115.61" />
              <path
                fill="#fff"
                d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
              />
            </svg>
          </a>
          <a href="#" class="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              preserveAspectRatio="xMidYMid meet"
              alt="Slack Logo"
            >
              <title>Slack Logo SVG</title>
              <path
                d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                fill="#36C5F0"
              />
              <path
                d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                fill="#2EB67D"
              />
              <path
                d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                fill="#ECB22E"
              />
              <path
                d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                fill="#E01E5A"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
