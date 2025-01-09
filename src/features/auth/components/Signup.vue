<template>
  <div
    class="flex flex-col mx-auto justify-center gap-4 w-1/2 absolute right-0 z-10 top-5 md:top-[10%]"
  >
    <h1 class="text-3xl font-extrabold text-center">Create Account</h1>
    <nav class="flex items-center justify-center gap-4 text-center">
      <a href="#"
        ><GoogleIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg"
      /></a>
      <a href="#">
        <FaceBookIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
      </a>
      <a href="#">
        <GitHubIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
      </a>
      <a href="#">
        <LinkedinIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
      </a>
    </nav>
    <p class="text-slate-600 font-normal text-lg pt-2 text-center">
      Or use your email for registration
    </p>
    <Form
      @submit="emit('submit', $event)"
      :validationSchema="signupSchema"
      class="text-center flex flex-col space-y-4 px-12"
    >
      <Field
        name="name"
        type="text"
        placeholder="Name"
        class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
      />
      <ErrorMessage name="name" class="text-red-500" />
      <Field
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
      />
      <ErrorMessage name="email" class="text-red-500" />
      <Field
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
      />
      <ErrorMessage name="password" class="text-red-500" />
      <button
        type="submit"
        class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-lg mx-auto mt-2"
      >
        SIGN UP
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate'
import GoogleIcon from '../../../components/icons/Google.vue'
import FaceBookIcon from '../../../components/icons/FaceBook.vue'
import GitHubIcon from '../../../components/icons/GitHub.vue'
import LinkedinIcon from '../../../components/icons/Linkedin.vue'
import { signupSchema } from '../validation/signupSchema'

const emit = defineEmits(['submit'])
</script>
