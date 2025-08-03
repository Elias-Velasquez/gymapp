<template>
  <div class="page error-bg" id="particles-js">
    <!-- Start::error-page -->
    <div class="error-page">
      <div class="container">
        <div class="text-center p-5 my-auto">
          <div class="row align-items-center justify-content-center h-100">
            <div class="col-xl-7">
              <p class="error-text mb-sm-0 mb-2">401</p>
              <p class="fs-18 fw-semibold mb-3">Oops &#128557;, The page you are looking for is not available.</p>
              <div class="row justify-content-center mb-5">
                <div class="col-xl-6">
                  <p class="mb-0 op-7">We are sorry for the inconvenience, The page you are trying to access has been
                    removed or never existed.</p>
                </div>
              </div>
              <router-link to="/dashboard/crm" class="btn btn-primary">
                <i class="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO HOME
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Particles :options="particleOptions" />
  </div>

  <!-- Particles component using correct object binding -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      particleOptions: {
        background: {
          color: {
            value: '#0d47a1',  // Background color of the canvas
          },
        },
        fpsLimit: 120,  // Frames per second
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',  // What happens when you click the particles
            },
            onHover: {
              enable: true,
              mode: 'repulse',  // What happens when you hover over the particles
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,  // How many particles to add when clicked
            },
            repulse: {
              distance: 200,  // Repulse distance
              duration: 0.4,  // Repulse duration
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',  // Color of the particles
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,  // Show lines between particles
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,  // Enable particle movement
            outModes: 'bounce',  // What happens when particles reach the edge
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,  // Density control
            },
            value: 80,  // Number of particles
          },
          opacity: {
            value: 0.5,  // Opacity of particles
          },
          shape: {
            type: 'circle',  // Shape of the particles
          },
          size: {
            value: { min: 1, max: 5 },  // Particle size range
          },
        },
        detectRetina: true,  // Enables retina detection for high-DPI screens
      },
    };
  },
});
</script>

<style scoped>
/* Add custom styles for your error page if necessary */
</style>