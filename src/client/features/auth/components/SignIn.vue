<template>
  <div class="flex flex-col justify-center gap-6 w-1/2 absolute left-0 z-0 translate-x-[-100%] top-5 md:top-[10%]">
    <h1 class="text-3xl font-extrabold text-center">Sign In</h1>
    <nav class="flex gap-4 text-center mx-auto">
      <a href="#"><GoogleIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" /></a>
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
    <p class="text-slate-600 font-normal text-lg pt-2 text-center">Or use your email and password</p>
    <Form
      @submit="emit('submit', $event)"
      :validationSchema="signinSchema"
      class="text-center flex flex-col space-y-4 px-12"
    >
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
      <a href="#" class="text-center text-lg">Forget Your Password?</a>
      <button
        type="submit"
        class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-lg mx-auto"
      >
        SIGN IN
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Field, Form, ErrorMessage} from 'vee-validate'
import GoogleIcon from '../../../assets/icons/Google.vue'
import FaceBookIcon from '../../../assets/icons/FaceBook.vue'
import GitHubIcon from '../../../assets/icons/GitHub.vue'
import LinkedinIcon from '../../../assets/icons/Linkedin.vue'
import {signinSchema} from '../validation/signinSchema'

const emit = defineEmits(['submit'])
</script>
